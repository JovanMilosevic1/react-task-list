import React, { Component } from 'react'
import TaskItem from './TaskItem';
export default class TaskList extends Component {
  render() {
    const {items, onClearList, onDeleteItem, onEditItem} = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Task List</h3>
        {items.map(item => {
          return <TaskItem key={item.id} 
                           title={item.title} 
                          //  id={item.id} 
                          //  deleteItem={onDeleteItem}
                          onDeleteItem = {() => onDeleteItem(item.id)}
                          onEditItem = {() => onEditItem(item.id)}
                          />
        })}
        <button onClick={onClearList} type="button" className="btn btn-danger btn-block text-capitalize mt-5">Clear List</button>
      </ul>
    )
  }
}
