import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore, collection, getDocs, setDoc, addDoc, doc } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDQAOOh_pFVWQqVhaDKLKWFVRaGeMTSylM",
    authDomain: "business-arch-data.firebaseapp.com",
    projectId: "business-arch-data",
    storageBucket: "business-arch-data.appspot.com",
    messagingSenderId: "598351833136",
    appId: "1:598351833136:web:52e235c5640004c429a5f5",
    measurementId: "G-SXNESVYHMZ"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const db = getFirestore(app);

export default async function test(req, res) {
    const citiesCol = collection(db, 'information');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList)
    await setDoc(doc(db, "information", "LA"), {
        web: "Let's Write",
        author: "August",
        like: true
    })
    res.status(200).send("test firebase !!")
}