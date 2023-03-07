import React from "react";
import d from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message"

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>); // створюємо масив тегів
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);

    const newMessage = React.createRef()//звязуємо з textarea

    const addMessage = () => {
        //props.addMessage()
        props.dispatch( {type: "ADD-MESSAGE"} )
    }

    const updateMessages = () => {
        let text = newMessage.current.value;
        //props.updateMessages(text)
        props.dispatch( {type: "UPDATE-MESSAGES", newMessage: text} )
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={d.messagesItems}>
                { messagesElements }
                <textarea onChange={ updateMessages } ref={ newMessage } value={ props.dialogsPage.newMessageText } cols="40" rows="3"></textarea>
                <div>
                    <button onClick={ addMessage }>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;