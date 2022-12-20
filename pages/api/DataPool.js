import dayjs from 'dayjs'
import { MongoClient } from 'mongodb'
import { pw } from '../../Setup/pw'

const url = `mongodb+srv://beast964089:${pw}@cluster0.mb1fb2n.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url)
const dbName = "project_content"

export default async function getData(req, res) {
  //Get...
  if (req.method === "GET") {
    if (!req.query.id) {
      let payload = [];
      await client.connect();
      await client.db(dbName).collection("list").find({}).toArray()
        .then(data => {
          data.map(el => {
            payload.push({
              fileName: el.fileName,
              dateTime: el.dateTime
            })
          })
          res.status(200).json({
            success: true,
            message: "查詢成功",
            payload
          })
        }).catch(err => {
          res.status(400).json({
            success: true,
            message: "查詢失敗," + err
          })
        }).finally(() => {
          client.close()
        })
    } else {
      await client.connect()
      await client.db(dbName).collection("list").findOne({ fileName: req.query.id })
        .then(data => {
          res.status(200).json({
            success: true,
            message: "查詢成功",
            payload: JSON.parse(data.content)
          })
        }).finally(() => client.close())
    }
  }
  //Post...
  if (req.method === "POST") {
    const context = req.body.context;
    const jsonContent = JSON.stringify(context)
    await client.connect()
    await client.db(dbName).collection("list").insertOne({
      fileName: req.body.fileName,
      dateTime: dayjs().format('YYYY/MM/DD HH:mm:ss'),
      content: jsonContent
    }).then(data => {
      res.status(200).json({
        success: true,
        message: "新增成功",
      })
    }).catch(err => {
      res.status(404).json({
        success: false,
        message: "新增失敗," + err,
      })
    }).finally(() => client.close())
  }
  //Delete...
  if (req.method === "DELETE") {
    if (req.body !== "") {
      console.log(req.body)
      await client.connect()
      await client.db(dbName).collection("list").deleteOne({ fileName: req.body })
        .then(() => {
          res.status(200).json({
            success: true,
            message: "刪除成功"
          })
        }).catch(err => {
          res.status(404).json({
            success: false,
            message: "刪除失敗"
          })
        }).finally(() => client.close())
    }
  }
  //Patch...
  if (req.method === "PATCH") {

  }
}

