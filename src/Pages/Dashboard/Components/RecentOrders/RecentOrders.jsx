import React from "react";
import './RecentOrders.scss'
import ApexChart from "../../../../Components/ApexChartGauge/ApexChartGauge";

const RecentOrders = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Recent Orders</h3>
            </div>
            <div className="card-body">
                <div className="row sales-product-infomation pb-0 mb-0 mx-auto wd-100p mt-6">
                    <ApexChart />
                    <div className="col-md-6 col justify-content-center text-center">
                        <p className="mb-0 d-flex justify-content-center"><span className="legend bg-primary"></span>Delivered</p>
                        <h3 className="mb-1 fw-bold">5238</h3>
                        <div className="d-flex justify-content-center ">
                            <p className="text-muted mb-0">Last 6 months</p>
                        </div>
                    </div>
                    <div className="col-md-6 col text-center float-end">
                        <p className="mb-0 d-flex justify-content-center "><span className="legend bg-background2"></span>Cancelled</p>
                        <h3 className="mb-1 fw-bold">3467</h3>
                        <div className="d-flex justify-content-center ">
                            <p className="text-muted mb-0">Last 6 months</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RecentOrders