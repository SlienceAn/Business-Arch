import { useEffect, useState, useRef } from 'react'
import Card from '../components/Card'
import Tree from '../components/Tree'
import ToolNav from '../components/ToolNav'
import Loading from '../components/Loading'
import { useAxios } from '../public/lib'
const common = {
    method: "GET",
    url: "/DataPool",
}
export default function FileRecord() {
    const [currentTree, setCT] = useState(null)
    const [fileID, setFileID] = useState({ ...common, params: {} })
    const [active, setActive] = useState("")
    const { response: getAllResponse, status: getAllStatus } = useAxios(common)
    const { response: getFileResponse, status: getFileStatus } = useAxios(fileID)
    const treeCanvas = useRef(null)
    useEffect(() => {
        if (fileID.params.id !== "") setActive(fileID.params.id)
    }, [fileID.params.id])
    useEffect(() => {
        setCT(treeCanvas)
    }, [getFileResponse])
    return (
        <div className='d-flex gap-5 h-100'>
            <div className='p-2 h-100' style={{ background: "rgb(220 220 220)", width: "20%" }}>
                {getAllStatus === 'loading' ?
                    <Loading color="#333" /> :
                    getAllResponse.payload.map(ctx =>
                        <Card
                            key={ctx.fileName}
                            name={ctx.fileName}
                            date={ctx.dateTime}
                            active={active}
                            click={() => setFileID({ ...common, params: { id: ctx.fileName } })}
                        />)}
            </div>
            <div className='position-relative' style={{ width: '80%' }}>
                <ToolNav context={getFileResponse.payload} currentTree={currentTree} fileName={active} />
                {Object.keys(getFileResponse.payload).length === 0 ?
                    <div className='text-white'>No data</div> :
                    <>
                        <h4 className='text-white'>{active}</h4>
                        {getFileStatus === 'loading' ?
                            <Loading color="#fff" /> :
                            <Tree ref={treeCanvas}>
                                <Tree.view data={getFileResponse.payload} />
                            </Tree>
                        }
                    </>}
            </div>
        </div>
    )
}