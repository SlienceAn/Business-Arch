import { useState } from 'react'
import { useRouter } from 'next/router'
import { BsPencilSquare, BsBoxArrowInDown, BsFillTrashFill } from 'react-icons/bs'
import html2canvas from 'html2canvas'
import InputModal from '../components/InputModal'
import axios from 'axios'

const ToolNav = ({ context, currentTree, fileName }) => {
    const [text, setText] = useState({
        title: "",
        content: "",
        requestFunc: () => { }
    })
    const router = useRouter()
    const eventItem = (cate) => {
        if (cate === "update") {
            setText({
                title: "修改存檔",
                content: "確定要修改檔案嗎?",
                requestFunc: () => {
                    router.push({
                        pathname: "/NewPage",
                        query: { page: "update", context:JSON.stringify(context) }
                    })
                }
            })
        }
        if (cate === "delete") {
            setText({
                title: "刪除存檔",
                content: "確定要刪除檔案嗎?",
                requestFunc: () => {
                    axios.delete("/api/DataPool", { data: fileName })
                        .then(res => {
                            if (res.data.success) {
                                
                            }
                        })
                        .catch(err => console.log(err))
                }
            })
        }
    }
    const htmlToImage = () => {
        if (currentTree !== null) {
            html2canvas(currentTree.current).then(canvas => {
                const img = canvas.toDataURL("image/jpeg", 1)
                const link = document.createElement('a')
                link.href = img
                link.download = fileName
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
            })
        }
    }
    return (
        <>
            <div className="base">
                <div className="menu">
                    <div className="icon">
                        <div className="bar" />
                    </div>
                </div>
                <div className="icons">
                    <div className='icons-top'
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => eventItem("delete")}
                    >
                        <BsFillTrashFill fontSize="2rem" />
                    </div>
                    <div
                        className='icons-middle'
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => eventItem("update")}
                    >
                        <BsPencilSquare fontSize="2rem" color='white' />
                    </div>
                    <div className='icons-bottom' onClick={htmlToImage}>
                        <BsBoxArrowInDown fontSize="2rem" />
                    </div>
                </div>
                <div className="section">
                    <div className="cover-outside">
                        <div className="cover-inside">
                            <span className="content" />
                        </div>
                    </div>
                </div>
            </div>
            <InputModal title={text.title} click={text.requestFunc}>
                <div>{text.content}</div>
            </InputModal>
        </>
    )
}

export default ToolNav;