import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';

const SearchByCategory = memo(() => {
    const location = useLocation();
    console.log(location)
    console.log(location.state)
    return (
        <div>
            {location.state} <br/>
            hello
        </div>
    );
});

export default SearchByCategory;