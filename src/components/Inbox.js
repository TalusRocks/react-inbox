import React, { Component } from 'react';
import Toolbar from './Toolbar'
import MessageList from './MessageList'

class Inbox extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div class="container">
        <Toolbar />
        <MessageList />
      </div>
    )
  }
}

export default Inbox;
