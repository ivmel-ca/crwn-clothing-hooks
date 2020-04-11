import React, { useState } from 'react';
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import './sign-up.styles.scss';
import {signUpStart} from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        signUpStart({
            displayName,
            email,
            password
        });

        setCredentials({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    const handleChange = event => {
      const  { name, value } = event.target;
      setCredentials({
          ...userCredentials,
          [name]: value
      });

    };

    return (
        <div className="sign-up">
            <h2 className="title">
                I do not have an account
            </h2>
            <span>
                Sign up with your email and password
            </span>
            <form className="sign-up-form" onSubmit={ handleSubmit }>
                <FormInput
                type="text"
                name="displayName"
                label="displayName"
                value={ displayName }
                onChange={ handleChange }
                required
                />
                <FormInput
                    type="email"
                    name="email"
                    label="email"
                    value={ email }
                    onChange={ handleChange }
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    label="password"
                    value={ password }
                    onChange={ handleChange }
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    label="confirmPassword"
                    value={ confirmPassword }
                    onChange={ handleChange }
                    required
                />
                <CustomButton type="submit"  >SIGN UP</CustomButton>
            </form>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    signUpStart: data => dispatch(signUpStart(data))
});

export default connect(null, mapDispatchToProps)(SignUp);