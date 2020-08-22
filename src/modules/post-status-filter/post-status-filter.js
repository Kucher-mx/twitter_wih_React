import React from 'react';

import './post-status-filter.css'; 

export default class PostFilter extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ];   
    }

    render() {
        const elems = this.buttons.map( ({name,label}) => {
            const {filter, onFilter} = this.props;
            const active = filter === name;
            const clazz = active ? "btn-info" : "btn-outline-secondary"
            return (
            <button key={name} 
            type="button" 
            className={`btn ${clazz}`}
            onClick={() => {
                onFilter(name);
            }}>
            {label}</button>
            )
        })
        return (
            <div className="btn-group">
                {elems}
            </div>
        )
    }
}
