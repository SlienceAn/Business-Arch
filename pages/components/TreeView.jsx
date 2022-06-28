import React, { useState } from 'react';
import { AiFillFolderOpen, AiFillFolder } from 'react-icons/ai';

const TreeView = (props) => {
    const { data } = props
    const [isShow, setShow] = useState(false)
    if (data.content.length !== 0) {
        return (
            <li className={data.body === "社會" ? "root" : ""}>
                <span className="d-flex align-items-center gap-1 title-box" onClick={() => setShow(!isShow)}>
                    <span>{data.body}</span>
                    {isShow ? <AiFillFolder /> : <AiFillFolderOpen />}
                </span>
                <ul className={isShow ? "d-none" : ""}>
                    {data.content.map(el => <TreeView data={el} key={el.body} />)}
                </ul>
            </li>
        )
    } else {
        return (
            <li>
                <span>{data.body}</span>
            </li>
        )
    }
}
export default TreeView;
