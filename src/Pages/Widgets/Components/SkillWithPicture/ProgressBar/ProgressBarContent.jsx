import React from 'react';

const ProgressBar = ({ skill, percentage, color }) => (
  <div className="chat-details progressContent p-3">
    <h4 className="mb-0">
      <span className="h5 fw-normal">{skill}</span>
      <span className="float-end p-1 btn btn-sm text-default">
        <b>{percentage}%</b>
      </span>
    </h4>
    <div className={`progress progress-sm mt-3`}>
      <div className={`progress-bar ${color} w-${percentage}`}></div>
    </div>
  </div>
);
export default ProgressBar