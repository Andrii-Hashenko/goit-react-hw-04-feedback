import React from 'react';
import './Statistics.css';
const Statistics = ({ options, total, positivePercentage }) => {
  
  return (
    <div className="Statistics__feedback">
      {Object.keys(options).map(key => (
        <p key={key}>
          {key} : {options[key]}
        </p>
      ))}
      <div className="Statistics__total">
        <p>
          Total : <span className="Statistics__value"> {total} </span>
        </p>
        <p>
          PositiveFeedback :
          <span className="Statistics__value"> {positivePercentage} % </span>
        </p>
      </div>
    </div>
  );
};
export default Statistics;
