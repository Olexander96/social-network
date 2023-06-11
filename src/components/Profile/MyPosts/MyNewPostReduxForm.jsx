import React from "react";
import styles from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../utils/validators/validators';
import { Textarea } from "../../common/FormControls/FormControls";

const currentMaxLength  = maxLength(35); //бо на пряму не працює

const MyNewPostForm = (props) => {

    // let [currentValue, resetCurrentValue] = useState('');

    return (
        <form onSubmit={ props.handleSubmit } className={styles.writePost}>
            <Field component={ Textarea } 
                    name={ "newPost" }
                    validate={ [ required, currentMaxLength ] }   //всі функції які валідують
                    placeholder='Post message'
            />
            <button>Add Post</button>
        </form>
    )
};

const MyNewPostReduxForm = reduxForm({form: "post"})(MyNewPostForm);

export default MyNewPostReduxForm;