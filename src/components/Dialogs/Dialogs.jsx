import React from "react";
import d from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormControls/FormControls";
import { maxLength, required } from "../../utils/validators/validators";

const maxLength50 = maxLength(50);

const Dialogs = (props) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar} key={d.id}/>); // створюємо масив тегів
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);

    const onSendMessageClick = (values) => {
        props.sendMessage(values.newMessage)
    }

    // const onNewMessageChange = (event) => { //використовували раніше, щоб оновлювати стейт коли друкуємо меседж
    //     let body = event.target.value;
    //     props.updateNewMessageBody( body )
    // }

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


const DialogAddMessageForm = (props) => {//винести в окремий файл

    return (
        <form onSubmit={ props.handleSubmit }>
            <div>
                <Field component={ Textarea } 
                    name={ "newMessage" } 
                    validate={ [ required, maxLength50 ] }
                    placeholder="New message"
                />
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
};

const DialogAddMessageReduxForm = reduxForm({form: "dialog"})(DialogAddMessageForm);


export default Dialogs;