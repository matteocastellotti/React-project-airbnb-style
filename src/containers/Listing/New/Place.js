import React, { Component } from 'react';
import { connect } from 'react-redux';

import FlexBar from '../../../components/UI/FlexBar/FlexBar';
import BottomSheet from '../../../components/UI/BottomSheet/BottomSheet';
import Button from '../../../components/UI/Button/Button';
import SelectForm from '../../../components/UI/FormElement/SelectForm/SelectForm';
import InputForm from '../../../components/UI/FormElement/InputForm/InputForm';
import Option from '../../../components/UI/Option/Option';
import Spacing from '../../../components/UI/Spacing/Spacing';
import Title from '../../../components/UI/Title/Title';
import Form from '../../../components/UI/Form/Form';
import Translate from '../../../components/UI/Translate/Translate';
import PageContainer from '../../../components/UI/PageContainer/PageContainer';
import Header from '../../Header/Header';
import Main from '../../../components/UI/Main/Main';

import polyglot from '../../../languageProvider';
import { validateForm } from '../../../helpers/form.utility'
import { countryActions, meListingActions, stepListingActions } from "../../../store/actions";

class Place extends Component {

    componentDidMount() {
        this.props.onSearchCountries();
        this.props.onGet(this.props.match.params.listing_id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.countries) {
            this.countries = nextProps.countries.map(value => {
                return (
                    <Option
                        key={value.code}
                        value={value.code}
                        label={value.name} />
                )
            })
        }
    }

    changeHandler = event => {
        const { name, value } = event.target;
        this.props.onFieldChanged(name, value);
    }

    validate = () => {
        const { place } = this.props.currentValues;
        var form = {
            formProperties: [
                { id: 'country', value : place.country, type: 'string', required: true },
                { id: 'city', value : place.city, type: 'string', required: true }
            ]
        };
        return validateForm(form);
    }

    submitHandler = event => {
        event.preventDefault();
        var errors = this.validate();
        if(Object.keys(errors).length !== 0) {
            this.props.onInvalidFormSubmitted('place', errors);
        } else {
            this.props.onUpdate(this.props.match.params.listing_id, this.props.currentValues.place);
        }
    }
    
    render() {
        return (
            <div>
                <Header
                    sticky={true} />
                <Main
                    stickyHeader={true}>
                    <PageContainer>
                        <Spacing top={4} bottom={10}>
                            <Title size={3}>
                                <Translate labelKey="WHERE_IS_IT" />
                            </Title>
                            <Form onSubmit={this.submitHandler}>
                                <Spacing vertical={4}>
                                    <SelectForm
                                        id="country"
                                        name="place.country"
                                        value={this.props.currentValues.place.country}
                                        onChange={this.changeHandler}
                                        large={true}
                                        label={polyglot.phrases["COUNTRY"]}
                                        placeholder={polyglot.phrases["COUNTRY"]}
                                        invalid={this.props.errors["place"]["country"]}
                                        errorMessage={this.props.errors["place"]["country"]}>
                                        {this.countries}
                                    </SelectForm>
                                </Spacing>
                                <Spacing vertical={4}>
                                    <InputForm
                                        id="street"
                                        name="place.street"
                                        value={this.props.currentValues.place.street}
                                        large={true}
                                        onChange={this.changeHandler}
                                        label={polyglot.phrases["STREET"]}
                                        placeholder={polyglot.phrases["STREET"]}
                                        invalid={this.props.errors["place"]["street"]}
                                        errorMessage={this.props.errors["place"]["street"]} />
                                </Spacing>
                                <Spacing vertical={4}>
                                    <InputForm
                                        id="city"
                                        name="place.city"
                                        value={this.props.currentValues.place.city}
                                        onChange={this.changeHandler}
                                        large={true}
                                        label={polyglot.phrases["CITY"]}
                                        placeholder={polyglot.phrases["CITY"]}
                                        invalid={this.props.errors["place"]["city"]}
                                        errorMessage={this.props.errors["place"]["city"]} />
                                </Spacing>
                                <Spacing vertical={4}>
                                    <InputForm
                                        id="state"
                                        name="place.state"
                                        value={this.props.currentValues.place.state}
                                        onChange={this.changeHandler}
                                        large={true}
                                        label={polyglot.phrases["STATE"]}
                                        placeholder={polyglot.phrases["STATE"]}
                                        invalid={this.props.errors["place"]["state"]}
                                        errorMessage={this.props.errors["place"]["state"]} />
                                </Spacing>
                                <Spacing vertical={4}>
                                    <InputForm
                                        id="zipCode"
                                        name="place.zipCode"
                                        value={this.props.currentValues.place.zipCode}
                                        onChange={this.changeHandler}
                                        large={true}
                                        label={polyglot.phrases["ZIP_CODE"]}
                                        placeholder={polyglot.phrases["ZIP_CODE"]}
                                        invalid={this.props.errors["place"]["zipCode"]}
                                        errorMessage={this.props.errors["place"]["zipCode"]} />
                                </Spacing>
                                <BottomSheet>
                                    <Spacing vertical={2}>
                                        <PageContainer>
                                            <FlexBar
                                                before={
                                                    <Button
                                                        primary={true}
                                                        href={'/new-listing/' + this.props.currentValues.id + '/type'}>
                                                        <Translate labelKey="BACK" />
                                                    </Button>
                                                }
                                                after={
                                                    <Button
                                                        type="submit"
                                                        primary={true}>
                                                        <Translate labelKey="CONTINUE" />
                                                    </Button>
                                                } />
                                        </PageContainer>
                                    </Spacing>
                                </BottomSheet>
                            </Form>
                        </Spacing>
                    </PageContainer>
                </Main>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { form } = state.MeListing.toJS();
    return {
        countries: state.Country.toJS().countries,
        currentValues: form.currentValues,
        errors: form.validateErrors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchCountries: () => dispatch(countryActions.search()),
        onGet: (listing_id) => dispatch(meListingActions.get(listing_id)),
        onUpdate: (listing_id, listing) => dispatch(stepListingActions.updatePlace(listing_id, listing)),
        onFieldChanged: (fieldName, newValue) => dispatch(meListingActions.meListingFieldChanged(fieldName, newValue)),
        onInvalidFormSubmitted: (entity, errors) => dispatch(meListingActions.meListingInvalidFormSubmitted(entity, errors))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Place);