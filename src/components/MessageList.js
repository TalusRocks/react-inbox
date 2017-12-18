import React from 'react';
import Message from './Message'

const MessageList = ({ messages, toggleStar, toggleSelected }) => {

    return (
      <div>
        { messages.map(el => <Message
          key={ el.id }
          starred={ el.starred }
          labels={ el.labels }
          message={ el }
          toggleStar={ toggleStar }
          toggleSelected={ toggleSelected}
        />)}
      </div>
    )

}

export default MessageList;
