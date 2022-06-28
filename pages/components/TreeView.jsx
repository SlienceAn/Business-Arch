import React from 'react';

const TreeView = (props) => {
    const { data } = props
    if (data.content) {
        return (
            <li>
                {data.body}
                <ul>
                    {data.content.map(el =>
                        <li key={el.body}>
                            <TreeView data={el} />
                        </li>
                    )}
                </ul>
            </li>
        )
    }
}
export default TreeView;
