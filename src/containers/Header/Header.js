import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Navbar from '../../components/Navbar/Navbar';
import FlyoutMenu from '../../components/Navbar/FlyoutMenu';
import AutocompleteForm from '../../components/UI/FormElement/AutocompleteForm/AutocompleteForm';

import { constantActions, countryActions, headerActions } from '../../store/actions';
import { history } from '../../store/history';
import polyglot from '../../languageProvider';
import { css, withStyles } from '../../config/withStyles';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: null,
            isCityFocused: false
        };
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleCityFocus = this.handleCityFocus.bind(this);
        this.handleCityBlur = this.handleCityBlur.bind(this);
        this.handleCitySelect = this.handleCitySelect.bind(this);
    }

    componentDidMount() {
        this.setState({ city: this.props.match.params.city });
        if (this.props.isLoggedIn) {
            this.props.onHeaderUserLogin();
            this.props.onHeaderUserCountListings();
        }
        if(this.props.flyoutMenuToggle) {
            this.props.onHeaderFlyoutMenuToggle();
        }
        this.props.fetchConstants();
        this.props.onSearchCountries();
    }

    handleCityFocus() {
        this.setState({ isCityFocused: true });
    }

    handleCityBlur() {
        this.setState({ isCityFocused: false });
    }

    handleChangeCity(event) {
        this.props.onSearchCity(event.target.value);
        this.setState({ city : event.target.value });
    }

    handleCitySelect(item) {
        history.push({
            pathname: '/listings/' + item.name ,
            search: encodeURIComponent(this.props.location.search)
        });
    }

    render() {
        return (
            <div {...css(this.props.styles.container)}>
                <Navbar
                    sticky={this.props.sticky}
                    floating={this.props.floating}
                    initiallyHideNavigation={this.props.initiallyHideNavigation}
                    useTransparentBackground={this.props.useTransparentBackground}
                    colorTheme={this.props.colorTheme}
                    hideSearch={this.props.hideSearch}
                    searchSettings={
                        <div 
                            {...css(
                                this.props.styles.searchContainer,
                                this.state.isCityFocused && this.props.styles.search_focus
                            )}>
                            <AutocompleteForm
                                id="city"
                                name="city"
                                value={this.state.city}
                                placeholder={polyglot.phrases["CITY"]}
                                onChange={this.handleChangeCity}
                                onFocus={this.handleCityFocus}
                                onBlur={this.handleCityBlur}
                                onSelect={this.handleCitySelect}
                                results={this.props.cities.results}
                                isLoading={this.props.cities.isLoading}
                                addClearInput={false}
                                inputRemoveMargins={true}
                                inputOverflowEllipsis={true}
                                hideLabel={false}
                                hideDropdownOnSubmit={false} />
                        </div>
                    }
                    flyoutMenu={
                        <FlyoutMenu
                            isLoggedIn={this.props.isLoggedIn}
                            isPrivate={this.props.isPrivate}
                            open={this.props.flyoutMenuToggle} />
                    }
                    onFlyoutMenuToggle={this.props.onHeaderFlyoutMenuToggle} />
            </div>
        );
    }
}

Header.propTypes = {
    sticky: PropTypes.bool,
    floating: PropTypes.bool,
    initiallyHideNavigation: PropTypes.bool,
    useTransparentBackground: PropTypes.bool,
    colorTheme: PropTypes.string,
    hideSearch: PropTypes.bool
}

Header.defaultProps = {
    sticky: false,
    floating: false,
    initiallyHideNavigation: false,
    useTransparentBackground: false,
    colorTheme: null,
    hideSearch: true
}

const mapStateToProps = state => {
    const { isLoggedIn, isPrivate, flyoutMenuToggle, cities } = state.Header.toJS();
    return { 
        isLoggedIn: isLoggedIn,
        isPrivate: isPrivate,
        flyoutMenuToggle: flyoutMenuToggle,
        cities: cities
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onHeaderUserLogin: () => dispatch(headerActions.headerUserLogin()),
        onHeaderUserCountListings: () => dispatch(headerActions.headerUserCountListings()),
        onHeaderFlyoutMenuToggle: () => dispatch(headerActions.headerFlyoutMenuToggle()),
        fetchConstants: () => dispatch(constantActions.get()),
        onSearchCountries: () => dispatch(countryActions.search()),
        onSearchCity: (searchFilters) => dispatch(headerActions.searchCities(searchFilters))
    }
}

export default compose(
    withStyles(({ responsive, unit }) => ({
        container: {
            position: 'fixed',
            zIndex: '10'
        },
        searchContainer: {
            width: 460,
            transition: "width 200ms ease-in 0s"
        },
        search_focus: {
            width: 600
        }
    })),
    connect(mapStateToProps, mapDispatchToProps)
)(withRouter(Header));
