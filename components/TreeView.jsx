import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { AiFillFolderOpen, AiFillFolder } from 'react-icons/ai';
const TreeView = (props) => {
    const { data } = props
    const [isShow, setShow] = useState(true)
    const router = useRouter()
    if (data['content'] && data.content.length !== 0) {
        return (
            <li className={data.body === "社會局" ? "root" : ""}>
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
                <span onClick={() => router.push("/TestRoute/" + data.body)}>
                    {data.body}
                </span>
            </li>
        )
    }
}


export default TreeView;
