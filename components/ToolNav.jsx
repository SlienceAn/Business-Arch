import { useState } from 'react'
import { useRouter } from 'next/router'
import { BsPencilSquare, BsBoxArrowInDown, BsFillTrashFill } from 'react-icons/bs'
import html2canvas from 'html2canvas'
import InputModal from '../components/InputModal'
import axios from 'axios'

const ToolNav = ({ context, currentTree, fileName }) => {
    console.log(typeof currentTree)
    console.log(currentTree)
    const router = useRouter()
    const [btnGroup, setBtnGroup] = useState({
        title: "",
        content: "",
        btnClass: "",
        btnText: "",
        requestFunc: () => { }
    })
    const eventItem = (cate) => {
        if (cate === "update") {
            setBtnGroup({
                title: "修改存檔",
                content: "確定要修改檔案嗎?",
                btnClass: "btn btn-success",
                btnText: "確認修改",
                requestFunc: () => {
                    router.push({
                        pathname: "/NewPage",
                        query: { page: "update", context: JSON.stringify(context) }
                    })
                },
            })
        }
        if (cate === "delete") {
            setBtnGroup({
                title: "刪除存檔",
                content: "確定要刪除檔案嗎?",
                btnClass: "btn btn-danger",
                btnText: "確認刪除",
                requestFunc: () => {
                    axios.delete("/api/DataPool", { data: fileName })
                        .then(res => {
                            router.reload()
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
                    <div
                        className='icons-bottom'
                        onClick={htmlToImage}
                    >
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
            <InputModal title={btnGroup.title} renderButton={() => <button
                type="button"
                className={btnGroup.btnClass}
                onClick={btnGroup.requestFunc}
                data-bs-dismiss="modal"
            >{btnGroup.btnText}
            </button>}>
                <div>{btnGroup.content}</div>
            </InputModal>
        </>
    )
}

export default ToolNav;