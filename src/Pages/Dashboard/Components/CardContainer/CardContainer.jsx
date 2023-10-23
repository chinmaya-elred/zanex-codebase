import React from 'react';
import './CardContainer.scss';
import Maincard from './MainCard/MainCard';

const CardContainer = () => {
    return (
        <div className="row">
        <Maincard title="Total Sales" value="34,516" percentage="3%" iconClass="fa-chevron-circle-up" iconColor="bg-primary-gradient" />
        <Maincard title="Total Profit" value="34,516" percentage="0.5%" iconClass="fa-chevron-circle-up" iconColor="bg-secondary-gradient" />
        <Maincard title="Total Leads" value="56,992" percentage="3%" iconClass="fa-chevron-circle-up" iconColor="bg-danger-gradient" />
        <Maincard title="Total Cost" value="56,992" percentage="0.2%" iconClass="fa-chevron-circle-up" iconColor="bg-success-gradient" />
   </div>
    )
}

export default CardContainer;
