import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return(
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" placeholder={"Login"} name={'login'} component={'input'}/>
                </div>
                <div>
                    <Field type="text" placeholder={"Password"} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field type="checkbox" component={'input'} name={'rememberMe'}/>
                </div>
                <div>
                    <button>Log in</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return(
    <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
    )
}




export default  Login;