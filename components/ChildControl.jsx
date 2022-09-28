import React from 'react';
import { BsPlusCircleFill, BsDashCircleFill } from 'react-icons/bs'

export const AddChild = ({ setChildVal, childVal }) => {
    return (
        <label
            className='form-label d-flex align-content-end gap-2'
            htmlFor='childItem'
            onClick={() => setChildVal([...childVal, {
                body: "",
                content: []
            }])}
        >
            <span>
                <strong>添加子項</strong>
            </span>
            <BsPlusCircleFill fontSize="1.5rem" />
        </label>
    )
}

export const DeleteChild = ({ setChildVal, childVal }) => {
    return (
        <label
            className='form-label d-flex align-content-end gap-2'
            htmlFor='childItem'
            onClick={() => {
                const arr = [...childVal]
                arr.pop()
                setChildVal(arr)
            }}
        >
            <span>
                <strong>刪除子項</strong>
            </span>
            <BsDashCircleFill fontSize="1.5rem" />
        </label>
    )
}