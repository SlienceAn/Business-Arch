import path from 'path'
import wordExtract from 'word-extractor'
export default function Nami(req, res) {
  new wordExtract()
    .extract(path.resolve() + "/public/demo.docx")
    .then(doc => {
      const archData = {
        "body": "",
        content: []
      };
      const content = doc.getBody()
      console.log(doc.getHeaders())
      console.log(content.split("Start"))
      archData["body"] = content.split("Start")[0]
      content.split("Start")[1].split("\n").map(el => archData.content.push({
        "body": el,
        content: []
      }))
      res.status(200).json(archData) 
    })
}
