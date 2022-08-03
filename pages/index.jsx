import { useEffect, useState } from 'react'
import TreeView from '../components/TreeView'
import ToolHead from '../components/ToolHead'
import axios from 'axios'

export default function App({ props }) {
  const [archData, setArch] = useState({})
  useEffect(() => {
    axios.get("/api/GetData").then(res => {
      setArch(res.data)
    })
  }, [])
  return (
    <>
      <ToolHead />
      <div className='TreePanel'>
        <ul>
          <TreeView data={archData} />
        </ul>
      </div>
    </>
  )
}
