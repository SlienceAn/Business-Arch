import React from 'react';
import { useRouter } from 'next/router';
const TestRoute = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div className='p-2 w-100' style={{ outline: "solid" }}>
            TestRoute,{id}
            <button className="btn btn-info text-white" onClick={() => router.back()}>返回</button>
        </div>
    );
}
export default TestRoute;
