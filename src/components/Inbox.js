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

  toggleSelected = (id) => {
    let selectedMessages = this.state.messages.map(el => {
      if(el.id === id){
        el.selected ? el.selected = false : el.selected = true
      }
      return el
    })
    this.setState( { messages: selectedMessages })
  }

  isSelected = (msg) => {
    return msg.selected ? true : false
  }

  bulkSelect = () => {

    //if every selected, deselect all
     if(this.state.messages.every(this.isSelected)){
      let bulkSelectedMessages =  this.state.messages.map(el => {
          el.selected = false
          return el
        })
      this.setState({ messages: bulkSelectedMessages})
    } else {
      //if some or none are selected, select all
      let bulkDeselectedMessages = this.state.messages.map(el => {
        el.selected = true
        return el
      })
      this.setState({ messages: bulkDeselectedMessages})
    }

  }

  render(){
    return (
      <div className="container">
        <Toolbar messages={ this.state.messages } bulkSelect={ this.bulkSelect }/>
        <MessageList messages={ this.state.messages } toggleStar={ this.toggleStar } toggleSelected={ this.toggleSelected }/>
      </div>
    )
  }

}

export default Inbox;
