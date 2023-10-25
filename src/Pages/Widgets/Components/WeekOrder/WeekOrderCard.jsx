import React from "react";
import WeekOrderList from './WeekOrderList/WeekOrderList';

const cardsData = [
    { bgColor: 'bg-primary', shadowColor: 'box-primary-shadow', value: 70, text: '70%', label: { value: '$8758', text: 'This Week Orders' }, progressColor: '#30304d' },
    { bgColor: 'bg-success', shadowColor: 'box-success-shadow', value: 17, text: '17%', label: { value: '6477', text: 'This Week Views' }, progressColor: '#003546' },
    { bgColor: 'bg-warning', shadowColor: 'box-warning-shadow', value: 42, text: '42%', label: { value: '7847', text: 'This Week Earnings' } , progressColor: '#B58B00 ' },
    { bgColor: 'bg-danger', shadowColor: 'box-danger-shadow', value: 37, text: '37%', label: { value: '345', text: 'This Week Comments' }, progressColor: '#8b0000 '  },
];

const WeekOrder = () => {
    return (
        <div className="row">
            {cardsData.map((data, index) => (
                <WeekOrderList key={index} {...data} />
            ))}
        </div>
    );
};

export default WeekOrder;
