import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addEventListener } from 'consolidated-events';

import { css, withStyles } from '../../config/withStyles';

class WrappedComponent extends Component {

    componentDidMount() {
        if(!this.props.disabled) {
            this.addMouseDownEventListener(this.props.useCapture);
        }
    }
     
    componentWillReceiveProps(nextProps) {
        if(this.props.disabled !== nextProps.disabled) {
            if(nextProps.disabled) {
                this.removeEventListeners();
            } else {
                this.addMouseDownEventListener(this.props.useCapture);
            }
        }
    }
     
    componentWillUnmount() {
        this.removeEventListeners();
    }
    
    onMouseDown = event => {
        if(this.childNode === null || !this.childNode.contains(event.target)) {
            this.removeMouseUp = addEventListener(
                document,
                "mouseup",
                this.onMouseUp,
                { capture: this.props.useCapture}
            );
        }
    }
     
    onMouseUp = event => {
        if(this.removeMouseUp) {
            this.removeMouseUp();
        }
        this.removeMouseUp = null;
        if(this.childNode === null || !this.childNode.contains(event.target)) {
            this.props.onOutsideClick(event);
        }
    }
    
    setChildNodeRef = event => {
        this.childNode = event;
    }
    
    addMouseDownEventListener = event => {
        this.removeMouseDown = addEventListener(
            document,
            "mousedown",
            this.onMouseDown,
            { capture: event }
        )
    }
     
    removeEventListeners = () => {
        if(this.removeMouseDown) {
            this.removeMouseDown();
        }
        if(this.removeMouseUp) {
            this.removeMouseUp();
        }
    }
     
    render() {
        return (
            <div
                ref={this.setChildNodeRef}
                {...css(this.props.styles[this.props.display])}>
                {this.props.children}
            </div>
        )
    }
};

WrappedComponent.propTypes = {
    children: PropTypes.node.isRequired,
    onOutsideClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    useCapture: PropTypes.bool,
    display: PropTypes.oneOf("block", "flex", "inline-block")
};

WrappedComponent.defaultProps = {
    disabled: false,
    useCapture: true,
    display: "block",
    onOutsideClick: () => {
        return;
    }
}

export default withStyles(() => ({ 
    block: {
        display: "block"
    },
    inline: {
        display: "inline-block"
    },
    flex: {
        display: "flex"
    }
}))(WrappedComponent);