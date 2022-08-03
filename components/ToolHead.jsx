import React, { useState } from 'react';
import axios from 'axios';
import InputModal from './InputModal';

const ToolHead = () => {
    const [str, setStr] = useState("")
    const post = () => {
        axios({
            url: "/api/postData",
            method: "POST",
            data: {
                body: "Fate,Demo,Test",
                content: []
            }
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div className='w-100 py-2 px-4 d-flex justify-content-between'>
            <div className='d-flex gap-2'>
                <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="bi bi-pencil" />
                    <span>添加</span>
                </button>
                <button className='btn btn-danger'>
                    <i className="bi bi-x-square-fill" />
                    <span>刪除</span>
                </button>
            </div>
            <input placeholder='search'/>
            <InputModal>
                <input />
            </InputModal>
        </div>
    );
};
export default ToolHead;