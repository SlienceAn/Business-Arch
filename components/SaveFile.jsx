import InputModal from './InputModal'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BsFillExclamationTriangleFill, BsCheckLg } from 'react-icons/bs'

export default function SaveFile({ context }) {
    const [fileName, setFileName] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState({
        isPost: false,
        isSuccess: false
    })
    const postFile = () => {
        if (fileName) {
            axios.post("/api/DataPool", {
                context,
                fileName
            }).then(res => {
                res.data.success ? setLoading({
                    isPost: true,
                    isSuccess: true
                }) : setLoading({
                    isPost: true,
                    isSuccess: false
                })
            }).catch(err => setError(err.message))
        } else {
            setLoading({ isPost: true, isSuccess: false })
            setError("檔案名稱不能為空")
        }
    }
    return (
        <InputModal title="儲存檔案" renderButton={() => <button
            type="button"
            className="btn btn-primary"
            onClick={postFile}
        >確認存檔
        </button>}>
            <input
                className='form-control mb-2'
                placeholder='輸入存檔名稱'
                onChange={event => setFileName(event.target.value)}
            />
            {(loading.isPost && loading.isSuccess) && <SaveSuccess />}
            {(loading.isPost && !loading.isSuccess) && <SaveFail mes={error} />}
        </InputModal>
    )
}
const SaveSuccess = () => {
    return (
        <div className='d-flex align-items-center gap-2'>
            <BsCheckLg fontSize="1.5rem" />
            <span><strong>存檔成功!</strong></span>
        </div>
    )
}
const SaveFail = ({ mes }) => {
    return (
        <div className='d-flex align-items-center gap-2'>
            <BsFillExclamationTriangleFill fontSize="1.5rem" />
            <span><strong>{mes}</strong></span>
        </div>
    )
}