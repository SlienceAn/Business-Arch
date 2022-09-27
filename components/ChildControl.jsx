import React from 'react';
import { BsPlusCircleFill, BsDashCircleFill } from 'react-icons/bs'

export const AddChild = ({ onClick }) => {
    return (
        <label
            className='form-label d-flex align-content-end gap-2'
            htmlFor='childItem'
            onClick={onClick}
        >
            <span>
                <strong>添加子項</strong>
            </span>
            <BsPlusCircleFill fontSize="1.5rem" />
        </label>
    )
}

export const DeleteChild = ({ onClick }) => {
    return (
        <label
            className='form-label d-flex align-content-end gap-2'
            htmlFor='childItem'
            onClick={onClick}
        >
            <span>
                <strong>刪除子項</strong>
            </span>
            <BsDashCircleFill fontSize="1.5rem" />
        </label>
    )
}