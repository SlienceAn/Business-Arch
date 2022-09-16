import { BsFillAlarmFill, BsFillCloudDownloadFill, BsFillDiagram3Fill } from 'react-icons/bs'

const ToolNav = () => {
    return (
        <div className="base">
            <div className="menu">
                <div className="icon">
                    <div className="bar"></div>
                </div>
            </div>
            <div cclassName="icons">
                <BsFillAlarmFill className='a' fontSize="2rem" />
                <BsFillCloudDownloadFill className='b' fontSize="2rem" />
                <BsFillDiagram3Fill className='c' fontSize="2rem" />
                {/* <i className="fa fa-user" aria-hidden="true"></i>
                <i className="fa fa-calendar-o" aria-hidden="true"></i>
                <i className="fa fa-tachometer" aria-hidden="true"></i> */}
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