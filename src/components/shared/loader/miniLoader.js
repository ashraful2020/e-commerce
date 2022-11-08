import React, { memo } from 'react';
import "./miniLoader.css"
const MiniLoader = memo(() => {
    return (
        <div className='flex items-center justify-center h-12'>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
});

export default MiniLoader;
