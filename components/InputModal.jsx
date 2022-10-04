import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const InputModal = ({ title, children,click }) => {
    const [element, setElement] = useState(null)
    useEffect(() => {
        typeof document !== undefined ? setElement(document.getElementById("modal")) : setEle(null)
    }, [])
    if (element !== null) {
        return createPortal(
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={click}
                                // data-bs-dismiss="modal"
                            >確認
                            </button>
                        </div>
                    </div>
                </div>
            </div>,
            element)
    }
}
export default InputModal;