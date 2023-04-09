import {sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import wiAuthRedirect from '../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth //для редіректа, якщо не залогінений користувач
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch( sendMessageCreator() )
        },
        updateNewMessageBody: (body) => {
            dispatch( updateNewMessageBodyCreator( body ) )
        }
    }
}

const AuthRedirectComponent = wiAuthRedirect(Dialogs)// HOC якщо не залогынений то редырект на вкладку login

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;