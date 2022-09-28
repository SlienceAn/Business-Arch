import { useImperativeHandle, forwardRef, useState, useEffect } from 'react'
import { BsFillExclamationTriangleFill, BsCheckLg } from 'react-icons/bs'
import axios from 'axios'

const SaveFile = forwardRef(({ context }, ref) => {
    const [fileName, setFileName] = useState("")
    const [loading, setLoading] = useState({
        isSubmit: false,
        isSuccess: false
    })
    //....
    useImperativeHandle(ref, () => ({
        postFile() {
            axios.post("/api/DataPool", {
                context,
                fileName: "demo-WTF"//default....
            }).then(res => {
                res.data.success ?
                    setLoading({ isSubmit: true, isSuccess: true }) :
                    setLoading({ isSubmit: true, isSuccess: false })
            })
        }
    }))
    // useEffect(() => {
    //     return () => {
    //         console.log("unmount")
    //         setLoading({ isSubmit: false, isSuccess: false })
    //     }
    // },[])
    return (
        <>
            <input
                className='form-control mb-2'
                placeholder='輸入存檔名稱'
                onChange={event => setFileName(() => event.target.value)}
            />
            {loading.isSubmit && loading.isSuccess &&
                <div className='d-flex align-items-center gap-2'>
                    <BsCheckLg fontSize="1.5rem" />
                    <span><strong>存檔成功</strong></span>
                </div>}
            {loading.isSubmit && !loading.isSuccess &&
                <div className='d-flex align-items-center gap-2'>
                    <BsFillExclamationTriangleFill fontSize="1.5rem" />
                    <span><strong>存檔失敗</strong></span>
                </div>}
        </>
    )
})

export default SaveFile;