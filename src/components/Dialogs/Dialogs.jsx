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

const dialogs = [
    {id: 1, name: "Dimon"},
    {id: 2, name: "Ehor"},
    {id: 3, name: "Olya"},
    {id: 4, name: "Vitalik"},
    {id: 5, name: "Sasha"},
    {id: 6, name: "Alyona"}
];

const messages = [
    {id: 1, message: "Hello"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "How are your it-kanasutra?"}
];

const dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>); // створюємо масив тегів
const messagesElements = messages.map(m => <Message message={m.message}/>);

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={d.messagesItems}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;