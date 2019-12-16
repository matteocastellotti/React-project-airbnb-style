import React, { Component } from 'react';
import PropTypes from 'prop-types';
    
import WrappedComponent from '../../WrappedComponent/WrappedComponent';

import { css, withStyles } from '../../../config/withStyles';

class PanelMenu extends Component {

    state = {
        visible: true,
        rightAlign: this.props.rightAlign
    }

    componentDidMount() {
        this.checkForOverflow();
        this.setState({visible: true});
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.rightAlign !== this.props.rightAlign) {
            this.setState({rightAlign: nextProps.rightAlign});
        }
    }
                    
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
    
    setMenuRef = e => {
        this.menu = e
    }
     
    checkForOverflow = () => {
        if (!this.props.rightAlign && this.props.size !== 'panel_full' && this.menu) {
            var e = this.menu.getBoundingClientRect();
            this.setState({
                rightAlign: e.left + e.width > window.innerWidth
            })
        }
    }
    
    render() {
        return (
            <WrappedComponent
                onOutsideClick={this.props.onOutsideClick}
                display="block">
                <div
                    role="menu"
                    ref={this.setMenuRef}
                    {...css(
                        this.props.styles.panel,
                        this.props.asDropdown && this.props.styles.panel_asDropdown,
                        this.props.styles[this.props.size],
                        this.state.visible && this.props.styles.visible,
                        this.props.rightAlign && this.props.styles.rightAlign,
                        this.props.coverBar && this.props.styles.panel_coverBar,
                        this.props.noVerticalPadding && this.props.styles.noVerticalPadding,
                        this.props.centerAlign && this.props.styles.centerAlign
                    )}>
                    {this.props.children}
                </div>
            </WrappedComponent>
        )
    }
}
 
PanelMenu.propTypes = {
    asDropdown: PropTypes.bool,
    centerAlign: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onOutsideClick: PropTypes.func,
    rightAlign: PropTypes.bool,
    size: PropTypes.oneOf(["panel_extra_large", "panel_fit", "panel_full", "panel_full_with_top_margin", "panel_large", "panel_largish", "panel_left", "panel_medium", "panel_mediumish", "panel_sixty", "panel_small", "panel_smallish"]),
    coverBar: PropTypes.bool,
    noVerticalPadding: PropTypes.bool
}

PanelMenu.defaultProps = {
    asDropdown: false,
    centerAlign: false,
    rightAlign: false,
    coverBar: false,
    noVerticalPadding: false,
    onOutsideClick: () => {
        return ;
    }
}

export default withStyles(({ unit, color }) => ({
    panel: {
        position: "absolute",
        top: 6 * unit,
        left: 0,
        zIndex: 10,
        background: color.backgroundLight,
        border: "1px solid rgba(0, 0, 0, 0.2)",
        borderRadius: 4,
        boxShadow: "0 14px 36px 2px rgba(0, 0, 0, 0.15)",
        padding: 3 * unit,
        overflowY: "auto",
        overflowX: "hidden",
        visibility: "hidden",
        whiteSpace: "normal"
    },
    panel_coverBar: {
        top: 0
    },
    panel_asDropdown: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
    visible: {
        visibility: "visible"
    },
    centerAlign: {
        left: "50%",
        position: "fixed",
        top: "50%",
        transform: "translate(-50%, -50%)"
    },
    rightAlign: {
        left: "auto",
        right: 0
    },
    noVerticalPadding: {
        paddingTop: 0,
        paddingBottom: 0
    },
    panel_small: {
        width: 35 * unit
    },
    panel_smallish: {
        width: 43 * unit
    },
    panel_mediumish: {
        width: 45 * unit,
        border: "none",
        boxShadow: "0 14px 36px 2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.1)"
    },
    panel_medium: {
        width: 53 * unit
    },
    panel_largish: {
        width: 58 * unit
    },
    panel_large: {
        width: 71 * unit
    },
    panel_extra_large: {
        width: 80 * unit
    },
    panel_fit: {
        display: "inline-block",
        maxHeight: "55vh"
    },
    panel_full: {
        position: "fixed",
        top: 13.625 * unit,
        left: 0,
        right: 0,
        bottom: 0,
        height: "initial"
    },
    panel_full_with_top_margin: {
        position: "fixed",
        top: 16 * unit,
        left: 0,
        right: 0,
        bottom: 0,
        height: "initial",
        border: "none",
        boxShadow: "none",
        paddingBottom: 4 * unit
    },
    panel_sixty: {
        position: "fixed",
        top: 20 * unit,
        paddingTop: 6 * unit,
        paddingBottom: 4 * unit,
        left: 0,
        bottom: 0,
        width: "66%",
        height: "initial",
        border: "none",
        boxShadow: "none"
    },
    panel_left: {
        position: "fixed",
        top: 20 * unit,
        left: 0,
        width: "60%",
        height: "initial",
        border: "none",
        boxShadow: "none"
    }
}))(PanelMenu);

/*a:"panel_extra_large"
b:"panel_fit"
c:"panel_full"
d:"panel_full_with_top_margin"
e:"panel_large"
f:"panel_largish"
g:"panel_left"
h:"panel_medium"
i:"panel_mediumish"
j:"panel_sixty"
k:"panel_small"
l:"panel_smallish"*/