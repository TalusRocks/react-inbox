import React, { Component } from 'react';

class Message extends Component {
  constructor(props){
    super(props)
  }

  readUnread = () => {
    return this.props.message.read ? 'read' : 'unread'
  }

  renderLabels = () => {
    return this.props.message.labels.map((label, i) => {
      return <span key={ i } className="label label-warning">{ label }</span>
    })
  }

  starListen = () => {
    this.props.toggleStar(this.props.message.id);
  }

  starStyle = () => {
    return this.props.message.starred ? 'fa-star' : 'fa-star-o'
  }

  selectListen = () => {
    this.props.toggleSelected(this.props.message.id)
  }

  selectedStyle = () => {
    return this.props.message.selected ? 'selected' : ''
  }

  checkedStyle = () => {
    return this.props.message.selected ? 'checked' : ''
  }


  render(){
    return (
      <div className={`row message ${ this.readUnread() } ${ this.selectedStyle() }`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input onClick={ this.selectListen } type="checkbox" checked={`${ this.checkedStyle() }`}/>
            </div>
            <div className="col-xs-2">
              <i onClick={ this.starListen } className={`star fa ${ this.starStyle() }`}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          { this.renderLabels() }
          <a href="#">
            { this.props.message.subject }
          </a>
        </div>
      </div>
    )
  }


}

export default Message;
