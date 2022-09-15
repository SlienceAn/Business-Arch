import dayjs from 'dayjs'
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, addDoc, doc } from 'firebase/firestore/lite';

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
const db = getFirestore(app);
const collection = "information";

export default async function getData(req, res) {
  if (req.method === "GET") {
      //reset...
  }
  if (req.method === "POST") {
    const context = req.body.context;
    const jsonContent = JSON.stringify(context)
    await setDoc(doc(db, collection, req.body.fileName), {
      fileName: req.body.fileName,
      dateTime: dayjs().format('YYYY/MM/DD HH:mm:ss'),
      content: jsonContent
    })
      .then(() => {
        res.status(200).json({
          success: true,
          message: "新增成功",
        })
      })
      .catch(err => {
        res.status(404).json({
          success: false,
          message: "新增失敗," + err,
        })
      })
  }
}

