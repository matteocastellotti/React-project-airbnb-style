import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Header from '../../Header/Header';
import Main from '../../../components/UI/Main/Main';
import Spacing from '../../../components/UI/Spacing/Spacing';
import PageContainer from '../../../components/UI/PageContainer/PageContainer';
import ListingCardList from '../../../components/UI/ListingCard/ListingCardList';
import ListingCard from '../../../components/UI/ListingCard/ListingCard';
import MenuBar from '../../../components/UI/MenuBar/MenuBar';
import SelectForm from '../../../components/UI/FormElement/SelectForm/SelectForm';
import InputForm from '../../../components/UI/FormElement/InputForm/InputForm';
import Option from '../../../components/UI/Option/Option';
import Col from '../../../components/UI/Col/Col';
import RangeForm from '../../../components/UI/FormElement/RangeForm/RangeForm';
import Bounce from '../../../components/UI/Loader/Bounce';

import polyglot from '../../../languageProvider';
import { searchActions } from '../../../store/actions';
import { withFilters } from '../../../hoc/withFilters/withFilters';
import Footer from '../../Footer/Footer';

class Search extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        Object.keys(this.props.searchFilters.filters).map(key => {
            this.props.onFiltersChanged(key, this.props.searchFilters.filters[key]);
        })   
        this.props.onSearchListings(this.props.searchFilters);
    }

    handleChange(event) {
        this.props.onFiltersChanged(event.target.id, event.target.value);
    }

    handleChangeCity = event => {
        this.props.onSearchTown(event.target.value);
        this.setState({ city: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.updateFilters(this.props.filters);
    }

    bau(filter, index) {
        let content = null;
        switch(filter.type) {
            case "select":
                let options = filter.params[0].options.map((option, index) => {
                    return (
                        <Option
                            key={index}
                            value={option.value}
                            label={polyglot.phrases[option.label]} />
                    );
                });
                content = (
                    <SelectForm
                        key={index}
                        id={filter.params[0].id}
                        name={filter.params[0].name}
                        value={filter.params[0].value}
                        placeholder={polyglot.phrases[filter.title]}
                        onChange={this.handleChange}
                        small={true}>
                        {options}
                    </SelectForm>
                );
                break;
            
            case "number":
                content = (
                    <InputForm
                        key={index}
                        id={filter.id}
                        name={filter.name}
                        type="number"
                        value={filter.value}
                        onChange={this.handleChange}
                        placeholder={polyglot.phrases[filter.title]} />
                )
                break;

            case "range":
                content = (
                    <RangeForm
                        key={index}
                        fromId={filter.params[0].id}
                        fromName={filter.params[0].name}
                        fromValue={filter.params[0].value}
                        toId={filter.params[1].id}
                        toName={filter.params[1].name}
                        toValue={filter.params[1].value}
                        suffix={filter.suffix}
                        onChange={this.handleChange}
                        placeholder={polyglot.phrases[filter.title]}
                        small={true} />
                )
                break;

            default:
                content = null;
                break;
        }
        return content;
    }

    render() {
        let listings = null;
        if (this.props.listings.results) {
            listings = this.props.listings.results.map((value, key) => {
                return (
                    <ListingCard
                        key={key}
                        listingId={value.id}
                        href={'/listings/' + value.id}
                        title={value.summary.name}
                        src="https://a0.muscache.com/im/pictures/1c77568c-ea1e-46a1-b285-749c2196746c.jpg?aki_policy=large" />  
                )
            })
        }

        return (
            <div>
                <Header
                    sticky={true}
                    hideSearch={false} />
                <Main 
                    stickyHeader={true}>
                    <MenuBar
                        onSubmit={this.handleSubmit}
                        collapseElement={
                            this.props.filters.map((filter, index) => {
                                if(!filter.main) {
                                    let content = this.bau(filter, index);
                                    return (
                                        <Col key={index} sm={filter.small_size} md={filter.medium_size} lg={filter.large_size}>
                                            {content}
                                        </Col>
                                    )
                                } else {
                                    return null;
                                }
                            })    
                        }>
                        {this.props.filters.map((filter, index) => {
                            if(filter.main) {
                                let content = this.bau(filter, index);
                                return (
                                    <Col key={index} sm={filter.small_size} md={filter.medium_size} lg={filter.large_size}>
                                        {content}
                                    </Col>
                                )
                            } else {
                                return null;
                            }
                        })}
                    </MenuBar>
                    <Spacing
                        vertical={3}
                        verticalMediumAndAbove={9}
                        verticalLargeAndAbove={3}>
                        <PageContainer>
                         {this.props.listings.isLoading &&
                                <Bounce />
                         }
                         {!this.props.listings.isLoading &&
                            <ListingCardList>
                                {listings}
                            </ListingCardList>
                         }
                        </PageContainer>
                    </Spacing>
                </Main>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { searchFilters, filters, listings } = state.Search.toJS();
    return {
        searchFilters: searchFilters,
        filters: filters,
        listings: listings
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hydrate: (filters) => dispatch(searchActions.hydrate(filters)),
        onSearchListings: (searchFilters) => dispatch(searchActions.searchListings(searchFilters)),
        onFiltersChanged: (id, value) => dispatch(searchActions.filtersChanged(id, value)),
        onSearchFiltersUpdate: (filters) => dispatch(searchActions.searchFiltersUpdate(filters))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withFilters(Search)));