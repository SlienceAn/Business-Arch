import path from 'path'
import wordExtract from 'word-extractor'
import fullData from '../../public/Data.json'
export default function getData(req, res) {
  res.status(200).json(fullData)
}

//抓取word文件..Test
// export default function Nami(req, res) {
//   new wordExtract()
//     .extract(path.resolve() + "/public/demo.docx")
//     .then(doc => {
//       const archData = {
//         "body": "",
//         content: []
//       };
//       const content = doc.getBody()
//       content.split(/\n/).map(el => {
//         if (el.match(/-/)) {
//           archData["content"].push({
//             body: el.replace("-", ""),
//             content: [
//               {
//                 body: "",
//                 content: []
//               }
//             ]
//           })
//         }
//       })
//       res.status(200).json(fullData)
//     })
// }
