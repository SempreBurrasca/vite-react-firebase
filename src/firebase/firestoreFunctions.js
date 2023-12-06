// firebase/firestoreFunctions.js
import { db } from './firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const addData = async (data) => {

  try {
    const docRef = await addDoc(collection(db, "collezione"), data);
    console.log("Documento scritto con ID: ", docRef.id);
  } catch (e) {
    console.error("Errore nell'aggiungere il documento: ", e);
  }
};

const getData = async () => {
  try {
const data = []
    const querySnapshot = await getDocs(collection(db, "collezione"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      data.push(doc.data())
    });
    return data
  } catch (e) {
    console.error("Errore nel recupero dei documenti: ", e);
    return e 
  }
};

export { addData, getData };
