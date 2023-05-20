import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <button
      key={option}
      type="button"
      onClick={() => onLeaveFeedback(option)}
      className="Feedback__button"
    >
      {option}
    </button>
  ));
}

FeedbackOptions.prorpTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
