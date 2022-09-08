import fs from 'fs'
import dayjs from 'dayjs'
import path from 'path'

export default function getData(req, res) {
  if (req.method === "GET") {
    if (!req.query.id) {
      let files = []
      fs.readdir(process.cwd() + '/public/data_pool', (err, file) => {
        if (err) {
          res.status(404).json({
            success: false,
            message: err
          })
        } else {
          let payload = []
          files = [...file]
          res.status(200).json({
            success: true,
            message: "查詢成功",
            payload: files
          })
        }
      })
    } else {
      fs.readFile(process.cwd() + `/public/data_pool/${req.query.id}`, (err, data) => {
        if (err) {
          console.log("Post File", process.cwd() + `/public/data_pool/${req.query.id}`)
          console.log(path.resolve())
          res.status(404).json({
            success: false,
            message: err
          })
        } else {

          res.status(200).json({
            success: true,
            message: "讀取成功",
            payload: JSON.parse(data.toString())
          })
        }
      })
    }
  }
  if (req.method === "POST") {
    const context = req.body.context;
    context['fileName'] = req.body.fileName
    context['dateTime'] = dayjs().format('YYYY/MM/DD HH:mm:ss')
    const jsonContent = JSON.stringify(context)
    fs.writeFile(process.cwd() + `\\public\\data_pool\\${req.body.fileName}.json`, jsonContent, 'utf-8', (err) => {
      if (err) {
        res.status(404).json({
          success: false,
          message: err
        })
      } else {
        res.status(200).json({
          success: true,
          message: "新增成功"
        })
      }
    })
  }
}

