import React from "react";
import styles from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControls/FormControls";
import { required, email } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router";

const LoginForm = (props) => {
    //handleSubmit робить event.preventdefault(), збирає всі дані з форми в JSON об♥9єкт, огортається функцією onSubmit яка приходить у пропсах і ці дані можна записати в стейт
    //<Field component={ "input" } placeholder={ "Login" } name = { "login" }/> - name це газва властивості цього інпута в JSON об'єкті який буде відправлений
    
    return (
        <form className={ styles.form } onSubmit={props.handleSubmit}> 
            <label className={ styles.login }>
                <Field component={ Input } 
                    placeholder={ "Email" } 
                    name = { "email" }
                    validate={[required, email]} // немає бути пустий та валідація регулярним виразом
                />
            </label>
            <label className={ styles.password }>
                <Field component={ Input } 
                    placeholder={ "Password" } 
                    name = { "password" }
                    validate={[required]}
                />
            </label>
            <label className={ styles.rememberCheck }>
                <Field component={ "input" } 
                    type={ "checkbox" } 
                    name = { "rememberMe" }
                />
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
        props.login(formData.email, formData.password, formData.rememberMe); // це колбек який діспатчить кріейтор санки
    };

    if (props.isAuth) {
        return <Navigate to="/profile"/>
    } 
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={ onSubmit }/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login);