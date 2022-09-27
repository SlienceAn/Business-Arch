import { BsPencilSquare, BsBoxArrowInDown, BsFillTrashFill } from 'react-icons/bs'
import html2canvas from 'html2canvas'

const ToolNav = ({ currentTree, fileName }) => {
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
    const fullScreen = () => {
        if (currentTree != null) {
            // document.documentElement(currentTree.current)
        }
    }
    const deleteFile = () => { }
    return (
        <div className="base">
            <div className="menu">
                <div className="icon">
                    <div className="bar" />
                </div>
            </div>
            <div className="icons">
                <div className='icons-top'>
                    <BsFillTrashFill fontSize="2rem" onClick={deleteFile}/>
                </div>
                <div className='icons-middle' onClick={fullScreen}>
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
    )
}

export default ToolNav;