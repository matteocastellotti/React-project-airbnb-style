import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { modalActions } from '../../../store/actions';

class PortalWithDirection extends Component {
    
    state = {
        active: false
    }
            
    componentDidMount() {
        if(this.props.closeOnEsc) {
            document.addEventListener("keydown", this.handleKeydown);
        }
        if (this.props.closeOnOutsideClick) {
            document.addEventListener("mouseup", this.handleOutsideMouseClick);
            document.addEventListener("touchstart", this.handleOutsideMouseClick);
        }
        this.props.isOpened && this.openWindow();
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpened !== undefined && nextProps.isOpened) {
            if (this.state.active) {
                this.renderWindow(nextProps);
            } else {
                this.openWindow(nextProps);
            }
            if (!nextProps.isOpened) {
                this.state.active && this.closeWindow();
            }
        } else {
            if (this.state.active) {
                this.renderWindow(nextProps);
            }
        }
    }
    
    componentWillUnmount() {
        if (this.props.closeOnEsc) {
            document.removeEventListener("keydown", this.handleKeydown);
        }
        if (this.props.closeOnOutsideClick) {
            document.removeEventListener("mouseup", this.handleOutsideMouseClick);
            document.removeEventListener("touchstart", this.handleOutsideMouseClick);
        }
        this.closeWindow(true)
    }
    
    handleWrapperClick = event => {
        event.preventDefault();
        event.stopPropagation();
        if (!this.state.active) {
            this.openWindow();
        }
    }
     
    openWindow = () => {
        const element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
        this.setState({active: true});
        this.renderWindow(element);
        this.props.onOpen(this.node);
    }
       
    closeWindow = () => {
        let tmp = this;
        const element = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
        let n = n => {
            if (tmp.node) { 
                this.props.onModalClosed();
                document.body.removeChild(tmp.node);
            }
            tmp.window = null;
            tmp.node = null;
            if ((n === undefined ? element : n) !== true) {
                tmp.setState({active: false})
            }
        };
        if (this.state.active) {
            this.props.beforeClose ? this.props.beforeClose(this.node, n) : n();
            this.props.onClose();
        }
    }
    
    handleOutsideMouseClick = event => {
        if (this.state.active) {
            (0, ReactDOM.findDOMNode)(this.window).contains(event.target) || event.button && 0 !== event.button || (event.stopPropagation(),
            this.closeWindow())
        }
    }
     
    handleKeydown = event => {
        if (event.keyCode === 27 && this.state.active) {
            this.closeWindow();
        }
    }

    renderWindow = element => {
        this.node || (this.node = document.createElement("div"),
        document.body.appendChild(this.node));
        element.children.type === typeof "function" && (element.children = React.cloneElement(element.children, {
            closeWindow: this.closeWindow
        }));
        this.window = ReactDOM.unstable_renderSubtreeIntoContainer(this, element.children, this.node, this.props.onUpdate)
    }
    
    render() {
        return this.props.openByClickOn ? React.cloneElement(this.props.openByClickOn, {onClick: this.handleWrapperClick}) : null;
    }
}

PortalWithDirection.propTypes = {
    children: PropTypes.element.isRequired,
    openByClickOn: PropTypes.element,
    closeOnEsc: PropTypes.bool,
    closeOnOutsideClick: PropTypes.bool,
    isOpened: PropTypes.bool,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    beforeClose: PropTypes.func,
    onUpdate: PropTypes.func
}

PortalWithDirection.defaultProps = {
    onOpen: () => {
        return;
    },
    onClose: () => {
        return;
    },
    onUpdate: () => {
        return;
    }
}

const mapStateToProps = state => {
    return {
        visibleModal: state.Modal.toJS().visibleModal,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onModalClosed: () => dispatch(modalActions.modalClosed())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortalWithDirection);