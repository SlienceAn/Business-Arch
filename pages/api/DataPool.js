import fs from 'fs'
import dayjs from 'dayjs'

export default function getData(req, res) {
  if (req.method === "GET") {
    let files = []
    fs.readdir(process.cwd() + '/data_pool', (err, file) => {
      if (err) {
        res.status(404).json({
          success: false,
          message: err
        })
      } else {
        let payload = []
        files = [...file]
        //非同步問題...
        for (let i = 0; i < files.length; i++) {
          fs.readFileSync(process.cwd() + `/data_pool/${files[i]}`, (err, data) => {
            payload.push({
              fileName: JSON.parse(data.toString()).fileName,
              dateTime: JSON.parse(data.toString()).dateTime
            })
          })
        }
        res.status(200).json({
          success: true,
          message: "查詢成功",
          payload: files
        })
      }
    })
  }
  if (req.method === "POST") {
    const context = req.body.context;
    context['fileName'] = req.body.fileName
    context['dateTime'] = dayjs().format('YYYY/MM/DD HH:mm:ss')
    const jsonContent = JSON.stringify(context)
    fs.writeFile(process.cwd() + `/data_pool/${req.body.fileName}.json`, jsonContent, 'utf-8', (err) => {
      if (err) {
        console.log(err)
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

