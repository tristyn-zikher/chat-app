import React from 'react';
import TextField from '../components/TextField';
import PropTypes from 'prop-types';

const MessageContainer = ({ onChange, children, onSubmit }) => {
  return (
    <div class="card container">
      <div class="card-body msg_card_body">
        {
          children &&
          children
        }
      </div>
      <TextField onChange={onChange} onSubmit={onSubmit} />
    </div>
  )
}

MessageContainer.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default MessageContainer;
