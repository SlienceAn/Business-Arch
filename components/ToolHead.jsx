import React from 'react';

const ToolHead = () => {
    return (
        <div className='w-100 py-2 px-4 d-flex justify-content-between'>
            <div className='d-flex gap-2'>
                <button className='btn btn-success'>
                    <i className="bi bi-pencil" />
                    <span>添加</span>
                </button>
                <button className='btn btn-danger'>
                    <i className="bi bi-x-square-fill" />
                    <span>刪除</span>
                </button>
            </div>
            <input placeholder='input your fucking answer' />
        </div>
    );
};

export default ToolHead;