import React, { Component } from 'react'

export default class TaskItem extends Component {
  render() {
    //  const { id, deleteItem } = this.props;
    const { title, onDeleteItem, onEditItem } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="task-icon">
          <span className="mx-2 text-success" onClick={onEditItem}>
            <i className="fas fa-pen item-icon"></i>
          </span>
          <span className="mx-2 text-danger" onClick={onDeleteItem}>
            <i className="fas fa-trash item-icon"></i>
          </span>

        </div>
      </li>
    )
  }
}
