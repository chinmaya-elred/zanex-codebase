import React from "react";
import User1 from '../../../../../assets/images/user1.jpg'
import User2 from '../../../../../assets/images/user2.jpg'
import User3 from '../../../../../assets/images/user3.jpg'
import User4 from '../../../../../assets/images/user4.jpg'
import Visitor from "./SaleVisitors";

const Visitors = () => {
    const visitors = [
        { name: "Nathaniel Bustos", role: "Manager", image: User1, followAction: "btn-primary btn-sm d-block" },
        { name: "Latanya Kinard", role: "Web Designer", image: User2, followAction: "btn-blue btn-sm d-block" },
        { name: "George Lujan", role: "Founder", image: User3, followAction: "btn-warning btn-sm d-block" },
        { name: "Bustos", role: "Manager", image: User1, followAction: "btn-success btn-sm d-block" },
        { name: "Samantha", role: "Manager", image: User4, followAction: "btn-danger btn-sm d-block" },
    ];

    return (
        <div className="col-xl-4 col-md-12">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Visitors</h5>
                </div>
                <div className="card-body">
                    {visitors.map((visitor, index) => (
                        <Visitor
                            key={index}
                            name={visitor.name}
                            role={visitor.role}
                            image={visitor.image}
                            followAction={visitor.followAction}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Visitors;
