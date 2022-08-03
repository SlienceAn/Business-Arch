import fs from 'fs'
import { promisify } from 'util'
export default function postData(req, res) {
    console.log(req.body)
    const { body, content } = req.body
    const appendFile = promisify(fs.appendFile)
    appendFile(process.cwd() + '/public/demo.txt', body)
        .then(result => res.status(200).send(result))
        .catch(err => console.log(err))
}