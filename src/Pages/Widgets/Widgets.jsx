import React from "react";
import './Widgets.scss'
import TotalVisits from './Components//TotalVisit/TotalVisitCard'
import TotalRequest from "./Components/TotalRequest/TotalRequestCard";
import NewUser from "./Components/NewUsers/NewUserCard";
import TotalProject from "./Components/TotalProject/TotalProjectCard";
import GraphProfitMargin from "./Components/GraphProfitMargin/GraphProfitMarginCard";
import TotalRevenue from "./Components/TotalRevenue/TotalRevenueCard";
import Staff from "./Components/Staff/StaffCard";
import WeekOrder from "./Components/WeekOrder/WeekOrderCard";
import FollowerLists from "./Components/Followers/FollowersCard";
import Salecards from "./Components/SaleInfoCards/SaleCard"
import SkillWithPicture from "./Components/SkillWithPicture/SkillWithPicture";

const Widgets = () =>{
    return(
        <div className="widgets">
            <TotalVisits />
            <TotalRequest/>
            <NewUser/>
            <TotalProject/>
            <GraphProfitMargin/>
            <TotalRevenue/>
            <Staff/>
            <WeekOrder/>
            <FollowerLists/>
            <Salecards/>
            <SkillWithPicture/>
        </div>
    )
}
export default Widgets