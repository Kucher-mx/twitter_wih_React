import React from 'react';

import './post-list-item.css'; 

export default class PostItem extends React.Component {


    render() {
        const {label, onDelete, important, like, onLike, onImportant} = this.props;

        let classNames = 'app-list-item d-flex justify-content-between';

        if(important) {
            classNames += ' important';
        }

        if(like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span className="app-list-item-label"
                onClick={onLike}>{label}</span>

                <div className="d-flex justify-content-center align-items-center">

                    <button 
                    onClick={onImportant}
                    className="btn-star btn-sm">
                        <i className="fa fa-star"></i>
                    </button>

                    <button className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>

                    <i className="fa fa-heart"></i>
                </div>
            </div>
        ) 
    }
}