import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import http from '../../../services/http.service';

const SearchByCategory = memo(() => {
    const location = useLocation();
    const uri = location.pathname + location.search;
    console.log(uri);
    console.log(location)
    http.get(uri).then((res) => console.log(res));
    return (
        <div>
            {location.state} <br />
            hello
        </div>
    );
});

export default SearchByCategory;