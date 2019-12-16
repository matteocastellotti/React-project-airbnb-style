import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Row from '../../../components/UI/Row/Row';
import Form from '../../../components/UI/Form/Form';
import Col from '../../../components/UI/Col/Col';
import Option from '../../../components/UI/Option/Option';
import Panel from '../../../components/UI/Panel/Panel';
import Button from '../../../components/UI/Button/Button';
import Translate from '../../../components/UI/Translate/Translate';
import SelectForm from '../../../components/UI/FormElement/SelectForm/SelectForm';
import InputForm from '../../../components/UI/FormElement/InputForm/InputForm';
import Spacing from '../../../components/UI/Spacing/Spacing';

import polyglot from '../../../languageProvider';
import { validateForm } from '../../../helpers/form.utility'
import { meUserActions } from '../../../store/actions';

class Information extends Component {

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

    componentWillReceiveProps(nextProps) {
        if(nextProps.constants !== null) {
            this.sexs = nextProps.constants["Sex"].map(value => {
                return (
                    <Option
                        key={value.id}
                        value={value.label}
                        label={polyglot.phrases[value.label]} />
                )
            });
    
            this.languages = nextProps.constants["Language"].map(value => {
                return (
                    <Option
                        key={value.id}
                        value={value.label}
                        label={polyglot.phrases[value.label]} />
                )
            });
        }
    }

    onChangeHandler = event => {
        const { name, value } = event.target;
        this.props.onFieldChanged(name, value);
    }

    validate = () => {
        var form = {
            formProperties: [
                { id: 'firstName', value: this.props.currentValues.firstName, type: 'text', required: true },
                { id: 'lastName', value: this.props.currentValues.lastName, type: 'text', required: true },
                { id: 'birthdayDay', value: this.props.currentValues.birthdayDay, type: 'number', required: true },
                { id: 'birthdayMonth', value: this.props.currentValues.birthdayMonth, type: 'number', required: true },
                { id: 'birthdayYear', value: this.props.currentValues.birthdayYear, type: 'number', required: true },
                { id: 'language', value: this.props.currentValues.language, type: 'text', required: true },
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
            this.props.onUpdate(this.props.currentValues);
        }
    }

    render() {
        return (
            <Col sm={12}>
                <Form onSubmit={this.submitHandler}>
                    <Spacing bottom={3}>
                        <Panel title={polyglot.phrases["MAIN_INFORMATIONS"]}>
                            <Spacing bottom={2}>
                                <Row condensed={true}>
                                    <Col sm={3}>
                                        <label className="text-right" htmlFor="firstName">
                                            <Translate labelKey="FIRST_NAME" />
                                        </label>
                                    </Col>
                                    <Col sm={9}>
                                        <InputForm
                                            id="firstName"
                                            name="firstName"
                                            hasExternalLabel={true}
                                            small={true}
                                            value={this.props.currentValues.firstName}
                                            onChange={this.onChangeHandler}
                                            errors={this.props.errors}
                                        />
                                    </Col>
                                </Row>
                            </Spacing>
                            <Spacing bottom={2}>
                                <Row condensed={true}>
                                    <Col sm={3}>
                                        <label className="text-right" htmlFor="lastName">
                                            <Translate labelKey="LAST_NAME" />
                                        </label>
                                    </Col>
                                    <Col sm={9}>
                                        <InputForm
                                            id="lastName"
                                            name="lastName"
                                            hasExternalLabel={true}
                                            small={true}
                                            value={this.props.currentValues.lastName}
                                            onChange={this.onChangeHandler}
                                            errors={this.props.errors}
                                        />
                                    </Col>
                                </Row>
                            </Spacing>
                            <Spacing bottom={2}>
                                <Row condensed={true}>
                                    <Col sm={3}>
                                        <label className="text-right" htmlFor="sex">
                                            <Translate labelKey="SEX" />
                                        </label>
                                    </Col>
                                    <Col sm={9}>
                                        <SelectForm
                                            id="sex"
                                            name="sex"
                                            hasExternalLabel={true}
                                            small={true}
                                            value={this.props.currentValues.sex}
                                            onChange={this.onChangeHandler}
                                            errors={this.props.errors}
                                            placeholder={polyglot.phrases["SEX"]}>
                                            {this.sexs}
                                        </SelectForm>
                                    </Col>
                                </Row>
                            </Spacing>
                            <Spacing bottom={2}>
                                <Row condensed={true}>
                                    <Col sm={3}>
                                        <label className="text-right">
                                            <Translate labelKey="BIRTH_DATE" />
                                        </label>
                                    </Col>
                                    <Col sm={9}>
                                        <fieldset>
                                            <SelectForm
                                                id="birthdayMonth"
                                                name="birthdayMonth"
                                                hasExternalLabel={true}
                                                small={true}
                                                value={this.props.currentValues.birthdayMonth}
                                                onChange={this.onChangeHandler}
                                                errors={this.props.errors}
                                                placeholder={polyglot.phrases["MONTH"]}>
                                                {this.months}
                                            </SelectForm>
                                            <SelectForm
                                                id="birthdayDay"
                                                name="birthdayDay"
                                                hasExternalLabel={true}
                                                small={true}
                                                value={this.props.currentValues.birthdayDay}
                                                onChange={this.onChangeHandler}
                                                errors={this.props.errors}
                                                placeholder={polyglot.phrases["DAY"]}>
                                                {this.days}
                                            </SelectForm>
                                            <SelectForm
                                                id="birthdayYear"
                                                name="birthdayYear"
                                                hasExternalLabel={true}
                                                small={true}
                                                value={this.props.currentValues.birthdayYear}
                                                onChange={this.onChangeHandler}
                                                errors={this.props.errors}
                                                placeholder={polyglot.phrases["YEAR"]}>
                                                {this.years}
                                            </SelectForm>
                                        </fieldset>
                                    </Col>
                                </Row>
                            </Spacing>
                            <Row condensed={true}>
                                <Col sm={3}>
                                    <label className="text-right" htmlFor="language">
                                        <Translate labelKey="FAVOURITE_LANGUAGE" />
                                    </label>
                                </Col>
                                <Col sm={9}>
                                    <SelectForm
                                        id="language"
                                        name="language"
                                        hasExternalLabel={true}
                                        small={true}
                                        value={this.props.currentValues.language}
                                        onChange={this.onChangeHandler}
                                        errors={this.props.errors}
                                        placeholder={polyglot.phrases["LANGUAGE"]}>
                                        {this.languages}
                                    </SelectForm>
                                </Col>
                            </Row>
                        </Panel>
                    </Spacing>
                    <Button
                        type="submit"
                        primary={true}>
                        <Translate labelKey="SAVE" />
                    </Button>    
                </Form>
            </Col>
        )
    }
}

const mapStateToProps = state => {
    const { form } = state.Me.toJS();
    return {
        constants: state.Constant.constants,
        currentValues: form.currentValues,
        errors: form.validateErrors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdate: (currentValues) => dispatch(meUserActions.update(currentValues)),
        onFieldChanged: (fieldName, newValue) => dispatch(meUserActions.meUserFieldChanged(fieldName, newValue)),
        onInvalidFormSubmitted: (errors) => dispatch(meUserActions.meUserInvalidFormSubmitted(errors)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Information);