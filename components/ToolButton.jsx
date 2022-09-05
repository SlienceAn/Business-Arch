import React from 'react';

const ToolButton = ({icon, text, onClick }) => {
    return (
        <button className='d-flex gap-2 btn btn-bg text-white' onClick={onClick}>
            <i className={`bi bi-${icon}`} />
            <span>{text}</span>
        </button>
    );
};

export default ToolButton;