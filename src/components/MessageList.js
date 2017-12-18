import React from 'react';
import Message from './Message'

const MessageList = ({ messages }) => {

    return (
      <div>
        { messages.map(el => <Message key={ el.id } message={ el }/>)}
      </div>
    )

}

export default MessageList;
