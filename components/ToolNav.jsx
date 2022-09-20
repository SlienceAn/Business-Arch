import { VscColorMode } from 'react-icons/vsc'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { CgExport } from 'react-icons/cg'

const ToolNav = () => {
    const htmlToImg = () => { }
    const fullScreen = () => { }
    const darkMode = () => { }
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
                <div className='icons-bottom'>
                    <CgExport fontSize="2rem" />
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