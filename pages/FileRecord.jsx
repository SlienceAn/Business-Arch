import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import TreeView from '../components/TreeView'
import ToolNav from '../components/ToolNav'
import Loading from '../components/Loading'

const FileRecord = () => {
    const [res, setRes] = useState([])
    const [currentFile, setCF] = useState({})
    const [active, setActive] = useState("")
    const [isLoading, setLoading] = useState(true)
    const [currentTree, setCT] = useState(null)
    const treeCanvas = useRef(null)

    const fetchData = () => {
        axios({
            method: "GET",
            url: "/api/DataPool",
        })
            .then(res => {
                if (res.data.success) {
                    setRes(res.data.payload)
                }
            })
            .catch(err => console.log(err))
    }
    const selectData = (file) => {
        setActive(file)
        setLoading(true)
        axios({
            method: "GET",
            url: "/api/DataPool?id=" + file
        })
            .then(res => {
                setCF(res.data.payload)
                setLoading(false)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
    useEffect(() => {
        if (Object.keys(currentFile).length !== 0) {
            setCT(treeCanvas)
        }
    }, [currentFile])
    return (
        <div className='d-flex gap-5 h-100'>
            <div className='p-2 h-100' style={{ background: "rgb(220 220 220)", width: "20%" }}>
                {res.length === 0 ?
                    <Loading color="#333" /> :
                    res.map(ctx =>
                        <Card
                            key={ctx.fileName}
                            name={ctx.fileName}
                            date={ctx.dateTime}
                            active={active}
                            click={() => selectData(ctx.fileName)}
                        />)}
            </div>
            <div className='position-relative' style={{ width: '80%' }}>
                <ToolNav currentTree={currentTree} />
                {Object.keys(currentFile).length === 0 ? <div className='text-white'>No data</div> :
                    <>
                        <h4 className='text-white'>{active}</h4>
                        {isLoading ? <Loading color="#fff" /> :
                            <div ref={treeCanvas} className='TreePanel' style={{ fontWeight: 'bolder' }}>
                                <ul><TreeView data={currentFile} /></ul>
                            </div>
                        }
                    </>}
            </div>
        </div>
    )
}

export default FileRecord;