import React from "react";
import styles from "./Login.module.css";
import formStyles from "../common/FormControls/FormControls.module.css";
import { reduxForm } from "redux-form";
import { Input, createField } from "../common/FormControls/FormControls";
import { required, email } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router";

const LoginForm = ({captchaUrl, ...props}) => {
    //handleSubmit робить event.preventdefault(), збирає всі дані з форми в JSON об♥9єкт, огортається функцією onSubmit яка приходить у пропсах і ці дані можна записати в стейт
    //<Field component={ "input" } placeholder={ "Login" } name = { "login" }/> - name це газва властивості цього інпута в JSON об'єкті який буде відправлений
    
    return (
        <form className={ styles.formLogin } onSubmit={props.handleSubmit}> 
            <label className={ styles.login }>
                { createField(Input, "Email", "email", [required, email] ) }
            </label>
            <label className={ styles.password }>
                { createField(Input, "Password", "password", [required] ) }
            </label>
            <label className={ styles.rememberCheck }>
                { createField("input", null, "rememberMe", [], { type:"checkbox" }) }
                Remember me
                {props.error ? <div className={ formStyles.formErrorSummary }>{ props.error }</div> : null} 
            </label>
            {captchaUrl ? <img src={ captchaUrl } alt="captcha"/> : null}
            {captchaUrl ? createField(Input, "Letter from image", "captcha", [required] ) : null}
            <button>Login</button>
        </form> //в пропсах прилетить error коли буде помилка валідації, тому що ми огорнули форму в reduxForm
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {
    const onSubmit = formData => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha); // це колбек який діспатчить кріейтор санки
    };

    if (props.isAuth) {
        return <Navigate to="/profile"/>
    } 
    return (
        <div className={styles.formLoginContainer}>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl = {props.captchaUrl} onSubmit={ onSubmit }/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, { login })(Login);