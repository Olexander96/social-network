import React from "react";
import d from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message"

const Dialogs = (props) => {

    const dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>); // створюємо масив тегів
    const messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

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