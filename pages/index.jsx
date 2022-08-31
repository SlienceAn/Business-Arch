import { useState } from 'react'
import TreeView from '../components/TreeView'
import ToolHead from '../components/ToolHead'
import { getAllBody } from '../public/lib'

export default function App() {
  const [context, setContext] = useState({
    body: "社會",
    content: []
  })

  return (
    <>
      <ToolHead parentTitle={getAllBody(context)} context={context} setContext={setContext} />
      <div className='TreePanel'>
        <ul>
          <TreeView data={context} />
        </ul>
      </div>
    </>
  )
}
