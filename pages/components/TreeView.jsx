import React, { useState } from 'react';
import { AiFillFolderOpen } from 'react-icons/ai';

const TreeView = (props) => {
    const { data } = props
    const [isShow, setShow] = useState(true)//須從父層傳?
    if (data.content.length !== 0) {
        return (
            <li className={data.body === "社會" ? "root" : ""} onClick={() => setShow(!isShow)}>
                <div className="d-flex align-items-center gap-1 title-box">
                    <AiFillFolderOpen />
                    <span>{data.body}</span>
                </div>
                <ul>
                    {data.content.map(el => <TreeView data={el} key={el.body} />)}
                </ul>
            </li>
        )
    } else {
        return <li><span>{data.body}</span></li>
    }
}
export default TreeView;
