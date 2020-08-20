import React from 'react';

import './search-panel.css';  

const SearchPanel = () => {
    return (
        <input
            placeholder="поиск по записям"
            type="text"
            className="form-control search-input"/>
    )
}

export default SearchPanel;