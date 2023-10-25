import React from 'react';
import './Follower.scss'
import CircleImage from '../../../../../assets/svg/circle.svg';

const FollowerList = ({ iconClass, count, label, bgColor }) => {
  return (
    <div className={`col-sm-12 col-lg-6 col-md-12 col-xl-3`}>
      <div className="card">
        <div className="row">
          <div className="col-4">
            <div className={`circle-icon ${bgColor} align-items-center text-center box-${bgColor}-shadow`}>
              <img src={CircleImage} alt="circle" className="card-img-absolute" />
              <i className={`fa-regular ${iconClass} text-white mt-3 fa-2x`}></i>
            </div>
          </div>
          <div className="col-8">
            <div className="card-body p-4 text-start">
              <h2 className="mb-2 fw-normal-follower mt-2">{count}</h2>
              <h5 className="fw-normal-follwer-lable mb-0">{label}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowerList;
