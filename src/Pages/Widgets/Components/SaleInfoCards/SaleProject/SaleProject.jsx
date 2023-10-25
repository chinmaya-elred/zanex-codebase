import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import SaleProjectBottomContent from "./SaleProjectBottomContent";

const Projects = () => {
    return (
        <div className="col-xl-4 col-sm-12 p-l-0 p-r-0 col-md-12">
            <div className="card">
                <div className="card-header text-center">
                    <h2 className="card-title">Projects</h2>
                </div>
                <div className="card-body">
                    <div className="mx-auto chart-circle chart-circle-md mt-3 mb-4 text-center" data-value="0.75" data-thickness="8" data-bs-color="#5e2dd8 ">
                        <CircularProgressbar value={75} text={''} strokeWidth={5} className="circularProgress" styles={buildStyles({ pathColor: '#6259ca' })} />
                    </div>

                  <SaleProjectBottomContent/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
