import React, { useState } from "react";
import "./homepage.scss";
import { getData, addData } from "../../firebase/firestoreFunctions";
const HomePage = () => {
  const [data, setData] = useState([]);

  const handleAddData = async () => {
    const sampleData = { nome: "Mario", cognome: "Rossi" };
    await addData(sampleData);
  };

  const handleGetData = async () => {
    getData().then((a)=>{
      setData(a)
    }).catch((e)=>{
      console.log(e)
    })
   
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleAddData}>Aggiungi Dati</button>
      <button onClick={handleGetData}>Ottieni Dati</button>
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <p>Nome: {item.nome}</p>
            <p>Cognome: {item.cognome}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
