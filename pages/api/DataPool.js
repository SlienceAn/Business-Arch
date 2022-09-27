import dayjs from 'dayjs'
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, getDoc, getDocs, collection as Collection } from 'firebase/firestore/lite';

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
  //Get...
  if (req.method === "GET") {
    if (!req.query.id) {
      let payload = [];
      const getAllDoc = await getDocs(Collection(db, collection));
      getAllDoc.forEach(ctx => {
        payload.push({
          fileName: ctx.data().fileName,
          dateTime: ctx.data().dateTime
        })
      })
      res.status(200).json({
        success: true,
        message: "查詢成功",
        payload
      })
    } else {
      const docData = await getDoc(doc(db, collection, req.query.id))
      if (docData.exists()) {
        res.status(200).json({
          success: true,
          message: "查詢成功",
          payload: JSON.parse(docData.data().content)
        })
      }
    }
  }
  //Post...
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
  //Delete...
  if (req.method === "DELETE") {

  }
}

