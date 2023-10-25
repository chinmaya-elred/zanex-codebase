import React from 'react';
import './CardContainer.scss';
import Maincard from './MainCard/MainCard';

const CardContainer = () => {
    return (
        <div className="row">
        <Maincard title="Total Sales" value="34,516" percentage="3%" iconClass="fa-chevron-circle-up" iconColor="bg-primary-gradient" icon="fa-solid fa-arrow-trend-up" />
        <Maincard title="Total Profit" value="34,516" percentage="0.5%" iconClass="fa-chevron-circle-up" iconColor="bg-secondary-gradient" icon="fa-solid fa-rocket" />
        <Maincard title="Total Leads" value="56,992" percentage="3%" iconClass="fa-chevron-circle-up" iconColor="bg-danger-gradient" icon="fa-solid fa-dollar-sign" />
        <Maincard title="Total Cost" value="56,992" percentage="0.2%" iconClass="fa-chevron-circle-up" iconColor="bg-success-gradient" icon="fa-solid fa-briefcase" />
   </div>
    )
}

export default CardContainer;
