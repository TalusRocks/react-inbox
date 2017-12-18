import React, { Component } from 'react';
import MessageData from './seeds.json'
import Toolbar from './Toolbar'
import MessageList from './MessageList'

class Inbox extends Component {
  constructor(props){
    super(props)
    this.state = { messages: MessageData }
  }
  render(){
    return (
      <div className="container">
        <Toolbar />
        <MessageList messages={ this.state.messages }/>
      </div>
    )
  }
}

export default Inbox;
