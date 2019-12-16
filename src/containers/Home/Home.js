import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import queryString from 'query-string';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HomeImage from '../../components/Home/HomeImage';
import HomePanelFilter from '../../components/Home/HomePanelFilter';
import Main from '../../components/UI/Main/Main';
import FlexBar from '../../components/UI/FlexBar/FlexBar';
import Row from '../../components/UI/Row/Row';
import Col from '../../components/UI/Col/Col';
import PageContainer from '../../components/UI/PageContainer/PageContainer';
import InputForm from '../../components/UI/FormElement/InputForm/InputForm';
import SelectForm from '../../components/UI/FormElement/SelectForm/SelectForm';
import Option from '../../components/UI/Option/Option';
import Spacing from '../../components/UI/Spacing/Spacing';
import Button from '../../components/UI/Button/Button';
import Form from '../../components/UI/Form/Form';
import ShowAt from '../../components/UI/ShowAt/ShowAt';
import HideAt from '../../components/UI/HideAt/HideAt';
import AutocompleteForm from '../../components/UI/FormElement/AutocompleteForm/AutocompleteForm';

import polyglot from '../../languageProvider';
import { css, withStyles } from '../../config/withStyles';
import { searchActions } from '../../store/actions';
import { history } from '../../store/history';
import { validateForm } from '../../helpers/form.utility'

class Home extends Component {

    state = {
        city: "",
        cityFocused: false,
        contract: undefined,
        category: undefined,
        errors: [],
        maximum_price: 0,
        minimum_commercial_area: 0
    };

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

    onChangeHandler = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    onChangeCity = event => {
        this.props.onSearchTown(event.target.value);
        this.setState({ city: event.target.value });
    }

    onSelectCity = item => {
        this.setState({ city: item.name });
    }

    onFocusCity = () => {
        this.setState({ cityFocused: true });
    }

    onBlurCity = () => {
        this.setState({ cityFocused: false });
    }

    onCancelCity = event => {
        this.setState({ city: null });
    }

    validate = () => {
        var form = {
            formProperties: [
                { id: 'city', value: this.state.city, type: 'text', required: true }
            ]
        };
        return validateForm(form);
    }

    submitHandler = event => {
        event.preventDefault();
        console.log(this.state.city);
        var errors = this.validate();
        if (Object.keys(errors).length !== 0) {
            this.setState({ errors: errors });
        } else {
            let params = [];
            Object.keys(this.state).map((key) => {
                if(key !== "city") {
                    if(this.state[key] != null && this.state[key].length > 0) {
                        params[key] = this.state[key];
                    }
                }
            });
            history.push({
                pathname: '/listings/' + this.state.city,
                search: encodeURIComponent(queryString.stringify(params))
            });
        }
    }

    render() {
        return (
            <div>
                <Header
                    useTransparentBackground={true}
                    colorTheme="Light" />
                <Main>
                    <div {...css(this.props.styles.container)}>
                        <div {...css(this.props.styles.content)}>
                            <HomeImage />
                            <PageContainer>
                                <FlexBar>
                                    <HomePanelFilter
                                        medium={true}
                                        verticalSpacingBottom={false}
                                        verticalSpacingTop={false}
                                        headline="Cerca la tua nuova casa"
                                        subheadline="Ti aiuteremo a trovare case e appartamenti che più fanno per te.">
                                        <ShowAt breakpoint="largeAndAbove">
                                            <Form onSubmit={this.submitHandler}>
                                                <Row>
                                                    <Col md={12}>
                                                        <Spacing top={2}>
                                                            <AutocompleteForm
                                                                id="city"
                                                                name="city"
                                                                value={this.state.city}
                                                                onChange={this.onChangeCity}
                                                                defaultValue=""
                                                                results={this.props.cities.results}
                                                                onBlur={this.onBlurCity}
                                                                onFocus={this.onFocusCity}
                                                                onSelect={this.onSelectCity}
                                                                onCancel={this.onCancelCity}
                                                                isLoading={this.props.cities.isLoading}
                                                                label={polyglot.phrases["WHERE"]}
                                                                placeholder={polyglot.phrases["PLACE"]}
                                                                addClearInput={false}
                                                                inputRemoveMargins={true}
                                                                inputOverflowEllipsis={true}
                                                                hideLabel={false}
                                                                hideDropdownOnSubmit={false}
                                                                errors={this.props.errors}
                                                                invalid={this.state.errors["city"] !== undefined}
                                                                errorMessage={this.state.errors["city"]} />
                                                        </Spacing>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Spacing top={2}>
                                                            <SelectForm
                                                                id="contract"
                                                                name="contract"
                                                                value={this.state.contract}
                                                                onChange={this.onChangeHandler}
                                                                label={polyglot.phrases["CONTRACT"]}
                                                                placeholder={polyglot.phrases["SELECT_CONTRACT_LISTING"]}>
                                                                {this.contracts}
                                                            </SelectForm>
                                                        </Spacing>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Spacing top={2}>
                                                            <SelectForm
                                                                id="category"
                                                                name="category"
                                                                value={this.state.category}
                                                                onChange={this.onChangeHandler}
                                                                label={polyglot.phrases["CATEGORY"]}
                                                                placeholder={polyglot.phrases["SELECT_CATEGORY_LISTING"]}>
                                                                {this.categories}
                                                            </SelectForm>
                                                        </Spacing>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Spacing top={2}>
                                                            <InputForm
                                                                id="maximum_price"
                                                                name="maximum_price"
                                                                type="number"
                                                                value={this.state.maximum_price}
                                                                onChange={this.onChangeHandler}
                                                                suffix="€"
                                                                label={polyglot.phrases["PRICE"]} />
                                                        </Spacing>
                                                    </Col>
                                                    <Col md={6}>
                                                        <Spacing top={2}>
                                                            <InputForm
                                                                id="minimum_commercial_area"
                                                                name="minimum_commercial_area"
                                                                type="number"
                                                                value={this.state.minimum_commercial_area}
                                                                onChange={this.onChangeHandler}
                                                                suffix="m²"
                                                                label={polyglot.phrases["COMMERCIAL_AREA"]} />
                                                        </Spacing>
                                                    </Col>
                                                </Row>
                                                <Spacing top={2}>
                                                    <Button
                                                        primary={true}
                                                        block={true}
                                                        type="submit">
                                                        {polyglot.phrases["FIND"]}
                                                    </Button>
                                                </Spacing>
                                            </Form>
                                        </ShowAt>
                                    </HomePanelFilter>
                                </FlexBar>
                            </PageContainer>
                        </div>
                        <HideAt breakpoint="largeAndAbove">
                            <Spacing horizontal={2}>
                                <Form onSubmit={this.submitHandler}>
                                    <Row>
                                        <Col md={12}>
                                            <Spacing top={2}>
                                                <AutocompleteForm
                                                    id="city"
                                                    name="city"
                                                    value={this.state.city}
                                                    onChange={this.onChangeCity}
                                                    defaultValue=""
                                                    results={this.props.cities.results}
                                                    onBlur={this.onBlurCity}
                                                    onFocus={this.onFocusCity}
                                                    onSelect={this.onSelectCity}
                                                    onCancel={this.onCancelCity}
                                                    isLoading={this.props.cities.isLoading}
                                                    label={polyglot.phrases["WHERE"]}
                                                    placeholder={polyglot.phrases["PLACE"]}
                                                    addClearInput={false}
                                                    inputRemoveMargins={true}
                                                    inputOverflowEllipsis={true}
                                                    hideLabel={false}
                                                    hideDropdownOnSubmit={false}
                                                    invalid={this.state.errors["city"] !== undefined}
                                                    errorMessage={this.state.errors["city"]} />
                                            </Spacing>
                                        </Col>
                                        <Col md={6}>
                                            <Spacing top={2}>
                                                <SelectForm
                                                    id="contract"
                                                    name="contract"
                                                    value={this.state.contract}
                                                    onChange={this.onChangeHandler}
                                                    label={polyglot.phrases["CONTRACT"]}
                                                    placeholder={polyglot.phrases["SELECT_CONTRACT_LISTING"]}>
                                                    {this.contracts}
                                                </SelectForm>
                                            </Spacing>
                                        </Col>
                                        <Col md={6}>
                                            <Spacing top={2}>
                                                <SelectForm
                                                    id="category"
                                                    name="category"
                                                    value={this.state.category}
                                                    onChange={this.onChangeHandler}
                                                    label={polyglot.phrases["CATEGORY"]}
                                                    placeholder={polyglot.phrases["SELECT_CATEGORY_LISTING"]}>
                                                    {this.categories}
                                                </SelectForm>
                                            </Spacing>
                                        </Col>
                                        <Col md={6}>
                                            <Spacing top={2}>
                                                <InputForm
                                                    id="maximum_price"
                                                    name="maximum_price"
                                                    type="number"
                                                    value={this.state.maximum_price}
                                                    onChange={this.onChangeHandler}
                                                    suffix="€"
                                                    label={polyglot.phrases["MAXIMUM_PRICE"]} />
                                            </Spacing>
                                        </Col>
                                        <Col md={6}>
                                            <Spacing top={2}>
                                                <InputForm
                                                    id="minimum_commercial_area"
                                                    name="minimum_commercial_area"
                                                    type="number"
                                                    value={this.state.minimum_commercial_area}
                                                    onChange={this.onChangeHandler}
                                                    suffix="m²"
                                                    label={polyglot.phrases["MINIMUM_AREA"]} />
                                            </Spacing>
                                        </Col>
                                    </Row>
                                    <Spacing top={2}>
                                        <Button
                                            primary={true}
                                            block={true}
                                            type="submit">
                                            {polyglot.phrases["FIND"]}
                                        </Button>
                                    </Spacing>
                                </Form>
                            </Spacing>
                        </HideAt>
                    </div>
                </Main>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        constants: state.Constant.constants,
        cities: state.Search.toJS().cities
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFiltersChanged: (fieldName, newValue) => dispatch(searchActions.searchFiltersChanged(fieldName, newValue)),
        onSearchTown: (searchFilters) => dispatch(searchActions.searchCities(searchFilters))
    }
}

export default compose(
    withStyles(() => ({
        container: {
            position: "relative",
            width: "100%"
        },
        content: {
            width: "100%",
            bottom: 0,
            top: 0,
            position: "relative"
        }
    })),
    connect(mapStateToProps, mapDispatchToProps)
)(Home);