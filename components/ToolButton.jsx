import React from 'react';

const ToolButton = ({ btnStyle, icon, text }) => {
    return (
        <button className='d-flex gap-2 btn btn-bg text-white'>
            <i className={`bi bi-${icon}`} />
            <span>{text}</span>
        </button>
    );
};

export default ToolButton;