import fs from 'fs'
import fullData from '../../public/Data.json'
export default function getData(req, res) {
  // fs.readFile(process.cwd() + '/public/demo.txt', (err, data) => {
  //   if (!err) {
  //     console.log(data.toString())
  //   }
  // })  
  res.status(200).json(fullData)
}

//抓取word文件..Test
//import wordExtract from 'word-extractor'
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
