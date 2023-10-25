import React from "react";

const Visitor = ({ name, role, image, followAction }) => {
    return (
        <div className="media mb-4 mt-0">
            <div className="d-flex me-3">
                <a href="javascript:void(0);">
                    <img className="media-object rounded-circle thumb-sm" alt="64x64" src={image} />
                </a>
            </div>
            <div className="media-body">
                <a href="javascript:void(0);" className="text-dark">{name}</a>
                <div className="text-muted small">{role}</div>
            </div>
            <button type="button" className={`btn ${followAction}`}><span className="button-text">Follow</span></button>
        </div>
    );
}
export default Visitor;