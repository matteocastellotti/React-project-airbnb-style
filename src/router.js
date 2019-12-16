import React from 'react';
import { Route, Redirect, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { App } from './containers/App/App';
import asyncComponent from './helpers/AsyncFunc';


const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route
        {...rest}
        render={props => isLoggedIn
            ? <Component {...props} />
            : <Redirect
                to={{
                    pathname: '/login',
                    state: { from: props.location },
                }}
            />}
    />
);
const PublicRoutes = ({ history, isLoggedIn }) => {
    return (
        <BrowserRouter>
            <div>
                <Route
                    path={'/'}
                    component={asyncComponent(() => import('./containers/App/App'))} />
                <Route
                    exact
                    path={'/404'}
                    component={asyncComponent(() => import('./containers/Page/404'))} />
                <Route
                    exact
                    path={'/500'}
                    component={asyncComponent(() => import('./containers/Page/500'))} />
                <Route
                    exact
                    path={'/signup'}
                    component={asyncComponent(() => import('./containers/Page/signup'))} />
                <Route
                    exact
                    path={'/forgotpassword'}
                    component={asyncComponent(() => import('./containers/Page/forgotPassword'))} />
                <Route
                    exact
                    path={'/resetpassword'}
                    component={asyncComponent(() => import('./containers/Page/resetPassword'))} />
            </div>
        </BrowserRouter>
    );
};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.Auth.toJS().token !== null,
    }
}

export default connect(mapStateToProps)(PublicRoutes);
