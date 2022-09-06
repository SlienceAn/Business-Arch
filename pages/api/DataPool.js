import fs from 'fs'
import fullData from '../../public/Data.json'

export default function getData(req, res) {
  if (req.method === "GET") {
    console.log(req.query)
    res.status(200).send("GET Method")
  }
  if (req.method === "POST") {
    const jsonContent = JSON.stringify(req.body)
    fs.writeFile(process.cwd() + '/data_pool/demo.json', jsonContent, 'utf-8', (err) => {
      if (err) {
        console.log("An error occured while writing JSON Object to File.");
        console.log(err)
      }
    })
    res.status(200).json(fullData)
  }
}

