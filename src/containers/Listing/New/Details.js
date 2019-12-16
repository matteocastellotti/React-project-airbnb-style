import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageContainer from '../../../components/UI/PageContainer/PageContainer';
import Button from '../../../components/UI/Button/Button';
import Title from '../../../components/UI/Title/Title';
import Form from '../../../components/UI/Form/Form';
import SelectForm from '../../../components/UI/FormElement/SelectForm/SelectForm';
import InputForm from '../../../components/UI/FormElement/InputForm/InputForm';
import Spacing from '../../../components/UI/Spacing/Spacing';
import Option from '../../../components/UI/Option/Option';
import Translate from '../../../components/UI/Translate/Translate';
import FlexBar from '../../../components/UI/FlexBar/FlexBar';
import BottomSheet from '../../../components/UI/BottomSheet/BottomSheet';
import CounterForm from '../../../components/UI/FormElement/CounterForm/CounterForm';
import Header from '../../Header/Header';
import Main from '../../../components/UI/Main/Main';

import polyglot from '../../../languageProvider';
import { validateForm } from '../../../helpers/form.utility'
import { meListingActions, stepListingActions } from "../../../store/actions";

class Details extends Component {

    componentDidMount() {
        this.props.onGet(this.props.match.params.listing_id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.constants) {
            this.furnitures = nextProps.constants["FurnitureType"].map(value => {
                return (
                    <Option
                        key={value.id}
                        value={value.label}
                        label={polyglot.phrases[value.label]} />
                )
            });

            this.floors = nextProps.constants["ListingFloor"].map(value => {
                return (
                    <Option
                        key={value.id}
                        value={value.label}
                        label={polyglot.phrases[value.label]} />
                )
            });

            this.garages = nextProps.constants["GarageType"].map(value => {
                return (
                    <Option
                        key={value.id}
                        value={value.label}
                        label={polyglot.phrases[value.label]} />
                )
            });

            this.gardens = nextProps.constants["GardenType"].map(value => {
                return (
                    <Option
                        key={value.id}
                        value={value.label}
                        label={polyglot.phrases[value.label]} />
                )
            });

            this.energeticClasses = nextProps.constants["EnergeticClass"].map(value => {
                return (
                    <Option
                        key={value.id}
                        value={value.label}
                        label={polyglot.phrases[value.label]} />
                )
            });

            this.kitchenFurnisheds = nextProps.constants["KitchenFurnished"].map(value => {
                return (
                    <Option
                        key={value.id}
                        value={value.label}
                        label={polyglot.phrases[value.label]} />
                )
            });

            this.heatings = nextProps.constants["HeatingType"].map(value => {
                return (
                    <Option
                        key={value.id}
                        value={value.label}
                        label={polyglot.phrases[value.label]} />
                )
            });
        
            this.airConditioners = nextProps.constants["AirConditionerType"].map(value => {
                return (
                    <Option
                        key={value.id}
                        value={value.label}
                        label={polyglot.phrases[value.label]} />
                )
            });
        }
    }

    changeHandler = event => {
        const { name, value } = event.target;
        this.props.onFieldChanged(name, value);
    }

    validate = () => {
        const { details } = this.props.currentValues;
        var form = {
            formProperties: [
                { id: 'walkableArea', value : details.walkableArea, type: 'number', required: true },
                { id: 'bathroom', value : details.bathroom, type: 'number', required: true },
                { id: 'bedroom', value : details.bedroom, type: 'number', required: true },
                { id: 'local', value : details.local, type: 'number', required: true },
                { id: 'furnished', value : details.furnished, type: 'string', required: true }
            ]
        };
        return validateForm(form);
    }

    submitHandler = event => {
        event.preventDefault();
        var errors = this.validate();
        if(Object.keys(errors).length !== 0) {
            this.props.onInvalidFormSubmitted('details', errors);
        } else {
            this.props.onUpdate(this.props.match.params.listing_id, this.props.currentValues.details);
        }
    }

    onIncrement = (name, value) => {
        value++;
        let event = {
            target: {}
        };
        event.target["name"] = name;
        event.target["value"] = value;
        this.changeHandler(event);
    }

    onDecrement = (name, value) => {
        value--;
        let event = {
            target: {}
        };
        event.target["name"] = name;
        event.target["value"] = value;
        this.changeHandler(event);
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
                                <Translate labelKey="WHAT_DETAILS_HAVE" />
                            </Title>
                            <Form onSubmit={this.submitHandler}>
                                <Spacing vertical={4}>                        
                                    <CounterForm
                                        id="local"
                                        name="details.local"
                                        inline={true}
                                        disableDecrement={this.props.currentValues.details.local === 0}
                                        label={polyglot.phrases["HOW_MANY_LOCALS_HAVE"]}
                                        value={this.props.currentValues.details.local}
                                        onDecrement={(name, value) => this.onDecrement("details.local", this.props.currentValues.details.local)}
                                        onIncrement={(name, value) => this.onIncrement("details.local", this.props.currentValues.details.local)}
                                        invalid={this.props.errors["details"]["local"]}
                                        errorMessage={this.props.errors["details"]["local"]} />
                                </Spacing>
                                <Spacing vertical={4}>     
                                    <CounterForm
                                        id="bedroom"
                                        name="details.bedroom"
                                        inline={true}
                                        disableDecrement={this.props.currentValues.details.bedroom === 0}
                                        label={polyglot.phrases["HOW_MANY_BEDROOMS"]}
                                        value={this.props.currentValues.details.bedroom}
                                        onDecrement={(name, value) => this.onDecrement("details.bedroom", this.props.currentValues.details.bedroom)}
                                        onIncrement={(name, value) => this.onIncrement("details.bedroom", this.props.currentValues.details.bedroom)}
                                        invalid={this.props.errors["details"]["bedroom"]}
                                        errorMessage={this.props.errors["details"]["bedroom"]} />
                                </Spacing>
                                <Spacing vertical={4}>     
                                    <CounterForm
                                        id="bathroom"
                                        name="details.bathroom"
                                        inline={true}
                                        disableDecrement={this.props.currentValues.details.bathroom === 0}
                                        label={polyglot.phrases["HOW_MANY_BATHROOMS"]}
                                        value={this.props.currentValues.details.bathroom}
                                        onDecrement={(name, value) => this.onDecrement("details.bathroom", this.props.currentValues.details.bathroom)}
                                        onIncrement={(name, value) => this.onIncrement("details.bathroom", this.props.currentValues.details.bathroom)}
                                        invalid={this.props.errors["details"]["bathroom"]}
                                        errorMessage={this.props.errors["details"]["bathroom"]} />
                                </Spacing>
                                <Spacing vertical={4}>
                                    <SelectForm
                                        id="furnished"
                                        name="details.furnished"
                                        value={this.props.currentValues.details.furnished}
                                        onChange={this.changeHandler}
                                        large={true}
                                        label={polyglot.phrases["IS_FURNISHED"]}
                                        placeholder={polyglot.phrases["SELECT_FURNITURE"]}
                                        invalid={this.props.errors["details"]["furnished"]}
                                        errorMessage={this.props.errors["details"]["furnished"]}>
                                        {this.furnitures}
                                    </SelectForm>
                                </Spacing>    
                                <Spacing vertical={4}>                         
                                    <SelectForm
                                        id="floor"
                                        name="details.floor"
                                        value={this.props.currentValues.details.floor}
                                        onChange={this.changeHandler}
                                        large={true}
                                        label={polyglot.phrases["AT_WHAT_LEVEL_IT_IS"]}
                                        placeholder={polyglot.phrases["SELECT_FLOOR"]}
                                        invalid={this.props.errors["details"]["floor"]}
                                        errorMessage={this.props.errors["details"]["floor"]}>
                                        {this.floors}
                                    </SelectForm>
                                </Spacing>
                                <Spacing vertical={4}>
                                    <SelectForm
                                        id="garage"
                                        name="details.garage"
                                        value={this.props.currentValues.details.garage}
                                        onChange={this.changeHandler}
                                        large={true}
                                        label={polyglot.phrases["IS_THERE_A_GARAGE"]}
                                        placeholder={polyglot.phrases["SELECT_GARAGE"]}
                                        invalid={this.props.errors["details"]["garage"]}
                                        errorMessage={this.props.errors["details"]["garage"]}>
                                        {this.garages}
                                    </SelectForm>
                                </Spacing>
                                <Spacing vertical={4}>
                                    <SelectForm
                                        id="garden"
                                        name="details.garden"
                                        value={this.props.currentValues.details.garden}
                                        onChange={this.changeHandler}
                                        large={true}
                                        label={polyglot.phrases["IS_THERE_A_GARDEN"]}
                                        placeholder={polyglot.phrases["SELECT_GARDEN"]}
                                        invalid={this.props.errors["details"]["garden"]}
                                        errorMessage={this.props.errors["details"]["garden"]}>
                                        {this.gardens}
                                    </SelectForm>
                                </Spacing>
                                <Spacing vertical={4}>
                                    <SelectForm
                                        id="energeticClass"
                                        name="details.energeticClass"
                                        value={this.props.currentValues.details.energeticClass}
                                        onChange={this.changeHandler}
                                        large={true}
                                        label={polyglot.phrases["WHAT_IS_THE_ENERGY_CLASS"]}
                                        placeholder={polyglot.phrases["SELECT_ENERGY_CLASS"]}
                                        invalid={this.props.errors["details"]["energeticClass"]}
                                        errorMessage={this.props.errors["details"]["energeticClass"]}>
                                        {this.energeticClasses}
                                    </SelectForm>
                                </Spacing>        
                                <Spacing vertical={4}>
                                    <SelectForm
                                        id="kitchen"
                                        name="details.kitchen"
                                        value={this.props.currentValues.details.kitchen}
                                        onChange={this.changeHandler}
                                        large={true}
                                        label={polyglot.phrases["HOW_IT_IS_THE_KITCHEN"]}
                                        placeholder={polyglot.phrases["SELECT_KITCHEN"]}
                                        invalid={this.props.errors["details"]["kitchen"]}
                                        errorMessage={this.props.errors["details"]["kitchen"]}>
                                        {this.kitchenFurnisheds}
                                    </SelectForm>
                                </Spacing>
                                <Spacing vertical={4}>
                                    <SelectForm
                                        id="heatingType"
                                        name="details.heatingType"
                                        value={this.props.currentValues.details.heatingType}
                                        list={this.props.heatingTypeArray}
                                        onChange={this.changeHandler}
                                        large={true}
                                        label={polyglot.phrases["IS_THERE_HEATING"]}
                                        placeholder={polyglot.phrases["SELECT_HEATING"]}
                                        invalid={this.props.errors["details"]["heatingType"]}
                                        errorMessage={this.props.errors["details"]["heatingType"]}>
                                        {this.heatings}
                                    </SelectForm>
                                </Spacing>
                                <Spacing vertical={4}>
                                    <SelectForm
                                        id="airConditionerType"
                                        name="details.airConditionerType"
                                        value={this.props.currentValues.details.airConditionerType}
                                        onChange={this.changeHandler}
                                        large={true}
                                        label={polyglot.phrases["IS_THERE_AIR_CONDITIONER"]}
                                        placeholder={polyglot.phrases["SELECT_AIR_CONDITIONER"]}
                                        invalid={this.props.errors["details"]["airConditionerType"]}
                                        errorMessage={this.props.errors["details"]["airConditionerType"]}>
                                        {this.airConditioners}
                                    </SelectForm>
                                </Spacing>
                                <Spacing vertical={4}>
                                    <InputForm
                                        id="walkableArea"
                                        name="details.walkableArea"
                                        type="number"
                                        value={this.props.currentValues.details.walkableArea}
                                        onChange={this.changeHandler}
                                        large={true}
                                        suffix="m²"
                                        label={polyglot.phrases["WHAT_IS_WALKABLE_AREA"]}
                                        placeholder={polyglot.phrases["WALKABLE_AREA"]}
                                        invalid={this.props.errors["details"]["walkableArea"]}
                                        errorMessage={this.props.errors["details"]["walkableArea"]} />                            
                                </Spacing>
                                <Spacing vertical={4}>
                                    <InputForm
                                        id="commercialArea"
                                        name="details.commercialArea"
                                        type="number"
                                        value={this.props.currentValues.details.commercialArea}
                                        onChange={this.changeHandler}
                                        suffix="m²"
                                        large={true}
                                        label={polyglot.phrases["WHAT_IS_COMMERCIAL_AREA"]}
                                        placeholder={polyglot.phrases["COMMERCIAL_AREA"]}
                                        invalid={this.props.errors["details"]["commercialArea"]}
                                        errorMessage={this.props.errors["details"]["commercialArea"]} />   
                                </Spacing>
                                <BottomSheet>
                                    <Spacing vertical={2}>
                                        <PageContainer>
                                            <FlexBar
                                                before={
                                                    <Button
                                                        primary={true}
                                                        href={'/new-listing/' + this.props.currentValues.id + '/place'}>
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
        constants: state.Constant.constants,
        currentValues: form.currentValues,
        errors: form.validateErrors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGet: (listing_id) => dispatch(meListingActions.get(listing_id)),
        onUpdate: (listing_id, listing) => dispatch(stepListingActions.updateDetails(listing_id, listing)),
        onFieldChanged: (fieldName, newValue) => dispatch(meListingActions.meListingFieldChanged(fieldName, newValue)),
        onInvalidFormSubmitted: (entity, errors) => dispatch(meListingActions.meListingInvalidFormSubmitted(entity, errors))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);