import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../common/FormControls/FormControls";
import { maxLength, required } from "../../utils/validators/validators";

const maxLength50 = maxLength(50);

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

export default DialogAddMessageReduxForm;