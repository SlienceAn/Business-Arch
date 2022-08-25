import { useState } from 'react'
import TreeView from '../components/TreeView'
import ToolHead from '../components/ToolHead'
import { getAllBody, Context } from '../public/lib'

export default function App() {
  const [context, setContext] = useState({
    body: "社會",
    content: []
  })
  return (
      <Context.Provider value={[context, setContext]}>
        <ToolHead parentTitle={getAllBody(context)} />
        <div className='TreePanel'>
          <ul>
            <TreeView data={context} />
          </ul>
        </div>
      </Context.Provider>
  )
}
