import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spacing from '../../../components/UI/Spacing/Spacing';
import Row from '../../../components/UI/Row/Row';
import Col from '../../../components/UI/Col/Col';
import Panel from '../../../components/UI/Panel/Panel';
import Button from '../../../components/UI/Button/Button';
import InputForm from '../../../components/UI/FormElement/InputForm/InputForm';
import SelectForm from '../../../components/UI/FormElement/SelectForm/SelectForm';
import Option from '../../../components/UI/Option/Option';
import Translate from '../../../components/UI/Translate/Translate';
import Text from '../../../components/UI/Text/Text';

import polyglot from '../../../languageProvider';
import { validateForm } from '../../../helpers/form.utility'
import { meAgencyActions } from '../../../store/actions';

class Contacts extends Component {

    componentWillReceiveProps(nextProps) {
        if(nextProps.constants !== null) {
            this.countryDialCodes = nextProps.constants["CountryDialCode"].map(value => {
                return (
                    <Option
                        key={value.label}
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
                    <Spacing bottom={4}>
                        <Panel title={polyglot.phrases["CONTACT_INFORMATIONS"]}>
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
                                            errors={this.props.errors} />
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
                                        <SelectForm
                                            id="phoneNumberDialCode"
                                            name="phoneNumberDialCode"
                                            hasExternalLabel={true}
                                            small={true}
                                            value={this.props.currentValues.phoneNumberDialCode}
                                            onChange={this.onChangeHandler}
                                            errors={this.props.errors}>
                                            {this.countryDialCodes}
                                        </SelectForm>
                                        <InputForm
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            hasExternalLabel={true}
                                            small={true}
                                            prefix={
                                                <Text
                                                    small={true}
                                                    disabled={true}>
                                                    {!!this.props.constants ? this.props.constants["CountryDialCode"][this.props.currentValues.phoneNumberDialCode] : null}
                                                </Text>
                                            }
                                            value={this.props.currentValues.phoneNumber}
                                            errors={this.props.errors} />
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
                                            errors={this.props.errors} />
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
                                        <SelectForm
                                            id="mobilePhoneNumberDialCode"
                                            name="mobilePhoneNumberDialCode"
                                            hasExternalLabel={true}
                                            small={true}
                                            value={this.props.currentValues.phoneNumberDialCode}
                                            onChange={this.onChangeHandler}
                                            errors={this.props.errors}>
                                            {this.countryDialCodes}
                                        </SelectForm>  
                                        <InputForm
                                            id="mobilePhoneNumber"
                                            name="mobilePhoneNumber"
                                            hasExternalLabel={true}
                                            small={true}
                                            prefix= {
                                                <Text
                                                    hasExternalLabel={true}
                                                    small={true}
                                                    disabled={true}>
                                                    {!!this.countryDialCodes ? this.countryDialCodes[this.props.currentValues.mobilePhoneNumberDialCode] : null}
                                                </Text>
                                            }
                                            value={this.props.currentValues.mobilePhoneNumber}
                                            onChange={this.onChangeHandler}
                                            errors={this.props.errors}
                                        />
                                    </Col>
                                </Row>
                            </Spacing>
                            <Spacing bottom={2}>
                                <Row condensed={true}>
                                    <Col sm={3}>
                                        <label className="text-right" htmlFor="country">
                                            <Translate labelKey="COUNTRY" />
                                        </label>
                                    </Col>
                                    <Col sm={9}>
                                        <InputForm
                                            id="country"
                                            name="country"
                                            hasExternalLabel={true}
                                            small={true}
                                            value={this.props.currentValues.country}
                                            onChange={this.onChangeHandler}
                                            errors={this.props.errors} />
                                    </Col>
                                </Row>
                            </Spacing>
                            <Spacing bottom={2}>
                                <Row condensed={true}>
                                    <Col sm={3}>
                                        <label className="text-right" htmlFor="state">
                                            <Translate labelKey="STATE" />
                                        </label>
                                    </Col>
                                    <Col sm={9}>
                                        <InputForm
                                            id="state"
                                            name="state"
                                            hasExternalLabel={true}
                                            small={true}
                                            value={this.props.currentValues.state}
                                            onChange={this.onChangeHandler}
                                            errors={this.props.errors} />
                                    </Col>
                                </Row>
                            </Spacing>
                            <Spacing bottom={2}>
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
                                            errors={this.props.errors} />
                                    </Col>
                                </Row>
                            </Spacing>
                            <Spacing bottom={2}>
                                <Row condensed={true}>
                                    <Col sm={3}>
                                        <label className="text-right" htmlFor="street">
                                            <Translate labelKey="STREET" />
                                        </label>
                                    </Col>
                                    <Col sm={9}>
                                        <InputForm
                                            id="street"
                                            name="street"
                                            hasExternalLabel={true}
                                            small={true}
                                            value={this.props.currentValues.street}
                                            onChange={this.onChangeHandler}
                                            errors={this.props.errors} />
                                    </Col>
                                </Row>
                            </Spacing>
                            <Spacing bottom={2}>
                                <Row condensed={true}>
                                    <Col sm={3}>
                                        <label className="text-right" htmlFor="zipCode">
                                            <Translate labelKey="ZIP_CODE" />
                                        </label>
                                    </Col>
                                    <Col sm={9}>
                                        <InputForm
                                            id="zipCode"
                                            name="zipCode"
                                            hasExternalLabel={true}
                                            small={true}
                                            value={this.props.currentValues.zipCode}
                                            onChange={this.onChangeHandler} />
                                    </Col>
                                </Row>
                            </Spacing>
                            <Row condensed={true}>
                                <Col sm={3}>
                                    <label className="text-right" htmlFor="city">
                                        <Translate labelKey="WEB_SITE" />
                                    </label>
                                </Col>
                                <Col sm={9}>
                                    <InputForm
                                        id="webSite"
                                        name="webSite"
                                        type="url"
                                        hasExternalLabel={true}
                                        small={true}
                                        value={this.props.currentValues.webSite}
                                        onChange={this.onChangeHandler}
                                        errors={this.props.errors} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);