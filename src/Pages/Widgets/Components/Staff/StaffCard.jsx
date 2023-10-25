import React from "react";
import StaffList from './StaffList/Staff';

const Staff = () => {
    const cardsData = [
        { title: 'Staff', value: 450, icon: <i className="fa-solid fa-user-group"></i>, iconBg: 'bg-secondary', progressColor: '#FF5733', iconColor: '#FF5733', progressvalue: 80 },
        { title: 'Devices', value: 485, icon: <i className="fa-solid fa-laptop"></i>, iconBg: 'bg-success', progressColor: '#09ad95', iconColor: '#09ad95',  progressvalue: 60  },
        { title: 'Licenses', value: 256, icon: <i className="fa-solid fa-book"></i>, iconBg: 'bg-warning', progressColor: '#f7b731', iconColor: '#f7b731',  progressvalue: 70  },
        { title: 'Running Cost', value: '$32.759', icon: <i className="fa-solid fa-chart-simple"></i>, iconBg: 'bg-danger', progressColor: '#f82649', iconColor: '#f82649',  progressvalue: 50  },
    ];

    return (
        <div className="row">
            {cardsData.map((data, index) => (
                <StaffList key={index} {...data} />
            ))}
        </div>
    );
};

export default Staff;
