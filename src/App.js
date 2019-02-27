import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
class App extends Component {
  state = {
    items: [],
    item: '',
    id: uuid(),
    edit: false,
  }
  handleChange = (e) => {
    
    this.setState({
      item: e.target.value
    });
  }
  // add item 
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    console.log(newItem);
    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    })

  }
  // Clear list
  handleClearList = () => {
    this.setState({
      items: []
    })
  }

  // delete item
  handleDeleteItem = (id) => {
    // console.log(id);
    const newItems = this.state.items.filter(item => {
      return item.id !== id;
    });
    this.setState({
      items: newItems
    })
  }
  // edit item
  handleEditItem = (id) => {
    const newItems = this.state.items.filter(item => {
      return item.id !== id;
    });

    const selectedItem = this.state.items.find(item => {
      return item.id === id
    });

    console.log(selectedItem);

    this.setState({
      items: newItems,
      item: selectedItem.title,
      edit: true,
      id: id
    })
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Task Input</h3>
          <TaskInput 
            item={this.state.item} 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editItem={this.state.edit}
            />
           <TaskList 
           items={this.state.items} 
           onClearList={this.handleClearList} 
           onDeleteItem={this.handleDeleteItem}
           onEditItem={this.handleEditItem}

           />
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
