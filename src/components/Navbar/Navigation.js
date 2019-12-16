import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import ShowAt from '../UI/ShowAt/ShowAt';
import Translate from '../UI/Translate/Translate';
import NavigationLink from './NavigationLink';
import ProfileItem from './ProfileItem';
import UserMenu from './UserMenu';
import ListingsMenu from './ListingsMenu';
import { css, withStyles } from '../../config/withStyles';
import { headerActions, modalActions } from '../../store/actions';

class Navigation extends React.Component {
    
    render() {
        return (
            <ShowAt breakpoint="largeAndAbove">
                <nav>
                    <ul {...css(this.props.styles.list)}>
                        <li {...css(this.props.styles.item)}>
                            {this.props.isLoggedIn && !this.props.listings &&
                                <NavigationLink
                                    href="/new-listing"
                                    name="new-listing"
                                    colorTheme={this.props.colorTheme}>
                                    <Translate labelKey="CREATE_LISTING" />
                                </NavigationLink>
                            }
                        </li>
                        <li {...css(this.props.styles.item)}>
                            {this.props.isLoggedIn && this.props.listings &&
                                <NavigationLink
                                    name="listings"
                                    focused={this.props.activateNavigationItem === "listings"}
                                    onActive={(navigationItemSelect) => this.props.onHeaderNavigationItemSelect(navigationItemSelect)}
                                    onOutsideClick={this.props.onHeaderNavigationItemDeselect}
                                    menu={<ListingsMenu />}
                                    colorTheme={this.props.colorTheme}>
                                    <Translate labelKey="LISTINGS" />
                                </NavigationLink>
                            }
                        </li>
                        <li {...css(this.props.styles.item)}>
                            {this.props.isLoggedIn && 
                                <NavigationLink
                                    name="user"
                                    focused={this.props.activateNavigationItem === "user"}
                                    onActive={(navigationItemSelect) => this.props.onHeaderNavigationItemSelect(navigationItemSelect)}
                                    onOutsideClick={this.props.onHeaderNavigationItemDeselect}
                                    menu={<UserMenu />}
                                    colorTheme={this.props.colorTheme}>
                                    <ProfileItem />
                                </NavigationLink>
                            }
                        </li>
                        <li {...css(this.props.styles.item)}>
                            {!this.props.isLoggedIn && 
                                <NavigationLink
                                    name="signup"
                                    onPress={this.props.onSignupOpened}
                                    colorTheme={this.props.colorTheme}>
                                    <Translate labelKey="SIGNUP" />
                                </NavigationLink>
                            }
                        </li>
                        <li {...css(this.props.styles.item)}>
                            {!this.props.isLoggedIn && 
                                <NavigationLink
                                    name="login"
                                    onPress={this.props.onAuthOpened}
                                    colorTheme={this.props.colorTheme}>
                                    <Translate labelKey="ACCESS" />
                                </NavigationLink>
                            }
                        </li>
                    </ul>
                </nav>
            </ShowAt>
        )
    }
}

const mapStateToProps = state => {
    const { isLoggedIn, activateNavigationItem, listings } = state.Header.toJS();
    return {
        isLoggedIn: isLoggedIn,
        activateNavigationItem: activateNavigationItem,
        listings: listings
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onHeaderNavigationItemSelect: (navigationItemSelect) => dispatch(headerActions.headerNavigationItemSelect(navigationItemSelect)),
        onHeaderNavigationItemDeselect: () => dispatch(headerActions.headerNavigationItemDeselect()),
        onAuthOpened: () => dispatch(modalActions.authModalOpened()),
        onSignupOpened: () => dispatch(modalActions.signupModalOpened())
    }
}

Navigation.propTypes = {
    colorTheme: PropTypes.string
}

Navigation.defaultProps = {
    colorTheme: null
}

export default compose(
    withStyles(({ unit }) => ({
        item: {
            display: 'table-cell'
        },
        list: {
            display: 'table !important',
            listStyle: 'none !important',
            padding: '0px !important',
            margin: '0px !important',
            height: '64px !important'
        },
        container: {
            position: "relative"
        }
    })),
    connect(mapStateToProps, mapDispatchToProps)
)(Navigation);