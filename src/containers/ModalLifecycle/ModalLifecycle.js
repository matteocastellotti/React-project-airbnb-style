import React from 'react';
import { connect } from 'react-redux';

import { modalActions } from '../../store/actions';
import Login from '../../containers/Auth/Login';
import Signup from '../../containers/Auth/Signup';
import Delete from '../Listing/Delete/Delete';
import Modal from '../../components/UI/Modal/Modal';

class ModalLifecycle extends React.Component {
    
    render() {
        let modal = null;
        switch (this.props.visibleModal) {
            case 'LOGIN_MODAL':
                modal = (
                    <Modal
                        name="login"
                        onClose={this.props.onModalClosed}
                        visible={true}>
                        <Login />
                    </Modal>
                )
                break;

            case 'SIGNUP_MODAL':
                modal = (
                    <Modal
                        name="signup" 
                        onClose={this.props.onModalClosed}
                        visible={true}>    
                        <Signup />
                    </Modal>
                )
                break;
            
            case 'LISTING_DELETE_MODAL':
                modal = (
                    <Modal
                        name="listingDelete"
                        title="Cancellare l'annuncio"
                        onClose={this.props.onModalClosed}
                        visible={true}>
                        <Delete />
                    </Modal>
                )
                break;

            default:
                break;
        }
        return modal;
    }
}
const mapStateToProps = state => {
    return {
        visibleModal: state.Modal.toJS().visibleModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onModalClosed: () => dispatch(modalActions.modalClosed())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalLifecycle);