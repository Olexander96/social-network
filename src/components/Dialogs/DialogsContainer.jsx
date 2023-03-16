import {sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';


// const DialogsContainer = (props) => {
    
//     return (
//         <StoreContext.Consumer> 
//             {value => {
//                     const onSendMessageClick = () => {
//                         value.dispatch( sendMessageCreator() )
//                     }
                
//                     const onNewMessageChange = (body) => {
//                         let action = updateNewMessageBodyCreator( body )
//                         value.dispatch( action )
//                     }
//                     return <Dialogs dialogsPage = { value.getState().dialogsPage } 
//                                     updateNewMessageBody = { onNewMessageChange }
//                                     sendMessage = { onSendMessageClick } />
//                 }
//             }
//         </StoreContext.Consumer>  
//         )
// }

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch( sendMessageCreator() )
        },
        onNewMessageChange: (body) => {
            let action = updateNewMessageBodyCreator( body )
            dispatch( action )
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;