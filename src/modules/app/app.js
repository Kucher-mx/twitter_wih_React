import React from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostFilter from '../post-status-filter/post-status-filter';
import Post from '../post-list/post-list';
import AddForm from '../post-add-form/post-add-form';

import './app.css'; 

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Stared learning React', important: false, like: false, id: 1},
                {label: "It's not so easy", important: false, like: false, id: 2},
                {label: 'Need some rest', important: false, like: false, id: 3},
                {label: 'Want to do a cool story to INST', important: false, like: false, id: 4}
            ],
            term: '',
            filter: 'all',
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
        this.setTerm = this.setTerm.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.onInteractiveItem = this.onInteractiveItem.bind(this);

        this.maxIndex = 5;
    } 

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex( elem => elem.id === id);

            const newArr = [...data.splice(0, index), ...data.splice(index + 1)];

            return {
                data : newArr
            }
        });
    }

    addItem(body) {
        this.setState(({data}) => {

            const newItem = {
                label : body,
                id : this.maxIndex++
            }

            const newArr = [...data, newItem];

            return {
                data : newArr
            }
        });
    }

    onImportant(id) {
        this.onInteractiveItem('important', id);
    }

    onInteractiveItem(item,id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];

            if(item === 'like'){
                const newItem = {...old, like: !old.like}; 
                const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
                console.log(newArr)
            return {
                data: newArr
            }
            } else {
                const newItem = {...old, important: !old.important};
                const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
                console.log(newArr)
            return {
                data: newArr
            }
            }

        });
    }  

    onLike(id) {
        this.onInteractiveItem('like', id);
    }

    filterInput(items, term) {
        if(term.length === 0){
            return items
        }

        return items.filter( (item) => {
            return item.label.indexOf(term) > -1;
        });
    }

    filterButton(items, filter) {
        if(filter === 'like') {
            return items.filter(item => item.like)
        }

        return items;
    }

    setTerm(term) {
        this.setState({term});
    }

    setFilter(filter) {
        this.setState({filter});
    }

    render() {
        const {data, filter, term} = this.state;
        const all = data.length;
        const liked = data.filter(item => item.like).length;
        const visibleArr = this.filterButton(this.filterInput(data, term), filter);


        return (
            <div className="app">
                <AppHeader
                all={all}
                liked={liked}/>
                <div className="search-panel d-flex">
                    <SearchPanel setTerm={this.setTerm}/>
                    <PostFilter filter={filter}
                    onFilter={this.setFilter}/> 
                </div>
                <Post posts={visibleArr} 
                onDelete={this.deleteItem}
                onImportant={this.onImportant}
                onLike={this.onLike}/> 
                <AddForm
                addItem={this.addItem}/> 
            </div>
        )
    }
}
