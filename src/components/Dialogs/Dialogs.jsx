import React from "react";
import d from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import DialogAddMessageReduxForm from "./DialogAddMessageReduxForm";

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar} key={d.id}/>); // створюємо масив тегів
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);

    const onSendMessageClick = (values) => {
        props.sendMessage(values.newMessage)
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={d.messagesItems}>
                { messagesElements }
                <DialogAddMessageReduxForm onSubmit={ onSendMessageClick } />
            </div>
        </div>
    )
};

export default Dialogs;