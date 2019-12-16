import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';

class VerticalAlign extends Component {
    render() {
        return (
            <div
                {...css(
                    this.props.styles.container,
                    this.props.top && this.props.styles.top,
                    this.props.middle && this.props.styles.middle,
                    this.props.bottom && this.props.styles.bottom
                )}>
                {this.props.children}
            </div>
        )
    }
}

VerticalAlign.propTypes = {
    children: PropTypes.node.isRequired,
    top: PropTypes.bool,
    middle: PropTypes.bool,
    bottom: PropTypes.bool
};

VerticalAlign.defaultProps = {
    top: false,
    middle: false,
    bottom: false
};

export default withStyles(() => ({
    container: {
        display: "table-cell"
    },
    top: {
        verticalAlign: "top"
    },
    middle: {
        verticalAlign: "middle"
    },
    bottom: {
        verticalAlign: "bottom"
    }
}))(VerticalAlign);