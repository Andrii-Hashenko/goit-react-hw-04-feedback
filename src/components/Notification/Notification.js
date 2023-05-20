import React from 'react';
import PropTypes from 'prop-types';
import './Notification.css';
const Notification = ({ message }) => (
  <h3 className="Notification__message"> {message} </h3>
);

Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
