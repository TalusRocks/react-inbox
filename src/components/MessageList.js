import React from 'react';
import Message from './Message'

const MessageList = ({ messages, toggleMessage }) => {

    return (
      <div>
        { messages.map(el => <Message
          key={ el.id }
          starred={ el.starred }
          labels={ el.labels }
          message={ el }
          toggleMessage={ toggleMessage }
        />)}
      </div>
    )

}

export default MessageList;
