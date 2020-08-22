import React from 'react';

import './search-panel.css';  

export default class SearchPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        this.onInput = this.onInput.bind(this);
    }

    onInput(e) {
        const {setTerm} = this.props,
        term = e.target.value;
        this.setState({term});
        setTerm(term);
    }

    render() {
        return (
            <input
                placeholder="поиск по записям"
                type="text"
                className="form-control search-input"
                //value={this.state.text}
                onChange={(e) => {
                    this.onInput(e)
                }}/>
        )
    }
    
}
