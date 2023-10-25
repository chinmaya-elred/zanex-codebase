import React from "react";
import RevenueList from './TotalRevenueList/TotalRevenueList';

const TotalRevenueCard = () => {
    const cardsData = [
        { title: "Total Revenue", value: "46,789", progressColor: "primary", increaseValue: "12% increase", iconClass: "fa-caret-up", chartIcon: "fa-bar-chart" },
        { title: "Total Requests", value: "23,536", progressColor: "success", increaseValue: "5% decrease", iconClass: "fa-caret-down", chartIcon: "fa-send-o" },
        { title: "Requests Answered", value: "32,784", progressColor: "warning", increaseValue: "10% increase", iconClass: "fa-caret-up", chartIcon: "fa-mail-reply" },
        { title: "Support Cost", value: "14,563", progressColor: "danger", increaseValue: "15% decrease", iconClass: "fa-caret-down", chartIcon: "fa-money" }
      ];

  return (
    <div className="row row-cards">
      {cardsData.map((card, index) => (
        <RevenueList key={index} {...card} />
      ))}
    </div>
  );
}

export default TotalRevenueCard;
