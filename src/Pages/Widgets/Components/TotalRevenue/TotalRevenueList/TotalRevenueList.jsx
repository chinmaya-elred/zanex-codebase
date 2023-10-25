// TotalRevenueList.jsx

import React from 'react';
import './TotalRevenue.scss';

const TotalRevenueList = ({ title, value, progressColor, increaseValue, iconClass, chartIcon }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
      <div className="card">
        <div className="card-header pb-0 border-bottom-0">
          <h3 className="card-title">{title}</h3>
          <div className="card-options">
            <a className={`btn btn-sm btn-${progressColor}`} href="javascript:void(0);">
              <i className={`fa ${chartIcon} mb-0 text-white`}></i>
            </a>
          </div>
        </div>
        <div className="card-body pt-0">
          <h3 className="revenueText mb-2 text-start">{value}</h3>
          <div className={`progress h-2 mt-2 mb-2`}>
            <div className={`progress-bar bg-${progressColor} w-50`} role="progressbar"></div>
          </div>
          <div className="float-start">
            <div className="mt-2">
              <i className={`fa ${iconClass} ${increaseValue.includes('increase') ? 'text-success' : 'text-danger'}`}></i>
              <span>{increaseValue}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalRevenueList;
