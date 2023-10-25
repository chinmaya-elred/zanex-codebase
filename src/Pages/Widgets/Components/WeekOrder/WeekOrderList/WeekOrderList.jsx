import React from 'react';
import './WeekOrder.scss'
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = ({ bgColor, shadowColor, value, text, label, progressColor }) => {
    return (
        <div className={`col-sm-12 col-md-12 col-lg-6 col-xl-3`}>
            <div className={`card widgets-cards ${bgColor} ${shadowColor}`}>
                <div className="card-body d-flex text-center align-items-center">
                    <div className="chart-circle chart-circle-sm me-4 mt-1">
                        <CircularProgressbar value={value} text={text} strokeWidth={5} className="circularProgress" styles={buildStyles({pathColor: progressColor,  textColor: "#ffffff",})}/>
                    </div>
                    <div className="wrp text-wrapper text-white">
                        <p className="mt-0 lable-week">{label.value}</p>
                        <p className="mt-1 mp-0">{label.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
