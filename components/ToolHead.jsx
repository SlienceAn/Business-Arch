import React, { useState } from 'react';
import axios from 'axios';
import InputModal from './InputModal';

const ToolHead = ({ parentTitle }) => {
    const [str, setStr] = useState("")
    return (
        <>
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
                <input placeholder='search' />
            </div>
            <InputModal>
                <select className='form-control'>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
                <input className='form-control' />
            </InputModal>
        </>
    );
};
export default ToolHead;