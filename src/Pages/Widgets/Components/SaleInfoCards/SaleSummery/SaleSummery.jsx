import React from "react";

const SalesSummary = () => {
    const summaryItems = [
        { label: "Total Revenue", value: "$15300", color: "text-blue" },
        { label: "Total Tax", value: "$1625", color: "text-success" },
        { label: "Total Income", value: "70%", color: "text-warning" },
        { label: "Total Loss", value: "50%", color: "text-danger" },
        { label: "Total Loss", value: "30%", color: "text-info" },
        { label: "Total Loss", value: "55%", color: "text-secondary" }
    ];

    return (
        <div className="col-md-12 col-xl-4">
            <div className="card">
                <div className="card-header border-bottom">
                    <h5 className="card-title">Sales Summary</h5>
                </div>
                <div className="card-body">
                    {summaryItems.map((item, index) => (
                        <div className={index === summaryItems?.length -1 ? "clearfix row mb-0" : "clearfix row mb-4"} key={index}>
                            <div className="col">
                                <div className="float-start text-start">
                                    <h5 className="mb-0"><strong>{item.label}</strong></h5>
                                    <small className="text-muted">weekly profit</small>
                                </div>
                            </div>
                            <div className="col">
                                <div className="float-end">
                                    <h4 className={`fw-bold mb-0 mt-2 ${item.color}`}>{item.value}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SalesSummary;
