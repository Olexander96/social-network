import React from "react";
import d from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar} key={d.id}/>); // створюємо масив тегів
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody( body )
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={d.messagesItems}>
                { messagesElements }
                <div>
                    <textarea onChange={ onNewMessageChange } value={ props.dialogsPage.newMessageBody }></textarea>
                </div>
                <div>
                    <button onClick={ onSendMessageClick }>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;