import React, { Component } from 'react';
import { connect } from 'react-redux';

import Row from '../../../components/UI/Row/Row';
import Col from '../../../components/UI/Col/Col';
import Spacing from '../../../components/UI/Spacing/Spacing';
import Panel from '../../../components/UI/Panel/Panel';
import Button from '../../../components/UI/Button/Button';
import Form from '../../../components/UI/Form/Form';
import Translate from '../../../components/UI/Translate/Translate';
import InputForm from '../../../components/UI/FormElement/InputForm/InputForm';

import polyglot from '../../../languageProvider';
import { validateForm } from '../../../helpers/form.utility'
import { meAgencyActions } from '../../../store/actions';

class Information extends Component {

    onChangeHandler = event => {
        const { name, value } = event.target;
        this.props.onFieldChanged(name, value);
    }

    validate = () => {
        const { 
            businessName
        } = this.props.currentValues;
        var form = {
            formProperties: [
                { id: 'businessName', value: businessName, type: 'text', required: true },
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
                    <Spacing bottom={4}>
                        <Panel title={polyglot.phrases["MAIN_INFORMATIONS"]}>
                            <Spacing bottom={2}>
                                <Row condensed={true}>
                                    <Col md={3}>    
                                        <label htmlFor="businessName">
                                            <Translate labelKey="AGENCY_BUSINESS_NAME" />
                                        </label>
                                    </Col>
                                    <Col md={9}>
                                        <InputForm
                                            id="businessName"
                                            name="businessName"
                                            hasExternalLabel={true}
                                            small={true}
                                            value={this.props.currentValues.businessName}
                                            onChange={this.onChangeHandler}
                                            errors={this.props.errors}
                                        />
                                    </Col>
                                </Row>
                            </Spacing>
                            <Spacing bottom={2}>
                                <Row condensed={true}>
                                    <Col md={3}>
                                        <label htmlFor="description">
                                            <Translate labelKey="DESCRIPTION" />
                                        </label>
                                    </Col>
                                    <Col md={9}>
                                        <InputForm
                                            id="description"
                                            name="description"
                                            hasExternalLabel={true}
                                            small={true}
                                            value={this.props.currentValues.description}
                                            onChange={this.onChangeHandler}
                                            errors={this.props.errors}
                                        />
                                    </Col>
                                </Row>
                            </Spacing>
                            <Spacing bottom={2}>
                                <Row condensed={true}>
                                    <Col md={3}>
                                        <label htmlFor="description">
                                            <Translate labelKey="VAT_NUMBER" />
                                        </label>
                                    </Col>
                                    <Col md={9}>
                                        <InputForm
                                            id="vatNumber"
                                            name="vatNumber"
                                            hasExternalLabel={true}
                                            small={true}
                                            value={this.props.currentValues.vatNumber}
                                            onChange={this.onChangeHandler}
                                            errors={this.props.errors}
                                        />
                                    </Col>
                                </Row>
                            </Spacing>
                        </Panel>
                    </Spacing>
                    <Button
                        type="submit"
                        primary={true}>
                        <Translate labelKey="SAVE" />
                    </Button>  
                </Form>
            </Col>
        );
    }
}

const mapStateToProps = state => {
    const { form } = state.MeAgency.toJS();
    return {
        constants: state.Constant.constants,
        currentValues: form.currentValues,
        errors: form.validateErrors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdate: (currentValues) => dispatch(meAgencyActions.update(currentValues)),
        onFieldChanged: (fieldName, newValue) => dispatch(meAgencyActions.meAgencyFieldChanged(fieldName, newValue)),
        onInvalidFormSubmitted: (errors) => dispatch(meAgencyActions.meAgencyInvalidFormSubmitted(errors)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Information);