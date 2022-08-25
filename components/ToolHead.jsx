import React, { useState, useContext } from 'react';
import InputModal from './InputModal';
import { Context } from '../public/lib';
import { BsPlusCircleFill } from 'react-icons/bs';
import ToolButton from './ToolButton';

const testArr = {
    body: "1",
    content: [
        {
            body: "1-1",
            content: [
                {
                    body: "1-1-A",
                    content: [
                        {
                            body: "1-1-A-a",
                            content: []
                        }
                    ]
                }
            ]
        },
        {
            body: "1-2",
            content: [
                {
                    body: "1-2-A",
                    content: []
                },
                {
                    body: "1-2-B",
                    content: []
                }
            ]
        },
        {
            body: "1-3",
            content: []
        }
    ]
}

const ToolHead = ({ parentTitle }) => {
    const [childVal, setChildVal] = useState([{
        body: "",
        content: []
    }])
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
        setContext({ ...context, content: childVal })
        findDeepObject(testArr, "1-2-B")
    }
    const findDeepObject = (dataObj, val) => {
        let arr = [];
        for (let k in dataObj['content']) {
            if (dataObj['content'][k]['body'] === val) {
                console.log("存在")
                console.log(k)
            } else {
                findDeepObject(dataObj['content'][k], val)
            }
        }
        console.log(arr)
    }
    return (
        <>
            <div className='w-100 py-3 px-4 d-flex justify-content-between' style={{ background: '#141b25' }}>
                <div className='d-flex gap-4'>
                    <button className='btn btn-bg text-white d-flex gap-2' data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-pencil" />
                        <span>添加</span>
                    </button>
                    <ToolButton
                        btnStyle="primary"
                        icon="file-earmark-fill"
                        text="存檔"
                    />
                    <ToolButton
                        btnStyle="primary"
                        icon="images"
                        text="匯出圖片"
                    />
                    <ToolButton
                        btnStyle="danger"
                        icon="trash"
                        text="刪除"
                    />
                </div>
                <input placeholder='search' />
            </div>
            <InputModal postData={postData}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='parentItem'>選擇父項</label>
                    <select id='parentItem' className='form-control' onChange={(event) => getValue(event, "select")}>
                        <option>請下拉選擇項目</option>
                        {[...new Set(parentTitle)].map((el, idx) => <option key={el + idx}>{el}</option>)}
                    </select>
                </div>
                <div className='mb-3'>
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
export default React.memo(ToolHead);