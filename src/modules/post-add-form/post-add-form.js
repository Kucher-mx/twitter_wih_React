import React from 'react';

import './post-add-form.css'; 

export default class AddForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
        }

        this.onInput = this.onInput.bind(this);
        this.submit = this.submit.bind(this);
    }

    onInput(e) {
        console.log(e.target.value)
        this.setState({
            text : e.target.value
        })
    }

    submit(e) {
        e.preventDefault();
        this.props.addItem(this.state.text);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <form className="bottom-panel d-flex"
            onSubmit={this.submit}>
    
                <input 
                className="form-control new-post-label"
                type="text"
                placeholder="Что у вас сейчас на уме?"
                onChange={this.onInput}
                value={this.state.text}/>
    
                <button type="submit" 
                className="btn btn-outline-secondary">
                Добавить</button>
                
            </form>
        )
    }
}
