import React from "react";
import d from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>); // створюємо масив тегів
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

    //const newMessage = React.createRef()//звязуємо з textarea

    const onSendMessageClick = () => {
        props.dispatch( sendMessageCreator() )
    }

    const onNewMessageChange = (event) => {
        let body = event.target.value;
        let action = updateNewMessageBodyCreator( body )
        props.dispatch( action )
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={d.messagesItems}>
                { messagesElements }
                <div>
                    <textarea onChange={ onNewMessageChange } value={ props.dialogsPage.newMessageBody } cols="40" rows="3"></textarea>
                </div>
                <div>
                    <button onClick={ onSendMessageClick }>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;