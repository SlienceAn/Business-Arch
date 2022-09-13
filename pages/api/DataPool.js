import fs from 'fs'
import dayjs from 'dayjs'
import { promisify } from 'util'

const readfileAsync = promisify(fs.readFile);
const readdirAsync = promisify(fs.readdir);

export default function getData(req, res) {
  if (req.method === "GET") {
      //Get All
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
            for (let i = 0; i < files.length; i++) {
              payload.push({
                fileName: files[i],
                dateTime: "2022-01-01"
              })
            }
            res.status(200).json({
              success: true,
              message: "查詢成功",
              payload: files
            })
          }
        })

        //-------------------------------------------------
        // readdirAsync('https://business-arch.vercel.app/data_pool')
        //   .then(file => {
        //     for (const i in file) {
        //       files.push(readfileAsync(`https://business-arch.vercel.app/data_pool/${file[i]}`))
        //     }
        //     Promise.all(files).then(response => {
        //       let payload = []
        //       for (const i in response) {
        //         payload.push({
        //           fileName: JSON.parse(response[i].toString())['fileName'],
        //           dateTime: JSON.parse(response[i].toString())['dateTime']
        //         })
        //       }
        //       res.status(200).json({
        //         success: true,
        //         message: "查詢成功",
        //         payload
        //       })
        //     }).catch(err => {
        //       res.status(404).json({
        //         success: false,
        //         message: "Get All Data," + err
        //       })
        //     })
        //   })
        //   .catch(err => {
        //     res.status(404).json({
        //       success: false,
        //       message: "Get All," + err
        //     })
        //   })
      }
      // else {
        // readfileAsync(`https://business-arch.vercel.app/data_pool/${req.query.id}.json`)
        //   .then(data => {
        //     res.status(200).json({
        //       success: true,
        //       message: "讀取成功",
        //       payload: JSON.parse(data.toString())
        //     })
        //   })
        //   .catch(err => {
        //     res.status(404).json({
        //       success: false,
        //       message: "Read single," + err
        //     })
        //   })
      // }
  }
  //Add new json
  if (req.method === "POST") {
    try {
      const context = req.body.context;
      context['fileName'] = req.body.fileName
      context['dateTime'] = dayjs().format('YYYY/MM/DD HH:mm:ss')
      const jsonContent = JSON.stringify(context)
      fs.writeFile(process.cwd() + `/data_pool/${req.body.fileName}.json`, jsonContent, 'utf-8', (err) => {
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
    } catch (err) {
      res.status(405);
      res.end();
    }
  }
}

