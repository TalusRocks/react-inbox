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

  markAsUnreadListen = () => {
    this.props.markAsUnread()
  }

  deleteListen = () => {
    this.props.deleteMessages()
  }

  unreadNum = () => {
    return this.props.unreadCount()
  }

  addLabelValue = (e) => {
    this.props.addLabels(e.target.value)
  }

  removeLabelValue = (e) => {
    this.props.removeLabels(e.target.value)
  }

  messageS = () => {
    if(this.unreadNum() === 1){
      return 'message'
    } else {
      return 'messages'
    }
  }

  render(){
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{ `${ this.unreadNum() }` } </span>
            unread { `${ this.messageS() }`}
          </p>

          <button onClick={ this.bulkSelectListen } className="btn btn-default">
            <i className={`fa ${ this.bulkSelectStyle() }`}></i>
          </button>

          <button onClick={ this.markAsReadListen } className="btn btn-default">
            Mark As Read
          </button>

          <button onClick={ this.markAsUnreadListen } className="btn btn-default">
            Mark As Unread
          </button>

          <select onChange={ this.addLabelValue } className="form-control label-select">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select onChange={ this.removeLabelValue } className="form-control label-select">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button onClick={ this.deleteListen } className="btn btn-default">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
    )
  }
}

export default Toolbar;
