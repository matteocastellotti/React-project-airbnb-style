import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderUserContent from '../../../components/Header/HeaderUserContent/HeaderUserContent';
import { headerActions } from '../../../store/actions';
import { authenticationActions } from '../../../store/actions';

class HeaderUser extends Component {

    hideHeaderHandler = () => {
        this.props.onChangeHeaderUserView(false);
    }

    logoutHandler = () => {
        this.props.onLogout();
        this.hideHeaderHandler();
    }

    render() {
        const { loggedUser, viewHeaderUser } = this.props;
        return (
            <HeaderUserContent 
                loggedUser={loggedUser} 
                visible={viewHeaderUser}
                onChangeVisible={this.props.onChangeHeaderUserView}
                onHide={this.hideHeaderHandler}
                onLogout={this.logoutHandler} />
        );
    }
}

const mapStateToProps = state => {
    return {
        loggedUser: state.MeUser.toJS().loggedUser
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeHeaderUserView: (visible) => dispatch(headerActions.changeHeaderUserView(visible)),
        onLogout: () => dispatch(authenticationActions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderUser);
