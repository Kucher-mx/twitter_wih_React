import React from 'react';

import './app-header.css'; 

const AppHeader = (props) => {
    const {all, liked} = props;
    return (
        <div className="app-header">
            <h1>Kucher Maxym</h1>
            <h2>{all} записи, из них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;