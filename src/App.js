import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router-dom';
import { addEventListener } from 'consolidated-events';

import { getMeasureFromValue } from './config/themes/responsive';
import { appActions } from './store/actions';
import { history } from './store/history';
import AppRouter from "./containers/App/AppRouter";

class App extends Component {

    componentDidMount() {
        addEventListener(window, "resize", this.screenMeasure, {
            passive: !0
        })
        this.screenMeasure();
    }

    screenMeasure = event => {
        var measure = getMeasureFromValue(window.innerWidth);
        if (measure !== this.props.currentBreakpoint) {
            this.props.onCurrentBreakpointChanged(measure);
        }
    }
    
    render() {
        return (
            <Router history={history}>
                <AppRouter />
            </Router>
        )
    }
};

const mapStateToProps = state => {
    return {
        currentBreakpoint: state.App.toJS().currentBreakpoint
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCurrentBreakpointChanged: (breakpoint) => dispatch(appActions.currentBreakpointChanged(breakpoint))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);