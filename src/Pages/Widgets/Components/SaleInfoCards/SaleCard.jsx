import React from "react";
import './SaleCard.scss'
import "react-circular-progressbar/dist/styles.css";
import SalesSummary from "./SaleSummery/SaleSummery";
import SaleVisitor from './SaleVisitors/SaleVisitorCard';
import SaleProject from './SaleProject/SaleProject'

const Salecards = () => {
    return (<div className="row"> <SalesSummary /> <SaleVisitor /> <SaleProject /> </div>);
}
export default Salecards;