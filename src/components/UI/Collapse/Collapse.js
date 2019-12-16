import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';

class Collapse extends Component {
      
    state = {
        renderChildren: this.props.open,
        animateOpen: this.props.open,
        overflowHidden: !this.props.open
    }
    
    componentWillReceiveProps(nextProps) {
        if(!this.props.open && nextProps.open) {
            this.setState({ renderChildren: true });
         } else if(this.props.open && !nextProps.open) {
             this.setState({ animateOpen: false, overflowHidden: true });
         }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(this.state.renderChildren && this.state.renderChildren !== prevState.renderChildren) {
            clearTimeout(this.animateTimeout);
            clearTimeout(this.renderTimeout);
            this.animateTimeout = setTimeout(() => {
                clearTimeout(this.unrenderTimeout);
                this.setState({ animateOpen: true });
            }, 16);
            this.renderTimeout = setTimeout(() => {
                this.setState({ overflowHidden: false });
                this.props.onExpanded();
            }, 304);
        }
        this.state.animateOpen || this.state.animateOpen === prevState.animateOpen || (this.unrenderTimeout = setTimeout(() => {
            this.setState({
                renderChildren: false
            })
        }, 304))
    }
     
    componentWillUnmount() {
        clearTimeout(this.animateTimeout);
        clearTimeout(this.renderTimeout);
        clearTimeout(this.unrenderTimeout);
    }
     
    render() {
        return (
            <div
                {...css(
                    this.state.overflowHidden && this.props.styles.overflowHidden
                )}
                id={this.props.id}>
                {this.state.renderChildren && 
                    <div 
                        {...css(
                            this.props.styles.childContainer,
                            this.state.animateOpen ? this.props.styles.childContainer_open : this.props.styles.childContainer_closed
                        )}>
                        {this.props.children}
                    </div>
                }
            </div>
        )
    }
};

Collapse.propTypes = {
    id: PropTypes.string,
    onExpanded: PropTypes.func,
    open: PropTypes.bool
}

Collapse.defaultProps = {
    children: null,
    id: null,
    onExpanded: () => {
        return;
    },
    open: false
}

export default withStyles(({ unit }) => ({
    overflowHidden: {
        overflow: "hidden"
    },
    childContainer: {
        transition: "\n      transform " + 304 + "ms ease-out,\n opacity " + 304 + "ms ease-out\n    "
    },
    childContainer_open: {
        transform: "translateY(0px)",
        opacity: 1
    },
    childContainer_closed: {
        transform: "translateY(" + -1.5 * unit + "px)",
        opacity: 0
    }
}))(Collapse)