import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {
    
    return (
        <StoreContext.Consumer> 
            {value => {
                    const onSendMessageClick = () => {
                        value.dispatch( sendMessageCreator() )
                    }
                
                    const onNewMessageChange = (body) => {
                        let action = updateNewMessageBodyCreator( body )
                        value.dispatch( action )
                    }
                    return <Dialogs dialogsPage = { value.getState().dialogsPage } 
                                    updateNewMessageBody = { onNewMessageChange }
                                    sendMessage = { onSendMessageClick } />
                }
            }
        </StoreContext.Consumer>  
        )
}

export default DialogsContainer;