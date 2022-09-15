import fs from 'fs'
import dayjs from 'dayjs'
import { promisify } from 'util'
import path from 'path';

const readfileAsync = promisify(fs.readFile);

export default function getData(req, res) {
  if (req.method === "GET") {
    //Get All
    if (!req.query.id) {
      let files = []
      let payload = []
      fs.readdir(process.cwd() + '/public/data_pool', (err, file) => {
        if (err) {
          res.status(404).json({
            success: false,
            message: err
          })
        } else {
          for (let i = 0; i < file.length; i++) {
            files.push(readfileAsync(process.cwd() + `/public/data_pool/${file[i]}`))
          }
          Promise.all(files).then(response => {
            for (const i in response) {
              payload.push({
                fileName: JSON.parse(response[i].toString())['fileName'],
                dateTime: JSON.parse(response[i].toString())['dateTime']
              })
            }
            res.status(200).json({
              success: true,
              message: "查詢成功",
              payload: payload
            })
          })
            .catch(err => {
              res.status(500).json({
                success: false,
                message: err
              })
            })
        }
      })
    } else {
      fs.readFile(process.cwd() + `/public/data_pool/${req.query.id}.json`, (err, data) => {
        if (err) {
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

  //Add new json
  if (req.method === "POST") {
    const context = req.body.context;
    context['fileName'] = req.body.fileName
    context['dateTime'] = dayjs().format('YYYY/MM/DD HH:mm:ss')
    const jsonContent = JSON.stringify(context)
    fs.appendFile(path.join('/data_pool', `${req.body.fileName}.json`), jsonContent, 'utf-8', (err) => {
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

