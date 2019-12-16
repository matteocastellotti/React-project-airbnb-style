import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';
import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';

class SidenavItem extends React.Component {
    render() {
        return (
            <div 
                {...css(
                    this.props.styles.container,
                    !this.props.text && this.props.styles.container_text
                )}>
                <ButtonOrLink
                    href={this.props.href}
                    openInNewWindow={this.props.openInNewWindow}
                    type={this.props.type}
                    disabled={this.props.disabled}
                    ariaSelected={this.props.ariaSelected}>
                    {this.props.children}
                </ButtonOrLink>
            </div>
        )
    }
}

SidenavItem.propTypes = {
    href: PropTypes.string,
    children:  PropTypes.node,
    openInNewWindow: PropTypes.bool,
    type:  PropTypes.oneOf(["button", "submit"]),
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    ariaSelected: PropTypes.bool,
}

SidenavItem.defaultProps = {
    href: null,
    type: "button",
    openInNewWindow: false,
    children: null,
    text: false,
    disabled: false,
    ariaSelected: false
}

export default withStyles(() => ({
    container: {
        display: "block",
        padding: "6px 0",
        fontSize: "16px",
        color: "#767676"
    },
    container_text: {
        textDecoration: "none",
        color: "#484848",
        fontWeight: "bold"
    }
}))(SidenavItem);