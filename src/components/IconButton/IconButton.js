import React from 'react';
import PropTypes from 'prop-types'

import ButtonOrLink from '../UI/ButtonOrLink/ButtonOrLink';
import { css, withStyles } from '../../config/withStyles';

class IconButton extends React.Component {      
      
    state = {
        isButtonHovered: !1,
        isFocused: !1
    }
        
    handleFocus = () => {
        this.setState({isFocused: !0});
    }
    
    handleBlur = () => {
        this.setState({isFocused: !1});
    }
    
    handleMouseEnter = () => {
        this.setState({isButtonHovered: !0});
    }
    
    handleMouseLeave = () => {
        this.setState({isButtonHovered: !1});
    }
    
    render() {
        return (
            <ButtonOrLink
                ariaExpanded={this.props.accessibilityHasPopup ? this.props.accessibilityExpanded : null}
                ariaHaspopup={this.props.accessibilityHasPopup}
                ariaPressed={this.props.ariaPressed}
                disabled={this.props.disabled}
                href={this.props.disabled ? void 0 : this.props.href}
                id={this.props.id}
                itemProp={this.props.itemPropSameAs ? "sameAs" : null}
                onClick={this.props.onPress}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                openInNewWindow={this.props.openInNewWindow}
                removeOutlineOnPress={this.props.removeOutlineOnPress}
                type={this.props.type}
                {...css(
                    this.props.styles.container,
                    this.props.inline && this.props.styles.inline,
                    { padding: this.props.styles.tapPadding },
                    { margin: -this.props.tapPadding }
                )}>
                {this.props.icon}
            </ButtonOrLink>
        )        
    }
}  

IconButton.propTypes = {
    accessibilityExpanded: PropTypes.bool,
    accessibilityHasPopup: PropTypes.bool,
    ariaPressed: PropTypes.bool,
    disabled: PropTypes.bool,
    highlightColor: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.node.isRequired,
    id: PropTypes.string,
    inline: PropTypes.bool,
    itemPropSameAs: PropTypes.bool,
    onPress: PropTypes.func,
    openInNewWindow: PropTypes.bool,
    removeOutlineOnPress: PropTypes.bool,
    tapPadding: PropTypes.number,
    type: PropTypes.oneOf(["button", "submit"])
}
 
IconButton.defaultProps = {
    accessibilityExpanded: false,
    accessibilityHasPopup: false,
    ariaPressed: null,
    disabled: false,
    highlightColor: null,
    id: null,
    inline: false,
    itemPropSameAs: false,
    onPress: () => {
        return;
    },
    openInNewWindow: false,
    removeOutlineOnPress: false,
    tapPadding: 0,
    type: "button"
}

export default withStyles(({ color, unit }) => ({
    container: {
        cursor: "pointer",
        backgroundColor: color.clear,
        color: "buttontext",
        border: 0,
        display: "block",
        ":active": {
            outline: 0
        },
        ":focus": {
            outline: 0
        },
        "::disabled": {
            opacity: .5,
            cursor: "default",
            color: "graytext"
        }
    },
    inline: {
        display: "inline-block"
    }
}))(IconButton);