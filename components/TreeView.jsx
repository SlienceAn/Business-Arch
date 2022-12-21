import React, { useState } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

const TreeView = (props) => {
    const { data } = props
    const [isShow, setShow] = useState(false)
    if (data['content'] && data.content.length !== 0) {
        return (
            <li>
                <span className="d-flex align-items-center gap-1 title-box" onClick={() => setShow(!isShow)}>
                    <span className="bg-white text-dark px-2 py-2 rounded-3 span-body">
                        {data.body}
                        {isShow ? <AiFillPlusCircle fontSize="1.5rem" /> : <AiFillMinusCircle fontSize="1.5rem" />}
                    </span>
                </span>
                <ul className={isShow ? "d-none" : ""}>
                    {data.content.map(el => <TreeView data={el} key={el.id} />)}
                </ul>
            </li>
        )
    } else {
        return (
            <li>
                <span className='bg-white text-dark px-2 py-2 rounded-3 span-body'>
                    {data.body}
                </span>
            </li>
        )
    }
}
export default TreeView;

