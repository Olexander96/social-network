import React from "react";
import styles from "./Login.module.css";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
    return (
        <form className={ styles.form } onSubmit={props.handleSubmit}> 
            <label className={ styles.login }>
                <Field component={ "input" } placeholder={ "Login" } name = { "login" }/>
            </label>
            <label className={ styles.password }>
                <Field component={ "input" } placeholder={ "Password" } name = { "password" }/>
            </label>
            <label className={ styles.rememberCheck }>
                <Field component={ "input" } type={ "checkbox" } name = { "rememberMe" }/>
                remember me
            </label>
            <button>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

const Login = (props) => {
    const onSubmit = formData => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={ onSubmit }/>
        </div>
    )
}

export default Login;