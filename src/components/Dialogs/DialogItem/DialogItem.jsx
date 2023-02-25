import React from "react";
import di from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;
    const alt = props.name + " avatar"

    return (
        <div className={di.dialog}>
            <img src={props.avatar} alt={ alt } />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;