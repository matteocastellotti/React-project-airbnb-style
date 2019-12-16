import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LocaleProvider } from 'antd';
import AppRouter from "./AppRouter";
import Header from '../Navbar/Navbar';
import { siteConfig } from '../../config.js';
import { AppLocale } from '../../App'
import http from 'axios';
import promise from 'promise';
import { constantActions } from '../../store/actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(constantActions.get());
    }

    render() {
        const { locale } = this.props;
        const currentAppLocale = AppLocale[locale];
        return (
            <LocaleProvider locale={currentAppLocale.antd}>
                <div>
                    <div style={{position: 'fixed', zIndex: '10', width: '100%'}}>
                        <Header />
                    </div>
                    <main className="site-content">
                        <AppRouter />
                    </main>
                    <div>
                        {siteConfig.footerText}
                    </div>
                </div>
            </LocaleProvider>
        );
    }
}

http.interceptors.request.use(function (config) {
    if(config.data === undefined || config.data === null){
        config.data = '';
    }

    let token = sessionStorage.getItem('token');
    if (token === null) {
        token = localStorage.getItem('token');
    }
    if(token !== undefined) {
        config.headers['_token'] = token;
    }
    return config;
}, function (error) {
    // Do something with request error
    return promise.reject(error);
});

function mapStateToProps(state) {
    const loggedIn = state.Auth.toJS().loggedIn
    return {
        locale: state.LanguageSwitcher.toJS().language.locale,
        loggedIn
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };