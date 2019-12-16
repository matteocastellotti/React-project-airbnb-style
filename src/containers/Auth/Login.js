import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputForm from '../../components/UI/FormElement/InputForm/InputForm';
import MessageIcon from '../../components/UI/Icons/MessageIcon/MessageIcon';
import LockIcon from '../../components/UI/Icons/LockIcon/LockIcon';
import Button from '../../components/UI/Button/Button';
import FlexBar from '../../components/UI/FlexBar/FlexBar';
import Link from '../../components/UI/Link/Link';
import Labeled from '../../components/UI/Labeled/Labeled';
import Text from '../../components/UI/Text/Text';
import Spacing from '../../components/UI/Spacing/Spacing';
import CheckBoxForm from '../../components/UI/FormElement/CheckBoxForm/CheckBoxForm';
import Divider from '../../components/UI/Divider/Divider';
import Translate from '../../components/UI/Translate/Translate';
import DividerText from '../../components/UI/DividerText/DividerText';
import SocialButton from '../../components/UI/SocialButton/SocialButton';

import polyglot from '../../languageProvider';
import { validateForm } from '../../helpers/form.utility'
import { modalActions, authenticationActions } from '../../store/actions';

class Login extends Component {

    onChangeHandler = event => {
        const { name, value } = event.target;
        this.props.onFieldChanged(name, value);
    }

    validate = () => {
        var form = {
            formProperties: [
                { id: 'email', value: this.props.currentValues.email, type: 'email', required: true },
                { id: 'password', value: this.props.currentValues.password, type: 'password', required: true }
            ]
        };
        return validateForm(form);
    }

    submitHandler = event => {
        event.preventDefault();
        var errors = this.validate();
        if (Object.keys(errors).length !== 0) {
            this.props.onInvalidFormSubmitted(errors);
        } else {
            this.props.onAuthentication(this.props.currentValues);
        }
    }

    render() {
        return (
            <div>
                <Spacing bottom={2}>
                    <Spacing bottom={2}>
                        <SocialButton google={true} block={true}>
                            <Translate labelKey="LOGIN_GOOGLE" />
                        </SocialButton>
                    </Spacing>
                    <SocialButton facebook={true} block={true}>
                        <Translate labelKey="LOGIN_FACEBOOK" />
                    </SocialButton>
                </Spacing>
                <Spacing vertical={2}>
                    <DividerText>
                        <Translate labelKey="OR_CONTINUE_WITH" />
                    </DividerText>
                </Spacing>
                <form name="form" onSubmit={this.submitHandler}>
                    <Spacing bottom={2}>
                        <InputForm
                            id="email"
                            name="email"
                            value={this.props.currentValues.email}
                            placeholder={polyglot.phrases["EMAIL"]}
                            onChange={this.onChangeHandler}
                            errors={this.props.errors}
                            suffix={<MessageIcon size={24} />}
                        />
                    </Spacing>
                    <Spacing bottom={2}>
                        <InputForm
                            id="password"
                            name="password"
                            type={this.props.showPassword ? "text" : "password"}
                            value={this.props.currentValues.password}
                            placeholder={polyglot.phrases["PASSWORD"]}
                            onChange={this.onChangeHandler}
                            errors={this.props.errors}
                            suffix={<LockIcon size={24} />}
                        />
                    </Spacing>
                    <Spacing bottom={2}>
                        <FlexBar
                            align="middle"
                            before={
                                <CheckBoxForm
                                    label={polyglot.phrases["REMEMBERME"]}
                                    name="rememberMe"
                                    id="rememberMe"
                                    value={this.props.currentValues.rememberMe}
                                    onChange={this.onChangeHandler} />
                            }
                            after={
                                <Link
                                    onPress={this.props.onLoginShowPassword}>
                                    <Translate labelKey={this.props.showPassword ? "HIDE_PASSWORD" : "SHOW_PASSWORD"} />
                                </Link>
                            } />
                    </Spacing>
                    <Spacing bottom={2}>
                        <Button
                            type="submit"
                            block={true}
                            primary={true}>
                            <Translate labelKey="ACCESS" />
                        </Button>
                    </Spacing>
                </form>
                <Divider />
                <Labeled
                    align="middle"
                    centered={true}>
                    <Text inline={true}>
                        <Translate labelKey="NOT_SIGNUP" />
                    </Text>
                    <Spacing horizontal={1} inline={true}>
                        <Text inline={true}>
                            <Link onPress={this.props.onSignupModalOpened}>
                                <Translate labelKey="SIGNUP" />
                            </Link>
                        </Text>
                    </Spacing>
                </Labeled>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { form, showPassword, errorMessage } = state.Auth.toJS();
    return {
        currentValues: form.currentValues,
        errors: form.validateErrors,
        showPassword: showPassword,
        errorMessage: errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthentication: (currentValues) => dispatch(authenticationActions.login(currentValues)),
        onLoginShowPassword: () => dispatch(authenticationActions.loginShowPassword()),
        onFieldChanged: (fieldName, newValue) => dispatch(authenticationActions.loginFieldChanged(fieldName, newValue)),
        onInvalidFormSubmitted: (errors) => dispatch(authenticationActions.loginInvalidFormSubmitted(errors)),
        onSignupModalOpened: () => dispatch(modalActions.signupModalOpened())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
