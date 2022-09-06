import { useState, useEffect } from 'react';
import TreeView from '../components/TreeView'
import { BsPlusCircleFill, BsDashCircleFill } from 'react-icons/bs';
import { getAllBody } from '../public/lib'

const NewPage = () => {
    const [context, setContext] = useState({
        body: "社會局",
        content: []
    })
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
        <div className='d-flex px-4 py-2'>
            <div className='w-25 bg-white p-4'>
                <div className='text-center mb-4 d-flex gap-2 justify-content-center'>
                    <i className="bi bi-pencil" />
                    <h4><strong>新增檔案</strong></h4>
                </div>
                <div>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='parentItem'>
                            <strong>選擇添加子項目標題</strong>
                        </label>
                        <select id='parentItem' className='form-control' onChange={(event) => getValue(event, "select")}>
                            <option>請下拉選擇項目</option>
                            {[...new Set(getAllBody(context))].map((el, idx) => <option key={el + idx}>{el}</option>)}
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
                                <span>
                                    <strong>添加子項</strong>
                                </span>
                                <BsPlusCircleFill fontSize="1.5rem" />
                            </label>
                            <label
                                className='form-label d-flex align-content-end gap-2'
                                htmlFor='childItem'
                                onClick={removeCol}
                            >
                                <span>
                                    <strong>刪除子項</strong>
                                </span>
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
                </div>
                <div className='d-flex gap-2'>
                    <button className='btn btn-bg text-white' onClick={postData}>確認添加</button>
                    <button className='btn btn-bg text-white'>全部重置</button>
                    <button className='btn btn-bg text-white'>儲存檔案</button>
                </div>
            </div>
            <div className='w-75'>
                <div className='TreePanel'>
                    <ul>
                        <TreeView data={context} />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NewPage;