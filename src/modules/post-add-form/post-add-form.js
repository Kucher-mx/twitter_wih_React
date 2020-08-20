import React from 'react';

import './post-add-form.css'; 

const AddForm = () => {
    return (
        <form className="bottom-panel d-flex">

            <input 
            className="form-control new-post-label"
            type="text"
            placeholder="Что у вас сейчас на уме?"/>

            <button type="submit" 
            className="btn btn-outline-secondary">
            Добавить</button>
            
        </form>
    )
}

export default AddForm;