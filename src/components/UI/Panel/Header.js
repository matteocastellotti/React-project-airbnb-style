import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';

class Header extends React.Component {
    render() {
        return (
            <div {...css(this.props.styles.container)}>
                {this.props.children}
            </div>
        )
    }
}

Header.propTypes = {
    children: PropTypes.string.isRequired
}

Header.defaultTypes = {
    children: null
}

export default withStyles(({ color, unit }) => ({
    container: {
        position: "relative",
        margin: 0,
        padding: 2.5 * unit,
        borderTop: "1px solid " + color.panelBorder,
        color: color.core.hof,
        fontSize: "16px",
        paddingTop: 1.5 * unit,
        paddingBottom: 1.5 * unit,
        borderBottom: "1px solid " + color.panelBorder,
        backgroundColor: "#edefed"
    }
}))(Header);