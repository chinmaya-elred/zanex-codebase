import React from "react";
import NewUserList from './NewUserList/NewUserList'

const NewUserCard = () => {
    return (
        <div className="row">
            <NewUserList
                title="New users"
                iconClass="fa-user-group"
                number="3,672"
                label="Monthly users"
                color="text-primary"
            />
            <NewUserList
                title="Total Tax"
                iconClass="fa-cube"
                number="$89,265"
                label="Monthly Income"
                color="text-success"
            />
            <NewUserList
                title="Total Profit"
                iconClass="fa-square-poll-vertical"
                number="$23,987"
                label="Monthly Profit"
                color="text-warning"
            />
            <NewUserList
                title="Total Sales"
                iconClass="fa-cart-plus"
                number="46,486"
                label="Monthly Sales"
                color="text-danger"
            />
        </div>
    );
}

export default NewUserCard;
