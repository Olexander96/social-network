import React from "react";
import d from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <NavLink className={d.dialog} to="/dialogs/dimon">Dimon</NavLink>
                <NavLink className={d.dialog} to="/dimon">Ehor</NavLink>
                <NavLink className={d.dialog} to="/dimon">Olya</NavLink>
                <NavLink className={d.dialog} to="/dimon">Vitalik</NavLink>
                <NavLink className={d.dialog} to="/dimon">Sasha</NavLink>
                <NavLink className={d.dialog} to="/dimon">Alyona</NavLink>
            </div>
            <div className={d.messagesItems}>
                <div className={d.message}>Hello</div>
                <div className={d.message}>How are you?</div>
                <div className={d.message}>How are your it-kanasutra?</div>
            </div>
        </div>
    )
}

export default Dialogs;