import React, { Component } from 'react';
import MessageData from './seeds.json'
import Toolbar from './Toolbar'
import MessageList from './MessageList'

class Inbox extends Component {
  constructor(props){
    super(props)
    this.state = { messages: MessageData }
  }

  toggleStar = (id) => {
    let toggled = this.state.messages.map(el => {
      //find THIS one
      if(el.id === id){
        //change to opposite
        el.starred ? el.starred = false : el.starred = true
      }
      //return each message
      return el
    })
    //update whole state, including the change
    this.setState( { messages: toggled })
  }

  render(){
    return (
      <div className="container">
        <Toolbar />
        <MessageList messages={ this.state.messages } toggleStar={ this.toggleStar }/>
      </div>
    )
  }

}

export default Inbox;
