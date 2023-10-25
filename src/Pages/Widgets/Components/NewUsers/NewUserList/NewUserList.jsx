import React from "react";
import './NewUser.scss';

const  NewUserList = ({ title, iconClass, number, label, color }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
            <div className={`card`}>
                <div className="card-body">
                    <div className="card-order">
                        <h6 className="mb-2 text-start">{title}</h6>
                        <h2 className="text-end">
                            <i className={`fa-solid ${iconClass} icon-size float-start ${color} ${color}-shadow`}></i>
                            <span>{number}</span>
                        </h2>
                        <p className="mb-0-users">{label}<span className="float-end">50%</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewUserList;
