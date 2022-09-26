import { VscColorMode } from 'react-icons/vsc'
import { BsArrowsFullscreen, BsBoxArrowInDown } from 'react-icons/bs'
import html2canvas from 'html2canvas'

const ToolNav = ({ currentTree }) => {
    const htmlToImage = () => {
        if (currentTree !== null) {
            html2canvas(currentTree.current).then(canvas => {
                const img = canvas.toDataURL("image/jpeg", 1)
                const link = document.createElement('a')
                link.href = img
                link.download = 'Fuck'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
            })
        }
    }
    return (
        <div className="base">
            <div className="menu">
                <div className="icon">
                    <div className="bar" />
                </div>
            </div>
            <div className="icons">
                <div className='icons-top'>
                    <VscColorMode fontSize="2rem" />
                </div>
                <div className='icons-middle'>
                    <BsArrowsFullscreen fontSize="2rem" color='white' />
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