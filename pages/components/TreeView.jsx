import React from 'react';

const TreeView = (props) => {
    const { data } = props
    if (data.content) {
        return (
            <li>
                {data.body}
                <ul>
                    {data.content.map(el => <TreeView data={el} key={el.body} />)}
                </ul>
            </li>
        )
    } else {
        return <ul></ul>
    }
}
export default TreeView;
