import React from "react";
import './Staff.scss'
import CircularProgressBarWithIcon from "../../../../../Components/CircularProgressWithIcon/ProgressWithIcon";

const StaffList = ({ title, value, icon, iconBg, progressColor, iconColor, progressvalue }) => {
   return (
       <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
           <div className="card">
               <div className="card-body">
                   <div className="widget text-center">
                       <small className="text-muted">{title}</small>
                       <h2 className="mb-2 mt-0">{value}</h2>
                       <div className={`chart-circle-value-3 text-success fs-20 ${progressColor}` } style={{ color: progressColor }}>
                           <CircularProgressBarWithIcon icon={icon} iconColor={iconColor} progressColor={progressColor} progressvalue={progressvalue} />
                       </div>
                       <p className="mb-0"><span className={`dot-label ${iconBg} me-2`}></span>{`Num of ${title}`}</p>
                   </div>
               </div>
           </div>
       </div>
   );
};

export default StaffList;