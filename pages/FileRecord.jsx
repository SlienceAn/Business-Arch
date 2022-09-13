import { useEffect, useState } from 'react'
import axios from 'axios'
import { BsInfoCircleFill } from 'react-icons/bs'
import TreeView from '../components/TreeView'

const FileRecord = () => {
    const [res, setRes] = useState([])
    const [currentFile, setCF] = useState({})
    const [active, setActive] = useState("")
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
        axios({
            method: "GET",
            url: "/api/DataPool?id=" + file
        })
            .then(res => setCF(res.data.payload))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='d-flex gap-4'>
            <div className='w-25 p-2 h-100' style={{ background: "rgba(220 220 220);)" }}>
                {res.length === 0 ?
                    <div>讀取中</div> :
                    res.map(ctx =>
                        <Card
                            key={ctx.fileName}
                            name={ctx.fileName}
                            date={ctx.dateTime}
                            active={active}
                            click={() => selectData(ctx.fileName)}
                        />)}
            </div>
            <div className='w-75'>
                <h4 className='text-white'>{active}</h4>
                {Object.keys(currentFile).length === 0 ?
                    <div className='text-white'>No Data</div> :
                    <div className='TreePanel' style={{ fontWeight: 'bolder' }}>
                        <ul>
                            <TreeView data={currentFile} />
                        </ul>
                    </div>}
            </div>
        </div>
    );
};

const Card = ({ name, date, active, click }) => {
    return (
        <div className='card flex-row border-0 mb-2' onClick={click}>
            <div className='card-body w-75 p-2'>
                <div><strong>{name}</strong></div>
                <span>{date}</span>
            </div>
            <div id={active === name ? "card-arrow" : ""} className='card-side w-25'>
                <BsInfoCircleFill fontSize="2rem" />
            </div>
            <style jsx>{`  
              .card:hover{
                cursor: pointer;
              }
              .card-side{
                color:#fff;
                background-color:#01897d;;
                display:flex;
                justify-content:center;
                align-items:center;
                position:relative;
              }
              #card-arrow::before{
                position: absolute;
                content: "";
                left:100%;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 15px 0 15px 25px;
                border-color: transparent transparent transparent #01897d;
              }
            `}</style>
        </div>
    )
}
export default FileRecord;