import React from "react";

const MainCard = ({ title, value, percentage, iconClass, iconColor }) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-xl-3">
      <div className="card overflow-hidden">
        <div className="card-body">
          <div className="row">
            <div className="col" style={{ textAlign: 'left' }}>
              <h6 className="">{title}</h6>
              <h3 className="mb-2 number-font">{value}</h3>
              <p className="text-muted mb-0">
                <span className="text-primary">
                  <i className={`fa ${iconClass} me-1`}></i> {percentage}
                </span> last month
              </p>
            </div>
            <div className="col col-auto">
              <div className={`counter-icon box-shadow-primary brround ms-auto ${iconColor}`}>
                <i className={iconClass + " text-white mb-5"}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
