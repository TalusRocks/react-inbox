import React, { Component } from 'react';

class Toolbar extends Component {
  constructor(props){
    super(props)
  }

  bulkSelectListen = () => {
    this.props.bulkSelect()
  }

  bulkSelectStyle = () => {
    if(this.props.messages.every(this.props.isSelected)){
      return 'fa-check-square-o'
    } else if(this.props.messages.some(this.props.isSelected)){
      return 'fa-minus-square-o'
    } else {
      return 'fa-square-o'
    }
  }

  markAsReadListen = () => {
    this.props.markAsRead()
  }

  render(){
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">2</span>
            unread messages
          </p>

          <button onClick={ this.bulkSelectListen } className="btn btn-default">
            <i className={`fa ${ this.bulkSelectStyle() }`}></i>
          </button>

          <button onClick={ this.markAsReadListen } className="btn btn-default">
            Mark As Read
          </button>

          <button className="btn btn-default">
            Mark As Unread
          </button>

          <select className="form-control label-select">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default Toolbar;
