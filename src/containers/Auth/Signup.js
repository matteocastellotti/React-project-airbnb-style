import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Spacing from '../../components/UI/Spacing/Spacing';
import Divider from '../../components/UI/Divider/Divider';
import Form from '../../components/UI/Form/Form';
import DividerText from '../../components/UI/DividerText/DividerText';
import Labeled from '../../components/UI/Labeled/Labeled';
import Row from '../../components/UI/Row/Row';
import Col from '../../components/UI/Col/Col';
import InputForm from '../../components/UI/FormElement/InputForm/InputForm';
import Text from '../../components/UI/Text/Text';
import Link from '../../components/UI/Link/Link';
import SelectForm from '../../components/UI/FormElement/SelectForm/SelectForm';
import MessageIcon from '../../components/UI/Icons/MessageIcon/MessageIcon';
import PersonIcon from '../../components/UI/Icons/PersonIcon/PersonIcon';
import LockIcon from '../../components/UI/Icons/LockIcon/LockIcon';
import Button from '../../components/UI/Button/Button';
import Option from '../../components/UI/Option/Option';
import Translate from '../../components/UI/Translate/Translate';
import SocialButton from '../../components/UI/SocialButton/SocialButton';

import polyglot from '../../languageProvider';
import { validateForm } from '../../helpers/form.utility';
import { signupActions, modalActions } from "../../store/actions";


class Signup extends Component {

    constructor(props) {
        super(props);
        this.months = moment.months().map((value, key) => {
            return (
                <Option 
                    key={key + 1}
                    value={String(key + 1)}
                    label={value} />
            )
        })

        this.days = Array(31).fill().map((value, key)=> {
            return (
                <Option 
                    key={key + 1}
                    value={String(key + 1)}
                    label={String(key + 1)} />
            )
        })

        let yearsArray = [];
        for (var i = moment().subtract(120, "years").year(); i <= moment().year(); i++) {
            yearsArray.push(i);
        }
        this.years = yearsArray.reverse().map(value => {
            return (
                <Option 
                    key={value}
                    value={String(value)}
                    label={String(value)} />
            )
        })
    }

    onChangeHandler = event => {
        const { name, value } = event.target;
        this.props.onSignupFieldChanged(name, value);
    }

    validate = () => {
        const { email, lastName, firstName, password, birthdayDay, birthdayMonth, birthdayYear } = this.props.currentValues;
        var form = {
            formProperties: [
                { id: 'email', value: email, type: 'email', required: true },
                { id: 'lastName', value: lastName, type: 'string', required: true },
                { id: 'firstName', value: firstName, type: 'string', required: true },
                { id: 'password', value: password, type: 'password', required: true },
                { id: 'birthdayDay', value: birthdayDay, type: 'number', required: true },
                { id: 'birthdayMonth', value: birthdayMonth, type: 'number', required: true },
                { id: 'birthdayYear', value: birthdayYear, type: 'number', required: true },
            ]
        };
        return validateForm(form);
    }

    submitHandler = event => {
        event.preventDefault();
        var errors = this.validate();
        if (Object.keys(errors).length !== 0) {
            this.props.onSignupInvalidFormSubmitted(errors);
        } else {
            this.props.onSignup(this.props.currentValues);
        }
    }
    
    render() {
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                    <Spacing bottom={2}>
                        <InputForm
                            id="email"
                            type="email"
                            name="email"
                            value={this.props.currentValues.email}
                            placeholder={polyglot.phrases["EMAIL"]}
                            autoComplete="email"
                            onChange={this.onChangeHandler}
                            errors={this.props.errors}
                            suffix={<MessageIcon size={24} />}
                        />
                    </Spacing>
                    <Spacing bottom={2}>
                        <InputForm
                            id="lastName"
                            name="lastName"
                            value={this.props.currentValues.lastName}
                            placeholder={polyglot.phrases["LAST_NAME"]}
                            onChange={this.onChangeHandler}
                            errors={this.props.errors}
                            suffix={<PersonIcon size={24} />}
                        />
                    </Spacing>
                    <Spacing bottom={2}>
                        <InputForm
                            id="firstName"
                            name="firstName"
                            value={this.props.currentValues.firstName}
                            placeholder={polyglot.phrases["FIRST_NAME"]}
                            onChange={this.onChangeHandler}
                            errors={this.props.errors}
                            suffix={<PersonIcon size={24} />}
                        />
                    </Spacing>
                    <Spacing bottom={2}>
                        <InputForm
                            id="password"
                            type="password"
                            name="password"
                            value={this.props.currentValues.password}
                            placeholder={polyglot.phrases["PASSWORD"]}
                            autoComplete="off"
                            onChange={this.onChangeHandler}
                            errors={this.props.errors}
                            showMessage={false}
                            suffix={<LockIcon size={24} />}
                        />
                    </Spacing>
                    <Spacing bottom={2}>
                        <Row>
                            <Col sm={4} lg={5}>
                                <SelectForm
                                    id="birthdayMonth"
                                    name="birthdayMonth"
                                    value={this.props.currentValues.birthdayMonth}
                                    onChange={this.onChangeHandler}
                                    errors={this.props.errors}
                                    placeholder={polyglot.phrases["MONTH"]}>
                                    {this.months}
                                </SelectForm>
                            </Col>
                            <Col sm={4} lg={3}>
                                <SelectForm
                                    id="birthdayDay"
                                    name="birthdayDay"
                                    value={this.props.currentValues.birthdayDay}
                                    onChange={this.onChangeHandler}
                                    errors={this.props.errors}
                                    placeholder={polyglot.phrases["DAY"]}>
                                    {this.days}
                                </SelectForm>
                            </Col>
                            <Col sm={4} lg={4}>
                                <SelectForm
                                    id="birthdayYear"
                                    name="birthdayYear"
                                    value={this.props.currentValues.birthdayYear}
                                    onChange={this.onChangeHandler}
                                    errors={this.props.errors}
                                    placeholder={polyglot.phrases["YEAR"]}>
                                    {this.years}
                                </SelectForm>
                            </Col>
                        </Row>
                    </Spacing>
                    <Spacing bottom={2}>
                        <Button
                            type="submit"
                            block={true}
                            primary={true}>
                            <Translate labelKey="SIGNUP" />
                        </Button>    
                    </Spacing>
                </Form>
                <Spacing vertical={2}>
                    <DividerText>
                        <Translate labelKey="OR_WITH" />
                    </DividerText>
                </Spacing>
                <Spacing bottom={2}>
                    <Spacing bottom={2}>
                        <SocialButton block={true} google={true}>
                            <Translate labelKey="LOGIN_GOOGLE" />
                        </SocialButton>
                    </Spacing>
                    <SocialButton block={true} facebook={true}>
                        <Translate labelKey="LOGIN_FACEBOOK" />
                    </SocialButton>
                </Spacing>
                <Divider />
                <Labeled
                    align="middle"
                    centered={true}>
                    <Text inline={true}>
                        <Translate labelKey="SIGNUP_YET" />
                    </Text>
                    <Spacing horizontal={1} inline={true}>
                        <Text inline={true}>
                            <Link onPress={this.props.onAuthModalOpened}>
                                <Translate labelKey="ACCESS" />
                            </Link>
                        </Text>
                    </Spacing>
                </Labeled>
                <Divider />
                <Labeled
                    align="middle"
                    centered={true}>
                    <Text inline={true}>
                        <Translate labelKey="AGENCY_SIGNUP" />
                    </Text>
                    <Spacing horizontal={1} inline={true}>
                        <Text inline={true}>
                            <Link>
                                <Translate labelKey="SIGNUP" />
                            </Link>
                        </Text>
                    </Spacing>
                </Labeled>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { form, errorMessage } = state.Signup.toJS();
    return {
        currentValues: form.currentValues,
        errors: form.validateErrors,
        errorMessage: errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignup: (user) => dispatch(signupActions.signup(user)),
        onSignupFieldChanged: (fieldName, newValue) => dispatch(signupActions.signupFieldChanged(fieldName, newValue)),
        onSignupInvalidFormSubmitted: (errors) => dispatch(signupActions.signupInvalidFormSubmitted(errors)),
        onAuthModalOpened: () => dispatch(modalActions.authModalOpened())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);