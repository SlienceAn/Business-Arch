import React, { useState } from 'react';
import InputModal from './InputModal';

const ToolHead = ({ parentTitle }) => {
    return (
        <>
            <div className='w-100 py-2 px-4 d-flex justify-content-between'>
                <div className='d-flex gap-2'>
                    <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-pencil" />
                        <span>添加</span>
                    </button>
                    <button className='btn btn-danger'>
                        <i className="bi bi-x-square-fill" />
                        <span>刪除</span>
                    </button>
                </div>
                <input placeholder='search' />
            </div>
            <InputModal>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='parentItem'>選擇父項</label>
                    <select id='parentItem' className='form-control'>
                        {parentTitle.map(el => <option key={el}>{el}</option>)}
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='childItem'>添加子項</label>
                    <input id='childItem' className='form-control' />
                </div>
            </InputModal>
        </>
    );
};
export default ToolHead;