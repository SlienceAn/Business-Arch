import { useState } from 'react'
import TreeView from '../components/TreeView'
import ToolHead from '../components/ToolHead'
import Data from '../public/Data.json'
import { getAllBody, Context } from '../public/lib'

export default function App() {
  const [context, setContext] = useState({})
  return (
    <Context.Provider value={[context, setContext]}>
      <ToolHead parentTitle={getAllBody(Data)} />
      <div className='TreePanel'>
        <ul>
          <TreeView data={Data} />
        </ul>
      </div>
      <div className='TreePanel'>
        <ul>
          <TreeView data={context} />
        </ul>
      </div>
    </Context.Provider>
  )
}
