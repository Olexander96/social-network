import React from "react";
import d from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id;

    return (
        <div className={d.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={d.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <DialogItem id="1" name="Dimon"/>
                <DialogItem id="2" name="Ehor"/>
                <DialogItem id="3" name="Olya"/>
                <DialogItem id="4" name="Vitalik"/>
                <DialogItem id="5" name="Sasha"/>
                <DialogItem id="6" name="Alyona"/>
            </div>
            <div className={d.messagesItems}>
                <Message message="Hello"/>
                <Message message="How are you?"/>
                <Message message="How are your it-kanasutra?"/>
            </div>
        </div>
    )
}

export default Dialogs;