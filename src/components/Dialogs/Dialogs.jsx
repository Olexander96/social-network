import React from "react";
import d from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message"

const Dialogs = (props) => {
    const dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>); // створюємо масив тегів
    const messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    const newMessage = React.createRef()//звязуємо з textarea
    const addMessage = () => {
        let text = newMessage.current.value;
        let textObj = {id: 10, message: text}
        props.state.messages = props.state.messages.push(textObj) // працює не коректно
    }

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={d.messagesItems}>
                { messagesElements }
                <textarea ref={ newMessage } name="" id="" cols="40" rows="3"></textarea>
                <div>
                    <button onClick={ addMessage }>Send Message</button>
                </div>

            </div>
            
        </div>
    )
}

export default Dialogs;