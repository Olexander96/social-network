import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    
    const onSendMessageClick = () => {
        props.store.dispatch( sendMessageCreator() )
    }

    const onNewMessageChange = (body) => {
        let action = updateNewMessageBodyCreator( body )
        props.store.dispatch( action )
    }

    return (<Dialogs 
                dialogsPage = { props.store.getState().dialogsPage } 
                updateNewMessageBody = { onNewMessageChange }
                sendMessage = { onSendMessageClick }
            />
        )
}

export default DialogsContainer;