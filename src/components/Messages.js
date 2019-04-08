import React from 'react';
import PropTypes from 'prop-types';

const Messages = ({ user, messages }) => {
  return messages.map((message, i)=> {
    if (user.id === message.senderId) {
      return (
        <div key={i} class="d-flex justify-content-start mb-4">
          <div style={{ border: "1.5px solid silver", backgroundColor: "#3e006b", borderRadius: "30%"}} class="img_cont_msg">
            <div className="mt-1 text-light">{message.sender[0].toUpperCase()}</div>
          </div>
          <div class="msg_cotainer">
            {message.message}
            <span class="msg_time">{message.timeStamp}</span>
          </div>
        </div>
      )
    } else {
      return (
        <div key={i} class="d-flex justify-content-end mb-4">
          <div class="msg_cotainer_send">
            {message.message}
            <span class="msg_time_send">{message.timeStamp}</span>
          </div>
          <div style={{ border: "1.5px solid silver", backgroundColor: "#3e006b", borderRadius: "30%"}} class="img_cont_msg">
            <div className="mt-1 text-light">{message.sender[0].toUpperCase()}</div>
          </div>
        </div>
      )
    }
  })
}

Messages.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
}

Messages.defaultProps = {
  messages: []
}

export default Messages;
