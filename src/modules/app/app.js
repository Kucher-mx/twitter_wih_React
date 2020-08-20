import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostFilter from '../post-status-filter/post-status-filter';
import Post from '../post-list/post-list';
import AddForm from '../post-add-form/post-add-form';

import './app.css'; 

const App = () => {

    const data = [
        {label: 'Stared learning React', id: 'dfg'},
        {label: "It's not so easy", id: 'dffg'},
        {label: 'Need some rest', id: 'dfgdg'},
        {label: 'Want to do a cool story to INST', id: 'dfgdgg'}
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostFilter/> 
            </div>
            <Post posts={data} /> 
            <AddForm/> 
        </div>
    )
}

export default App;