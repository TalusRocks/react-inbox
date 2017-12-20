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

  markAsRead = () => {
    //loop through messages, if selected=true, change read=true
    //then re-write state
    let readMessages =
    this.state.messages.map(el => {
      if(el.selected){
        el.read = true
      }
      return el
    })
    this.setState({ messages: readMessages })
  }

  markAsUnread = () => {
    let unreadMessages =
    this.state.messages.map(el => {
      if(el.selected){
        el.read = false
      }
      return el
    })
    this.setState({ messages: unreadMessages })
  }

  deleteMessages = () => {
    let keptMessages = []
    this.state.messages.map(el => {
      if(!el.selected){
        keptMessages.push(el)
      }
    })
    this.setState( { messages: keptMessages })
  }

  unreadCount = () => {
    let count = 0
    this.state.messages.map(el => {
      if(el.read === false){
        count += 1
      }
    })
    return count
  }

  addLabels = (label) => {
    let labeledMessages =
    this.state.messages.map(el => {
      if(el.selected){
        if(!el.labels.includes(label)){
          el.labels.push(label)
        }
      }
      return el
    })
    this.setState( { messages: labeledMessages })
  }

  removeLabels = (label) => {

    let unlabeledMessages =
    this.state.messages.map(el => {
      if(el.selected){
        if(el.labels.includes(label)){
          let index = el.labels.indexOf(label)
          el.labels.splice(index, 1)
        }
      }
      return el
    })
    this.setState( { messages: unlabeledMessages })
  }


  render(){
    return (
      <div className="container">
        <Toolbar
          messages={ this.state.messages }
          bulkSelect={ this.bulkSelect }
          isSelected={ this.isSelected }
          markAsRead={ this.markAsRead }
          markAsUnread={ this.markAsUnread }
          deleteMessages={ this.deleteMessages }
          unreadCount={ this.unreadCount }
          addLabels={ this.addLabels }
          removeLabels={ this.removeLabels }
        />
        <MessageList
          messages={ this.state.messages }
          toggleStar={ this.toggleStar }
          toggleSelected={ this.toggleSelected }
        />
      </div>
    )
  }

}

export default Inbox;
