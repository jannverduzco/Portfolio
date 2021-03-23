import React from "react";
import "./style.css";

function ProjectTitle (props) {
    return (
        <div className="projectTitle">{props.children}</div>
    )
}

export default ProjectTitle;
