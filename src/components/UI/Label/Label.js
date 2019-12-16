import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles'

class Label extends React.Component {
    render() {
        return (
            <label
                {...css(
                    this.props.styles.container,
                    this.props.inline && this.props.styles.inline,
                    this.props.table && this.props.styles.table,
                    this.props.position && { position: this.props.position }
                )}
                htmlFor={this.props.htmlFor}
                id={this.props.id}>
                {this.props.children}
            </label>
        )
    }
}
    
Label.propTypes = {
    children: PropTypes.node.isRequired,
    htmlFor: PropTypes.string.isRequired,
    id: PropTypes.string,
    inline: PropTypes.bool,
    table: PropTypes.bool,
    position: PropTypes.oneOf(["static", "absolute", "fixed", "relative", "initial", "inherit"])
}

Label.defaultProps = {
    id: null,
    inline: false,
    table: false,
    position: null
};

export default withStyles(({ color }) => ({
    container: {
        background: color.clear,
        border: 0,
        cursor: "pointer",
        display: "block",
        padding: 0
    },
    inline: {
        display: "inline-block",
        whiteSpace: "nowrap"
    },
    table: {
        display: "table"
    }
}))(Label)