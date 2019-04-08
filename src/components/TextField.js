import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit} class="input-group pb-3">
      <input onChange={onChange} name="" class="form-control type_msg" placeholder="Type your message..." />
    </form>
  )
}

TextField.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default TextField;
