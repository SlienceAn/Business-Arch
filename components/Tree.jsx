import { forwardRef } from "react";
import TreeView from "./TreeView";

const Tree = forwardRef(({ children },ref) => {
    return (
        <div ref={ref} className='TreePanel'>
            <ul>
                {children}
            </ul>
        </div>
    )
})

Tree.view = TreeView;
export default Tree;