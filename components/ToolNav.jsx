import { useState } from 'react'
import { useRouter } from 'next/router'
import { BsPencilSquare, BsBoxArrowInDown, BsFillTrashFill } from 'react-icons/bs'
import html2canvas from 'html2canvas'
import InputModal from '../components/InputModal'
import axios from 'axios'

const ToolNav = ({ context, fileName, treeCanvas }) => {
    const router = useRouter()
    const [type, setType] = useState("")
    const [isMenu, setMenu] = useState(true)
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
        if (cate === "download") {
            setBtnGroup({
                title: "下載圖片",
                content:
                    <div className='d-flex gap-2'>
                        <div className='w-50'>
                            <label>下載檔案名稱</label>
                            <input
                                className='form-control'
                                defaultValue={fileName}
                                disabled
                            />
                        </div>
                        <div className='w-50'>
                            <label>檔案格式</label>
                            <select
                                className='form-control'
                                onChange={e => setType(e.target.value)}
                            >
                                <option value="JPG">JPG</option>
                                <option value="JPEG">JPEG</option>
                                <option value="PNG">PNG</option>
                            </select>
                        </div>
                    </div>,
                btnClass: "btn btn-primary",
                btnText: "確認下載",
                requestFunc: htmlToImage
            })
        }
    }
    //type is empty...
    const htmlToImage = () => {
        if (treeCanvas !== null) {
            console.log("type", type)
            html2canvas(treeCanvas.current).then(canvas => {
                const img = canvas.toDataURL(`image/${type}`, 1)
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
            <div className="base" style={isMenu ? { backgroundColor: "#fff" } : {}}>
                <div className="menu" onClick={() => setMenu(!isMenu)}>
                    <div className="icon">
                        <div className="bar" />
                    </div>
                </div>
                {isMenu && <div className="icons">
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
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => eventItem("download")}
                    >
                        <BsBoxArrowInDown fontSize="2rem" />
                    </div>
                </div>}
                {isMenu && <div className="section">
                    <div className="cover-outside">
                        <div className="cover-inside">
                            <span className="content" />
                        </div>
                    </div>
                </div>}
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