import React from 'react';
import { connect } from 'react-redux';

import Form from '../../../components/UI/Form/Form';
import Title from '../../../components/UI/Title/Title';
import PageContainer from '../../../components/UI/PageContainer/PageContainer';
import Button from '../../../components/UI/Button/Button';
import SelectForm from '../../../components/UI/FormElement/SelectForm/SelectForm';
import BottomSheet from '../../../components/UI/BottomSheet/BottomSheet';
import FlexBar from '../../../components/UI/FlexBar/FlexBar';
import Spacing from '../../../components/UI/Spacing/Spacing';
import Option from '../../../components/UI/Option/Option';
import Translate from '../../../components/UI/Translate/Translate';
import Header from '../../Header/Header';
import Main from '../../../components/UI/Main/Main';

import polyglot from '../../../languageProvider';
import { validateForm } from '../../../helpers/form.utility'
import { meListingActions, stepListingActions } from "../../../store/actions";

class Type extends React.Component {

    componentDidMount() {
        if (this.props.match.params.listing_id) {
            this.props.onGet(this.props.match.params.listing_id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.constants) {
            this.categories = nextProps.constants["ListingCategory"].map(value => {
                return (
                    <Option
                        key={value.id}
                        value={value.label}
                        label={polyglot.phrases[value.label]} />
                )
            });

            this.contracts = nextProps.constants["Contract"].map(value => {
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
        const { type } = this.props.currentValues;
        var form = {
            formProperties: [
                { id: 'category', value : type.category, type: 'string', required: true },
                { id: 'contract', value : type.contract, type: 'string', required: true }
            ]
        };
        return validateForm(form);
    }

    submitHandler = event => {
        event.preventDefault();
        var errors = this.validate();
        if (Object.keys(errors).length !== 0) {
            this.props.onInvalidFormSubmitted("type", errors);
        } else {
            this.props.onUpdate(this.props.match.params.listing_id, this.props.currentValues.type);
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
                                <Translate labelKey="START_CREATE_LISTING" />
                            </Title>
                            <Form onSubmit={this.submitHandler}>
                                <Spacing vertical={4}>
                                    <SelectForm
                                        id="category"
                                        name="type.category"
                                        value={this.props.currentValues.type.category}
                                        onChange={this.changeHandler}
                                        large={true}
                                        label={polyglot.phrases["WHAT_CATEGORY_LISTING"]}
                                        placeholder={polyglot.phrases["SELECT_CATEGORY_LISTING"]}
                                        invalid={this.props.errors["type"]["category"]}
                                        errorMessage={this.props.errors["type"]["category"]}>
                                        {this.categories}
                                    </SelectForm>
                                </Spacing>
                                <Spacing vertical={4}>          
                                    <SelectForm
                                        id="typology"
                                        name="type.tipology"
                                        value={this.props.currentValues.type.tipology}
                                        onChange={this.changeHandler}
                                        large={true}
                                        label={polyglot.phrases["WHAT_TIPOLOGY_LISTING"]}
                                        placeholder={polyglot.phrases["SELECT_TIPOLOGY_LISTING"]}
                                        invalid={this.props.errors["type"]["typology"]}
                                        errorMessage={this.props.errors["type"]["typology"]}>
                                        {this.typologies}
                                    </SelectForm>
                                </Spacing>
                                <Spacing vertical={4}>          
                                    <SelectForm
                                        id="propertyType"
                                        name="type.propertyType"
                                        value={this.props.currentValues.type.propertyType}
                                        onChange={this.changeHandler}
                                        large={true}
                                        label={polyglot.phrases["WHAT_PROPERTY_TYPE"]}
                                        placeholder={polyglot.phrases["SELECT_PROPERTY_TYPE_LISTING"]}
                                        invalid={this.props.errors["type"]["propertyType"]}
                                        errorMessage={this.props.errors["type"]["propertyType"]}>
                                        {this.propertyTypes}
                                    </SelectForm>
                                </Spacing>
                                <Spacing vertical={4}>     
                                    <SelectForm
                                        id="contract"
                                        name="type.contract"
                                        value={this.props.currentValues.type.contract}
                                        onChange={this.changeHandler}
                                        large={true}
                                        label={polyglot.phrases["WHAT_CONTRACT_TYPE"]}
                                        placeholder={polyglot.phrases["SELECT_CONTRACT_LISTING"]}
                                        invalid={this.props.errors["type"]["contract"]}
                                        errorMessage={this.props.errors["type"]["contract"]}>
                                        {this.contracts}
                                    </SelectForm>
                                </Spacing>
                                <BottomSheet>
                                    <Spacing vertical={2}>
                                        <PageContainer>
                                            <FlexBar
                                                before={
                                                    <Button
                                                        primary={true}
                                                        href={'/new-listing/' + this.props.currentValues.id + '/owner'}>
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
        onUpdate: (listing_id, listing) => dispatch(stepListingActions.updateType(listing_id, listing)),
        onFieldChanged: (fieldName, newValue) => dispatch(meListingActions.meListingFieldChanged(fieldName, newValue)),
        onInvalidFormSubmitted: (entity, errors) => dispatch(meListingActions.meListingInvalidFormSubmitted(entity, errors))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Type);