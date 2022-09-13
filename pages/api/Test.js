import fs from 'fs'

export default function Test(req, res) {
    fs.readFile('https://business-arch.vercel.app/data_pool/demo-4.json', (err, data) => {
        if (err) {
            res.status(404).send(err)
        } else {
            res.status(200).json(JSON.parse(data.toString()))
        }
    })
}