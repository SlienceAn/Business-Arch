import { useState, useRef, useEffect } from 'react';
import TreeView from '../components/TreeView'
import InputModal from '../components/InputModal'
import SelectGroup from '../components/SelectGroup';
import { AddChild, DeleteChild } from '../components/ChildControl'
import SaveFile from '../components/SaveFile';
import { useSerial } from '../public/lib';
import { useRouter } from 'next/router'

export default function NewPage() {
    const router = useRouter()
    const [context, setContext] = useState({
        body: "",
        id: "Head",
        content: []
    })
    const [childVal, setChildVal] = useState([])
    const [parentVal, setParentVal] = useState("")
    const saveFile = useRef(null)
    const getValue = (event, cate, idx = 0) => {
        if (cate === "index") {
            setContext({
                ...context,
                body: event.target.value
            })
        }
        if (cate === "select") {
            setParentVal(event.target.value)
        }
        if (cate === "input") {
            const arr = [...childVal]
            arr[idx]['body'] = event.target.value
            const serialID = useSerial(arr.length)
            for (const i in arr) {
                arr[i]['id'] = serialID[i]
            }
            setChildVal(arr)
        }
    }
    const postData = () => {
        const newContext = Object.assign({}, context)
        addDeepObject(newContext, parentVal)
        setContext(newContext)
    }
    const addDeepObject = (dataObj, val) => {
        if (dataObj.id === val) {
            for (let i = 0; i < childVal.length; i++) {
                dataObj.content.push(childVal[i])
            }
            setChildVal([])
        }
        for (const i of dataObj.content) {
            addDeepObject(i, val)
        }
    }
    useEffect(() => {
        console.log(router)
    }, []);
    return (
        <>
            <div className='d-flex px-4 py-2 gap-4'>
                <div className='w-25 bg-white p-4'>
                    <div className='text-center mb-4 d-flex gap-2 justify-content-center'>
                        <i className="bi bi-pencil" />
                        <h4><strong>新增檔案</strong></h4>
                    </div>
                    <div>
                        <input
                            className='form-control mb-2'
                            placeholder='輸入起始資料'
                            onBlur={event => getValue(event, "index")}
                        />
                        {context.body !== "" && <SelectGroup context={context} getValue={getValue} />}
                        <div className='mb-3'>
                            <div className='d-flex gap-3'>
                                <AddChild setChildVal={setChildVal} childVal={childVal} />
                                <DeleteChild setChildVal={setChildVal} childVal={childVal} />
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
                        <button className='btn btn-bg text-white' onClick={postData}>添加</button>
                        <button className='btn btn-bg text-white' disabled>回到上階</button>
                        <button className='btn btn-bg text-white' onClick={() => setChildVal([])}>重置</button>
                        <button className='btn btn-bg text-white' data-bs-toggle="modal" data-bs-target="#exampleModal">儲存</button>
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
            <InputModal title="儲存檔案" click={saveFile.current !== null && saveFile.current.postFile}>
                <SaveFile ref={saveFile} context={context} />
            </InputModal>
        </>
    )
}