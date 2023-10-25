import React from "react";
import './GraphProfitMargin.scss';
import  AreaChart from '../Components/AreaChart/AreaChart' 

const ProfitList = ({ title, value, iconClass, bgColor, icon, index }) => {
    const chartColors = ['#6259ca', '#28a745', '#fd7e14', '#dc3545'];
    return (
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
            <div className={`card overflow-hidden`}>
                <div className="card-body pb-0">
                    <div className="float-start">
                        <p className="mb-1 title-profit">{title}</p>
                        <h2 className="counter mb-0 text-start">{value}</h2>
                    </div>
                    <div className="float-end ">
                        <span className={`mini-stat-icon bg-${bgColor}`}>{icon}</span>
                    </div>
                </div>
                <div className="card-body pt-0 pb-0 border-top-0 overflow-hidden">
                    <div className="chart-wrapper overflow-hidden">
                        <AreaChart color={chartColors[index]} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfitList;
