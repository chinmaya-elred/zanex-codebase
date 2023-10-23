import React from "react";
import './dashboard.scss'
import CardContainer from "./Components/CardContainer/CardContainer";
import TotalTransaction from './Components/TotalTransactions/TotalTransaction'
import RecentOrders  from './Components/RecentOrders/RecentOrders'
import Timeline from './Components/Timeline/Timeline'
import BrowserUsage from './Components/BrowserUsage/BrowserCard'
import DailyActivity from './Components/DailyActivity/DailyActivity'

const Main = () => {
    return (
        <div className="dashboard">
            <CardContainer />

            <div className="row">
             <TotalTransaction/>
                <div className="col-lg-3 col-md-12">
                    <RecentOrders/>
                </div>
            </div>

            <div className="row pb-2">
                <Timeline />
                <BrowserUsage />
                <DailyActivity/>
            </div>
        </div>
    )
}

export default Main