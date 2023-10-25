import React from "react";
import './SkillWithPicture.scss'
import ProgressBar from "./ProgressBar/ProgressBarContent";
import Gallery from "./Gallery/Gallery";

const SkillsComponent = () => (
    <div className="row">
        <div className="col-lg-4">
            <div className="card">
                <div className="card-header">
                    <div className="card-title-skill">Skill Set</div>
                </div>
                <div className="card-body mt-0">
                    <div className="chats-wrap media-list">
                        <ProgressBar skill="Html" percentage={75} color="bg-primary" />
                        <ProgressBar skill="Wordpress" percentage={50} color="bg-success" />
                        <ProgressBar skill="jQuery" percentage={60} color="bg-warning" />
                        <ProgressBar skill="Photoshop" percentage={75} color="bg-danger" />
                        <ProgressBar skill="Angular js" percentage={40} color="bg-info" />
                        <ProgressBar skill="React js" percentage={50} color="bg-secondary" />
                    </div>
                </div>
            </div>
        </div>

        <div className="col-md-12 col-sm-12 col-lg-8">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Best Pictures for Today</h3>
                </div>
                <div className="card-body p-2">
                    <Gallery />
                </div>
            </div>
        </div>
    </div>
);

export default SkillsComponent;