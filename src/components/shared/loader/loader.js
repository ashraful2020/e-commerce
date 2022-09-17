import React from 'react';
import './loader.css'
const Loader = () => {
    return (
        <div className='body'>
            <div className="loader-center">
                <div className="loader-ring"></div>
                <span className='span'>loading...</span>
            </div>
        </div>
    );
};

export default Loader;