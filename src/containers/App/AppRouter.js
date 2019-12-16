import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import asyncComponent from '../../helpers/AsyncFunc';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route
        {...rest}
        render={props => 
            isLoggedIn ? 
            <Component {...props} /> : 
            <Redirect exact to={{pathname: '/login', state: { from: props.location }}} />
        } />
);

class AppRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path={`/`}
                    component={asyncComponent(() => import('../Home/Home.js'))} />
                <Route
                    exact
                    path={`/login`}
                    component={asyncComponent(() => import('../../Page/Login.js'))} />
                <RestrictedRoute
                    path="/my-agency"
                    component={asyncComponent(() => import('../Me/Agency/Agency.js'))}
                    isLoggedIn={this.props.isLoggedIn} />
                <RestrictedRoute
                    path={`/me`}
                    component={asyncComponent(() => import('../Me/User/User.js'))}
                    isLoggedIn={this.props.isLoggedIn} />
                <RestrictedRoute
                    exact
                    path={`/new-listing`}
                    component={asyncComponent(() => import('../Listing/New/Start.js'))}
                    isLoggedIn={this.props.isLoggedIn} />
                <RestrictedRoute
                    exact
                    path={`/new-listing/:listing_id?/owner`}
                    component={asyncComponent(() => import('../Listing/New/Owner.js'))}
                    isLoggedIn={this.props.isLoggedIn} />
                <RestrictedRoute
                    exact
                    path={`/new-listing/:listing_id/type`}
                    component={asyncComponent(() => import('../Listing/New/Type.js'))}
                    isLoggedIn={this.props.isLoggedIn} />
                <RestrictedRoute
                    exact
                    path={`/new-listing/:listing_id/place`}
                    component={asyncComponent(() => import('../Listing/New/Place.js'))}
                    isLoggedIn={this.props.isLoggedIn} />
                <RestrictedRoute
                    exact
                    path={`/new-listing/:listing_id/details`}
                    component={asyncComponent(() => import('../Listing/New/Details.js'))}
                    isLoggedIn={this.props.isLoggedIn} />
                <RestrictedRoute
                    exact
                    path={`/new-listing/:listing_id/images`}
                    component={asyncComponent(() => import('../Listing/New/Images.js'))}
                    isLoggedIn={this.props.isLoggedIn} />
                <RestrictedRoute
                    exact
                    path={`/new-listing/:listing_id/comforts`}
                    component={asyncComponent(() => import('../Listing/New/Comforts.js'))}
                    isLoggedIn={this.props.isLoggedIn} />
                <RestrictedRoute
                    exact
                    path={`/new-listing/:listing_id`}
                    component={asyncComponent(() => import('../Listing/New/Step/Step.js'))}
                    isLoggedIn={this.props.isLoggedIn} />
                <RestrictedRoute
                    exact
                    path={`/my-listings`}
                    component={asyncComponent(() => import('../Listing/Edit/Edit.js'))}
                    isLoggedIn={true} />
                <RestrictedRoute
                    exact
                    path={`/listings/:city`}
                    component={asyncComponent(() => import('../Listing/Search/Search.js'))}
                    isLoggedIn={true} />
                <RestrictedRoute
                    exact
                    path={`/listings/:listing_id`}
                    component={asyncComponent(() => import('../Listing/Search/Search.js'))}
                    isLoggedIn={true} />
                <RestrictedRoute
                    exact
                    path={`/logout`}
                    component={asyncComponent(() => import('../../Page/Logout.js'))}
                    isLoggedIn={this.props.isLoggedIn} />
                <Route
                    path={'/'}
                    component={asyncComponent(() => import('../../Page/404.js'))} />
            </Switch>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.Header.toJS().isLoggedIn
    }
}

export default withRouter(connect(mapStateToProps)(AppRouter));
