import { useEffect } from 'react';
import lance from '../public/demo.json'

const SelectGroup = (props) => {
    // let result = []
    // const flatBody = (die) => {
    //     die.map(el => {
    //         if (el['content'].length === 0) {
    //             return
    //         } else {
    //             flatBody(el['content'])
    //         }
    //     })
    // }
    useEffect(() => {
        // flatBody(lance['content'])
    }, [])
    return (
        <select>
            <optgroup label="">
                <option>1</option>
            </optgroup>
            <optgroup label="">
                <option>2</option>
            </optgroup>
        </select>
    )
}

export default SelectGroup;