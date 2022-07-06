import path from 'path'
import wordExtract from 'word-extractor'

export default function Nami(req, res) {
  new wordExtract()
    .extract(path.resolve() + "/public/demo.docx")
    .then(doc => {
      const archData = {
        "body": "社會局",
        content: []
      };
      const content = doc.getBody()
      content.split(/\n/).map(el => {
        if (el.match(/-/)) {
          archData["content"].push({
            body: el.replace("-", ""),
            content: [
              {
                body: "智障",
                content: []
              }
            ]
          })
        }
      })
      res.status(200).json(archData)
    })
}
