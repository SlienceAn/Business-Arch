import React, { useState, useContext } from 'react';
import InputModal from './InputModal';
import { Context } from '../public/lib';
import { BsPlusCircleFill } from 'react-icons/bs';

const ToolHead = ({ parentTitle }) => {
    const [childVal, setChildVal] = useState([])
    const [parentVal, setParentVal] = useState("")
    const [context, setContext] = useContext(Context)

    const getValue = (event, cate, idx = 0) => {
        if (cate === "select") {
            setParentVal(event.target.value)
        }
        if (cate === "input") {
            const arr = [...childVal]
            arr[idx]['body'] = event.target.value;
            setChildVal(arr)
        }
    }
    const postData = () => {
        const obj = {
            body: parentVal,
            content: childVal
        }
        setContext(obj)
    }
    return (
        <>
            <div className='w-100 py-2 px-4 d-flex justify-content-between'>
                <div className='d-flex gap-2'>
                    <button className='btn btn-success d-flex gap-2' data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-pencil" />
                        <span>添加</span>
                    </button>
                    <button className='btn btn-danger d-flex gap-2'>
                        <i className="bi bi-x-square-fill" />
                        <span>刪除</span>
                    </button>
                    <button className='btn btn-info d-flex gap-2'>
                        <i className="bi bi-x-square-fill" />
                        <span>存檔</span>
                    </button>
                    <button className='btn btn-info d-flex gap-2'>
                        <i className="bi bi-x-square-fill" />
                        <span>匯出圖片</span>
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
                    <label className='form-label d-flex align-content-end gap-2' htmlFor='childItem'>
                        <span>添加子項</span>
                        <BsPlusCircleFill fontSize="1.5rem" />
                    </label>
                    {
                        childVal.map((el, idx) =>
                            <input id='childItem' className='form-control mb-2' onChange={(event) => getValue(event, "input", idx)} />)
                    }
                </div>
            </InputModal>
        </>
    );
};
export default ToolHead;