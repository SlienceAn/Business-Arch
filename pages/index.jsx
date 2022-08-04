import TreeView from '../components/TreeView'
import ToolHead from '../components/ToolHead'
import Data from '../public/Data.json'
import { getAllBody, useAxios } from '../public/lib'

export default function App() {
  return (
    <>
      <ToolHead parentTitle={getAllBody(Data)} />
      <div className='TreePanel'>
        <ul>
          <TreeView data={Data} />
        </ul>
      </div>
    </>
  )
}
