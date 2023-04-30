import React from "react";
import styles from "./FormControls.module.css";
import { Field } from "redux-form";

const FormControl = ({input, meta: {touched, error}, child, ...props}) => {
    const hasError = touched && error; // якщо ми вже натиснули на пут (hasError) і спрацювала помилка одного з валадаторів(в meta буде error)
    return (
        <div className={ styles.postForm + " " + ( hasError ? styles.error : "" ) }>
            { props.children }
            { hasError ? <span>{ error }</span> : undefined}
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (<FormControl {...props}><textarea {...input} {...restProps}/></FormControl>)
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (<FormControl {...props}><input {...input} {...restProps}/></FormControl>)
};

export const createField = (component, placeholder, name, validators, props = {}) => {
    return (
        <Field component = { component } 
            placeholder = { placeholder } 
            name = { name }
            validate = { validators } // тут масивом передаються всі валідатори
            {...props}
        />
    )
}
