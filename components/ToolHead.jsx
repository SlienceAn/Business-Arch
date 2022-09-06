import React, { useState } from 'react';
import { BsPlusCircleFill, BsDashCircleFill } from 'react-icons/bs';
import InputModal from './InputModal';
import ToolButton from './ToolButton';
import axios from 'axios'

const ToolHead = ({ parentTitle, setContext, context }) => {
    const [childVal, setChildVal] = useState([])
    const [parentVal, setParentVal] = useState("")
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
    const removeCol = () => {
        const arr = [...childVal]
        arr.pop()
        setChildVal(arr)
    }

    const saveFile = () => {
        axios({
            method: "POST",
            url: "/api/DataPool",
            data: context
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    const postData = () => {
        const newContext = Object.assign({}, context)
        addDeepObject(newContext, parentVal)
        setContext(newContext)
    }
    const addDeepObject = (dataObj, val) => {
        if (dataObj.body === val) {
            for (let i = 0; i < childVal.length; i++) {
                dataObj.content.push(childVal[i])
            }
            setChildVal([])
        }
        for (const i of dataObj.content) {
            addDeepObject(i, val)
        }
    }
    return (
        <>
            <div className='w-100 py-3 px-4 d-flex justify-content-between' style={{ background: '#141b25' }}>
                <div className='d-flex gap-4'>
                    <button className='btn btn-bg text-white d-flex gap-2' data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-pencil" />
                        <span>添加架構</span>
                    </button>
                    <ToolButton
                        btnStyle="primary"
                        icon="file-earmark-fill"
                        text="選擇存檔紀錄"
                        onClick={saveFile}
                    />
                </div>
                <input placeholder='search' />
            </div>
            <InputModal postData={postData}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='parentItem'>選擇添加子項目標題</label>
                    <select id='parentItem' className='form-control' onChange={(event) => getValue(event, "select")}>
                        <option>請下拉選擇項目</option>
                        {[...new Set(parentTitle)].map((el, idx) => <option key={el + idx}>{el}</option>)}
                    </select>
                </div>
                <div className='mb-3'>
                    <div className='d-flex gap-3'>
                        <label
                            className='form-label d-flex align-content-end gap-2'
                            htmlFor='childItem'
                            onClick={() => setChildVal([...childVal, {
                                body: "",
                                content: []
                            }])}
                        >
                            <span>添加子項</span>
                            <BsPlusCircleFill fontSize="1.5rem" />
                        </label>
                        <label
                            className='form-label d-flex align-content-end gap-2'
                            htmlFor='childItem'
                            onClick={removeCol}
                        >
                            <span>刪除子項</span>
                            <BsDashCircleFill fontSize="1.5rem" />
                        </label>
                    </div>
                    {childVal.map((el, idx) =>
                        <input
                            key={idx}
                            id='childItem'
                            className='form-control mb-2'
                            placeholder={"第" + (idx + 1) + "欄"}
                            onChange={(event) => getValue(event, "input", idx)}
                        />)
                    }
                </div>
            </InputModal>
        </>
    );
}
export default ToolHead;