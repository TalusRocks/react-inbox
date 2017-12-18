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

  starStyle = () => {
    return this.props.message.starred ? 'fa-star' : 'fa-star-o'
  }

  starListen = () => {
    this.props.toggleStar(this.props.message.id);
  }


  render(){
    return (
      <div className={`row message ${ this.readUnread() }`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" />
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
