import React, { Component } from 'react';
import { connect } from 'react-redux';

import Row from '../../../components/UI/Row/Row';
import Col from '../../../components/UI/Col/Col';
import Spacing from '../../../components/UI/Spacing/Spacing';
import Panel from '../../../components/UI/Panel/Panel';
import Button from '../../../components/UI/Button/Button';
import Translate from '../../../components/UI/Translate/Translate';
import InputForm from '../../../components/UI/FormElement/InputForm/InputForm';

import polyglot from '../../../languageProvider';
import { validateForm } from '../../../helpers/form.utility'
import { meUserActions } from '../../../store/actions';

class Contacts extends Component {

    onChangeHandler = event => {
        const { name, value } = event.target;
        this.props.onFieldChanged(name, value);
    }

    validate = () => {
        const { 
            email
        } = this.props.currentValues;
        var form = {
            formProperties: [
                { id: 'email', value: email, type: 'email', required: true },
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
                <form onSubmit={this.submitHandler}>
                    <Spacing bottom={3}>
                        <Panel
                            title={polyglot.phrases["CONTACT_INFORMATIONS"]}>
                            <Spacing bottom={2}>
                                <Row condensed={true}>
                                    <Col sm={3}>
                                        <label className="text-right" htmlFor="email">
                                            <Translate labelKey="EMAIL" />
                                        </label>
                                    </Col>
                                    <Col sm={9}>
                                        <InputForm
                                            id="email"
                                            type="email"
                                            name="email"
                                            hasExternalLabel={true}
                                            small={true}
                                            value={this.props.currentValues.email}
                                            onChange={this.onChangeHandler}
                                            errors={this.props.errors}
                                        />
                                    </Col>
                                </Row>
                            </Spacing>
                            <Spacing bottom={2}>
                                <Row condensed={true}>
                                    <Col sm={3}>
                                        <label className="text-right" htmlFor="phoneNumber">
                                            <Translate labelKey="PHONE" />
                                        </label>
                                    </Col>
                                    <Col sm={9}>
                                        <InputForm
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            hasExternalLabel={true}
                                            small={true}
                                            value={this.props.currentValues.phoneNumber}
                                            onChange={this.onChangeHandler}
                                            errors={this.props.errors}
                                        />
                                    </Col>
                                </Row>
                            </Spacing>
                            <Spacing bottom={2}>
                                <Row condensed={true}>
                                    <Col sm={3}>
                                        <label className="text-right" htmlFor="faxNumber">
                                            <Translate labelKey="FAX" />
                                        </label>
                                    </Col>
                                    <Col sm={9}>
                                        <InputForm
                                            id="faxNumber"
                                            name="faxNumber"
                                            hasExternalLabel={true}
                                            small={true}
                                            value={this.props.currentValues.faxNumber}
                                            onChange={this.onChangeHandler}
                                            errors={this.props.errors}
                                        />
                                    </Col>
                                </Row>
                            </Spacing>
                            <Spacing bottom={2}>
                                <Row condensed={true}>
                                    <Col sm={3}>
                                        <label className="text-right" htmlFor="mobilePhoneNumber">
                                            <Translate labelKey="CELL_PHONE" />
                                        </label>
                                    </Col>
                                    <Col sm={9}>
                                        <InputForm
                                            id="mobilePhoneNumber"
                                            name="mobilePhoneNumber"
                                            hasExternalLabel={true}
                                            small={true}
                                            value={this.props.currentValues.mobilePhoneNumber}
                                            onChange={this.onChangeHandler}
                                            errors={this.props.errors}
                                        />
                                    </Col>
                                </Row>
                            </Spacing>
                            <Row condensed={true}>
                                <Col sm={3}>
                                    <label className="text-right" htmlFor="city">
                                        <Translate labelKey="CITY" />
                                    </label>
                                </Col>
                                <Col sm={9}>
                                    <InputForm
                                        id="city"
                                        name="city"
                                        hasExternalLabel={true}
                                        small={true}
                                        value={this.props.currentValues.city}
                                        onChange={this.onChangeHandler}
                                        errors={this.props.errors}
                                    />
                                </Col>
                            </Row>
                        </Panel>
                    </Spacing>
                    <Button
                        type="submit"
                        primary={true}>
                        <Translate labelKey="SAVE" />
                    </Button>    
                </form>
            </Col>
        )
    }
}

const mapStateToProps = state => {
    const { form } = state.Me.toJS();
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);