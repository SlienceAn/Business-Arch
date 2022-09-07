import { useEffect, useState } from 'react';
import axios from 'axios';
import { BsInfoCircleFill } from 'react-icons/bs'
import demo2 from '../data_pool/demo-2.json'
import demo1 from '../data_pool/demo-1.json'
import TreeView from '../components/TreeView';

const FileRecord = () => {
    const [res, setRes] = useState([])
    const [currentFile, setCF] = useState({})
    const fetchDate = () => {
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
    const selectDate = () => {

    }
    useEffect(() => {
        fetchDate()
    }, [])
    return (
        <div className='d-flex gap-2'>
            <div className='w-25 p-2 h-100' style={{ background: "rgba(220 220 220);)" }}>
                <Card name="demo-1" click={() => setCF(demo1)} />
                <Card name="demo-2" click={() => setCF(demo2)} />
            </div>
            <div className='w-75'>
                <div className='TreePanel'>
                    <ul>
                        <TreeView data={currentFile} />
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Card = ({ name, date, click }) => {
    return (
        <div className='card flex-row border-0 mb-2' onClick={click}>
            <div className='card-body w-75 p-2'>
                <div><strong>{name}</strong></div>
                <span>date{date}</span>
            </div>
            <div className='card-side w-25'>
                <BsInfoCircleFill fontSize="2rem" />
            </div>
            <style jsx>{`
              .card-side{
                color:#fff;
                background-color:#01897d;;
                display:flex;
                justify-content:center;
                align-items:center;
              }
              .card-side::hover{
                cursor:pointer;
              }
              .card-side::before{

              }
            `}</style>
        </div>
    )
}
export default FileRecord;