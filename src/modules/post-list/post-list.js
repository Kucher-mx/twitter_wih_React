import React from 'react';

import './post-list.css'; 

import PostItem from '../post-list-item/post-list-item';



const Post = ({posts, onDelete, onImportant, onLike}) => {

    const elems = posts.map( (item) => {

        if(isObj(item)){
            const {id, ...itemRest} = item

            return (
                <li key={id} className="app-list-item">
                    <PostItem {...itemRest} 
                    onDelete={() => onDelete(id)}
                    onImportant={() => onImportant(id)}
                    onLike={() => onLike(id)}/>
                </li>
            )
        }
    });

    function isObj(obj) {
        if(!(Object.keys(obj).length === 0)) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <ul className="app-list list-group">
            {elems}
        </ul>
    )
}

export default Post;