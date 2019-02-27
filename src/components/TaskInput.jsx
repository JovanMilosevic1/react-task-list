import React, { Component } from 'react'

export default class TaskInput extends Component {
  render() {
    let { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text bg-primary text-white">
                    <i className="fas fa-angle-double-right"></i>
                    </div>
                </div>
                <input 
                  type="text" 
                  className="form-control text-capitalize" 
                  placeholder="Add a task item"
                  value={item}
                  onChange={handleChange} 
                  maxLength="20"
                  />
            </div>
            {/* depends of the state , change background-button and text. Initial value of edit is false */}
            <button type="submit" 
              className= {
              editItem ? 'btn btn-block btn-success mt-2' : 'btn btn-block btn-primary mt-2'
              }> 
              {editItem ? 'Edit item' : 'Add item'}
            </button>
        </form>
      </div>
    )
  }
}
