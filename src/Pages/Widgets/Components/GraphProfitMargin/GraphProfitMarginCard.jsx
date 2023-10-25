import React from "react";
import GraphProfitMarginList from './GraphProfitMarginList/GraphProfitMargin'; 

const GraphProfitMarginCard = () => {
    const cardsData = [
        { title: "Graph Profit Margin", value: "78%", bgColor: "info", icon: <i className="fa-regular fa-eye"></i> },
        { title: "Opex Ratio", value: "4.5:8", bgColor: "danger", icon: <i className="fa-solid fa-volume-high"></i> },
        { title: "Operating Profit Margin", value: "22%", bgColor: "warning", icon: <i className="fa-solid fa-chart-simple"></i> },
        { title: "Net Profit Margin", value: "16%", bgColor: "success", icon: <i className="fa-regular fa-user"></i> }
    ];

    return (
        <div className="row">
            {cardsData.map((card, index) => (
                <GraphProfitMarginList key={index} {...card} index={index} />
            ))}
        </div>
    );
}

export default GraphProfitMarginCard;
