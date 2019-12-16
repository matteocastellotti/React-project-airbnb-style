import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';
    
class MenuBarContainer extends Component {
    render() {
        return (
            <div>
                <div
                    {...css(
                        this.props.styles.filterBarWrapper,
                        this.props.fixed ? this.props.styles.filterBarWrapper_fixed : this.props.styles.filterBarWrapper_absolute,
                        (this.props.topBorder || this.props.bottomBorder) && this.props.styles.filterBarWrapper_border,
                        this.props.topBorder && { borderTop: "1px solid " + (this.props.borderColor || this.props.theme.color.divider) }, 
                        this.props.bottomBorder && { borderBottom: "1px solid " + (this.props.borderColor || this.props.theme.color.divider) },
                        this.props.bottomBorder && this.props.styles.bottomBorder, { width: this.props.width || "100%" },
                        !this.props.visible && this.props.styles.filterBarWrapper_hidden,
                    )}>
                    {this.props.children}
                </div>
                {this.props.fixed &&  
                    <div 
                        {...css(
                            this.props.styles.filterBarWrapper,
                            this.props.styles.filterBarWrapper_relative,
                            {width: this.props.width || "100%"}
                        )} />
                }
            </div>
        )
    }
}

MenuBarContainer.propTypes = {
    bottomBorder: PropTypes.bool,
    topBorder: PropTypes.bool,
    children: PropTypes.node.isRequired,
    fixed: PropTypes.bool,
    width: PropTypes.string,
    visible: PropTypes.bool,
    borderColor: PropTypes.string
};

MenuBarContainer.defaultProps = {
    bottomBorder: false,
    fixed: true,
    width: null,
    visible: true,
    borderColor: null,
    topBorder: false
};

export default withStyles(({ unit, color }) => ({
    filterBarWrapper_border: {
        //height: 8 * unit + 1
    },
    filterBarWrapper: {
        zIndex: 1,
        minHeight: 6 * unit
    },
    filterBarWrapper_relative: {
        position: "relative"
    },
    filterBarWrapper_fixed: {
        background: color.white,
        position: "fixed",
        zIndex: 9
    },
    filterBarWrapper_absolute: {
        position: "absolute",
        top: 80
    },
    filterBarWrapper_hidden: {
        display: "none"
    },
}))(MenuBarContainer);