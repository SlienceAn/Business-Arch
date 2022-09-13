import axios from 'axios'

export default function Test(req, res) {
    axios.get('https://business-arch.vercel.app/data_pool/demo-4.json')
        .then(files => {
            res.status(200).json(JSON.parse(files.data.toString()))
        })

}