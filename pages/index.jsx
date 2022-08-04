import { useEffect, useState } from 'react'
import TreeView from '../components/TreeView'
import ToolHead from '../components/ToolHead'
import axios from 'axios'

export default function App() {
  const [archData, setArch] = useState({})
  const [allContent, setAllContent] = useState([])
  const arr = []
  const getAllBody = (body) => {
    Object.values(body).map(el => {
      if (Array.isArray(el)) {
        el.map(ctx => getAllBody(ctx))
      } else {
        arr.push(el)
      }
    })
    return arr;
  }
  useEffect(() => {
    axios.get("/api/GetData").then(res => {
      setAllContent(getAllBody(res.data))
      setArch(res.data)
    })
  }, [])
  return (
    <>
      <ToolHead parentTitle={allContent} />
      <div className='TreePanel'>
        <ul>
          <TreeView data={archData} />
        </ul>
      </div>
    </>
  )
}
