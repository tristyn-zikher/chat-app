import React from 'react';
import PropTypes from 'prop-types';

const UsernameModal = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} class="card-header username-input">
      <div class="input-group">
        <input value={value} onChange={onChange} placeholder="Enter a Username" class="form-control search" />
        <div class="input-group-prepend">
          <button type="submit" className="btn btn-secondary">Enter Room</button>
        </div>
      </div>
    </form>
  )
}

UsernameModal.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default UsernameModal;
