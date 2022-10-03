import { useImperativeHandle, forwardRef, useState, useEffect } from 'react'
import { BsFillExclamationTriangleFill, BsCheckLg } from 'react-icons/bs'
import axios from 'axios'

//...bug...
const SaveFile = forwardRef(({ context }, ref) => {
    console.log(ref)
    const [fileName, setFileName] = useState("")
    const [loading, setLoading] = useState(true)
    useImperativeHandle(ref, () => ({
        postFile() {
            axios.post("/api/DataPool", {
                context,
                fileName: "demo-WTF"
            }).then(res => {
                res.data.success ?
                    setLoading(false) : setLoading(true)
            }).catch(err => {
                console.log(err)
            })
        }
    }))
    // useEffect(() => {
    //     if (loading.isSubmit) {
    //         setLoading({ isSubmit: false, isSuccess: false })
    //         setFileName("demo-WTF")
    //     }
    // }, [loading.isSubmit])
    return (
        <>
            <input
                className='form-control mb-2'
                placeholder='輸入存檔名稱'
                onChange={event => setFileName(() => event.target.value)}
            />
            {!loading ?
                <div className='d-flex align-items-center gap-2'>
                    <BsCheckLg fontSize="1.5rem" />
                    <span><strong>存檔成功</strong></span>
                </div> :
                <div className='d-flex align-items-center gap-2'>
                    <BsFillExclamationTriangleFill fontSize="1.5rem" />
                    <span><strong>存檔失敗</strong></span>
                </div>
            }
        </>
    )
})

export default SaveFile;