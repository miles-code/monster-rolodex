import React from 'react';

import './search-box-styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className= 'search'
        // this is will apply the search.css styles//
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}
    />
);