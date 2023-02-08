import React from "react";
import d from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/1">Dimon</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/2">Ehor</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/3">Olya</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/4">Vitalik</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/5">Sasha</NavLink>
                </div>
                <div className={d.dialog}>
                    <NavLink to="/dialogs/6">Alyona</NavLink>
                </div>
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