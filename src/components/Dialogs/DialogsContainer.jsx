import {sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import wiAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

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


export default compose(
    connect(mapStateToProps, mapDispatchToProps), //прокидує дані із стейта та колбеки
    wiAuthRedirect // HOC якщо не залогынений то редырект на вкладку login
)(Dialogs);