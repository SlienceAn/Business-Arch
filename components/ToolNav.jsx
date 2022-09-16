import { VscColorMode } from 'react-icons/vsc'
import { BsArrowsFullscreen } from 'react-icons/bs'
import { CgExport } from 'react-icons/cg'
const ToolNav = () => {
    return (
        <div className="base">
            <div className="menu">
                <div className="icon">
                    <div className="bar"></div>
                </div>
            </div>
            <div className="icons">
                <div className='icons-top'>
                    <VscColorMode fontSize="2rem" />
                </div>
                <div className='icons-middle'>
                    <BsArrowsFullscreen fontSize="2rem" />
                </div>
                <div className='icons-bottom'>
                    <CgExport fontSize="2rem" />
                </div>
            </div>
            <div className="section">
                <div className="cover1">
                    <div className="cover2">
                        <a className="content" href="#calender"></a>
                    </div>
                </div>
            </div>
            <a className="section-static top" href="#profile"></a>
            <a className="section-static bottom" href="#dashboard"></a>
        </div>
    );
};

export default ToolNav;