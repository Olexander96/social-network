import React from "react";
import m from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../utils/validators/validators';
import { Textarea } from "../../common/FormControls/FormControls";

const currentMaxLength  = maxLength(15); //бо на пряму не працює

const MyNewPostForm = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className={m.writePost}>
            <Field component={ Textarea } 
                    name={ "newPost" }
                    validate={ [ required, currentMaxLength ] }   //всі функції які валідують
                    placeholder='Post message'
            />
            <div>
                <button>Add Post</button>
                <button>Remove Post</button>
            </div>
        </form>
    )
};

const MyNewPostReduxForm = reduxForm({form: "post"})(MyNewPostForm);

export default MyNewPostReduxForm;