import React from 'react';
import PropTypes from 'prop-types';

import ButtonOrLink from '../UI/ButtonOrLink/ButtonOrLink';
import { css, withStyles } from '../../config/withStyles';

class FlyoutMenuItem extends React.Component {
    render() {
        return (
            <ButtonOrLink
                onClick={this.props.onPress}
                role="menuitem"
                href={this.props.href}
                target={this.props.openLinkInNewWindow ? "_blank" : null}
                {...css(
                    this.props.styles.container,
                    !this.props.href && this.props.styles.container_button
                )}>
                {this.props.children}
            </ButtonOrLink>
        )
    }
}

FlyoutMenuItem.proprTypes = {
    href: PropTypes.string,
    children: PropTypes.node,
    onPress: PropTypes.func,
    openLinkInNewWindow: PropTypes.bool,
    icon: null,
    dataAttrs: PropTypes.object,
    hasNotification: PropTypes.bool,
    submit: PropTypes.bool,
    wrapper: PropTypes.node
}

FlyoutMenuItem.defaultProps = {
    onPress: null,
    hasNotification: !1,
    openLinkInNewWindow: !1,
    submit: !1,
    wrapper: null
}
 
export default withStyles(({ font, color, unit }) => ({
    container: {
        color: color.textDark,
        display: "block",
        textDecoration: "none",
        paddingTop: 1.5 * unit,
        paddingBottom: 1.5 * unit,
        position: "relative",
        ":active": {
            color: color.textLink
        }
    },
    container_button: {
        width: "100%",
        appearance: "none",
        background: "transparent",
        border: 0,
        cursor: "pointer",
        margin: 0,
        paddingLeft: 0,
        paddingRight: 0,
        textAlign: "left",
        userSelect: "auto"
    }
}))(FlyoutMenuItem);