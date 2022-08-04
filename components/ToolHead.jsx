import React, { useState } from 'react';
import InputModal from './InputModal';

const ToolHead = ({ parentTitle }) => {
    const [childVal, setChildVal] = useState([])
    const [parentVal, setParentVal] = useState("")
    const getValue = (event, cate) => {
        if (cate === "select") {
            setParentVal(event.target.value)
        }
        if (cate === "input") {
            setChildVal(event.target.value)
        }
    }
    //test
    const postData = () => {
        const obj = {
            body: parentVal,
            content: [{
                body: childVal,
                content: []
            }]
        }
    }
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
            <InputModal postData={postData}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='parentItem'>選擇父項</label>
                    <select id='parentItem' className='form-control' onChange={(event) => getValue(event, "select")}>
                        <option>請下拉選擇項目</option>
                        {parentTitle.map((el, idx) => <option key={el + idx}>{el}</option>)}
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='childItem'>添加子項</label>
                    <input id='childItem' className='form-control' onChange={(event) => getValue(event, "input")} />
                </div>
            </InputModal>
        </>
    );
};
export default ToolHead;