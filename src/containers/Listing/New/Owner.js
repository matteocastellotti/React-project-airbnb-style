import React from 'react';
import { connect } from 'react-redux';

import SelectForm from '../../../components/UI/FormElement/SelectForm/SelectForm';
import Button from '../../../components/UI/Button/Button';
import Spacing from '../../../components/UI/Spacing/Spacing';
import Option from '../../../components/UI/Option/Option';
import Form from '../../../components/UI/Form/Form';
import Title from '../../../components/UI/Title/Title';
import Translate from '../../../components/UI/Translate/Translate';
import BottomSheet from '../../../components/UI/BottomSheet/BottomSheet';
import PageContainer from '../../../components/UI/PageContainer/PageContainer';
import FlexBar from '../../../components/UI/FlexBar/FlexBar';
import Header from '../../Header/Header';
import Main from '../../../components/UI/Main/Main';

import polyglot from '../../../languageProvider';
import { validateForm } from '../../../helpers/form.utility'
import { meListingActions, stepListingActions } from "../../../store/actions";


class Owner extends React.Component {

    componentDidMount() {
        if (this.props.match.params.listing_id) {
            this.props.onGet(this.props.match.params.listing_id);
        } else {
            this.props.hydrate();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.isPrivate && this.props.agency.id !== nextProps.agency.id) {
            this.props.onFieldChanged('agency.id', nextProps.agency.id);
        }
        this.props.onFieldChanged('owner.id', nextProps.loggedUser.id);


        this.agencies = [];
        if (!nextProps.isPrivate && nextProps.agency) {
            this.agencies.push(
                <Option
                    key={nextProps.agency.id}
                    value={nextProps.agency.id}
                    label={nextProps.agency.businessName} />
            )
        }
        this.agencies.push(
            <Option
                key={''}
                value={''}
                label={polyglot.phrases["PRIVATE"]} />
        )

        this.owners = [];
        if (nextProps.loggedUser) {
            this.owners.push(
                <Option
                    key={nextProps.loggedUser.id}
                    value={nextProps.loggedUser.id}
                    label={nextProps.loggedUser.lastName + ' ' + nextProps.loggedUser.firstName} />
            );
        }
    }

    onChangeHandler = e => {
        const { name, value } = e.target;
        this.props.onFieldChanged(name, value);
    }

    validate = () => {
        var form = {
            formProperties: [
                { id: 'id', value: this.props.currentValues.owner.ownerId, type: 'string', required: true }
            ]
        };
        return validateForm(form);
    }

    submitHandler = event => {
        event.preventDefault();

        this.props.currentValues.owner.ownerId = this.props.currentValues.owner.id;
        this.props.currentValues.owner.agencyId = this.props.currentValues.agency.id;

        var errors = this.validate();
        if (Object.keys(errors).length !== 0) {
            this.props.onInvalidFormSubmitted('owner', errors);
        } else {
            const listing_id = this.props.match.params.listing_id;
            if (listing_id) {
                this.props.onUpdate(listing_id, this.props.currentValues.owner);
            } else {
                this.props.onInsert(this.props.currentValues);
            }
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
                                <Translate labelKey="START_CREATE_LISTING" params={{firstName: this.props.loggedUser.firstName}} />
                            </Title>
                            <Form onSubmit={this.submitHandler}>
                                <Spacing vertical={4}>
                                    <SelectForm
                                        id="agency"
                                        name="agency.id"
                                        large={true}
                                        label={polyglot.phrases["HOW_PUBLISH_LISTING"]}
                                        value={this.props.currentValues.agency.id}
                                        onChange={this.onChangeHandler}
                                        invalid={this.props.errors["agency"]["id"] !== ""}
                                        errorMessage={this.props.errors["agency"]["id"]}>
                                        {this.agencies}
                                    </SelectForm>
                                </Spacing>
                                <Spacing vertical={4}>
                                    <SelectForm
                                        id="owner"
                                        name="owner.id"
                                        large={true}
                                        label={polyglot.phrases["WHO_MANAGE_LISTING"]}
                                        value={this.props.currentValues.owner.id}
                                        onChange={this.onChangeHandler}
                                        invalid={this.props.errors["owner"]["id"] !== ""}
                                        errorMessage={this.props.errors["owner"]["id"]}>
                                        {this.owners}
                                    </SelectForm>
                                </Spacing>
                                <BottomSheet>
                                    <Spacing vertical={2}>
                                        <PageContainer>
                                            <FlexBar
                                                before={
                                                    <Button
                                                        primary={true}
                                                        href={'/new-listing/' + this.props.currentValues.id}>
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
        );
    }
}

const mapStateToProps = state => {
    const { isPrivate, loggedUser, agency } = state.Header.toJS();
    const { form, errorMessage } = state.MeListing.toJS();
    return {
        isPrivate: isPrivate,
        loggedUser: loggedUser,
        agency: agency,
        currentValues: form.currentValues,
        errors: form.validateErrors,
        errorMessage: errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hydrate: () => dispatch(meListingActions.hydrate()),
        onGet: (listing_id) => dispatch(meListingActions.get(listing_id)),
        onFieldChanged: (fieldName, newValue) => dispatch(meListingActions.meListingFieldChanged(fieldName, newValue)),
        onInvalidFormSubmitted: (entity, errors) => dispatch(meListingActions.meListingInvalidFormSubmitted(entity, errors)),
        onInsert: (listing) => dispatch(stepListingActions.insert(listing)),
        onUpdate: (listing_id, listing) => dispatch(stepListingActions.updateOwner(listing_id, listing)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Owner);