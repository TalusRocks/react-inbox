import React from 'react';
import Message from './Message'

const MessageList = ({ messages, toggleStar }) => {

    return (
      <div>
        { messages.map(el => <Message
          key={ el.id }
          starred={ el.starred }
          labels={ el.labels }
          message={ el }
          toggleStar={ toggleStar }
        />)}
      </div>
    )

}

export default MessageList;
