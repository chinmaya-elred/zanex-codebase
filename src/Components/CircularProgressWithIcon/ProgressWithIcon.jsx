import React from 'react';
import './ProgressWithIcon.scss';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBarWithIcon = ({ progressvalue, icon, iconColor, progressColor }) => {
    console.log(progressvalue)
    const iconStyle = {
        color: iconColor,   
    };

    return (
        <CircularProgressbarWithChildren value={progressvalue} className='CircularProgressbar' styles={buildStyles({pathColor: progressColor})}> 
            <div style={iconStyle}>{icon}</div>
        </CircularProgressbarWithChildren>
    );
};

export default CircularProgressBarWithIcon;
