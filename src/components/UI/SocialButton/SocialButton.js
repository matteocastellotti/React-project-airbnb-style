import React from 'react';
import PropTypes from 'prop-types';

import AccessibleText from '../AccessibleText/AccessibleText';
import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';
import GoogleIcon from '../Icons/GoogleIcon/GoogleIcon';
import Labeled from '../Labeled/Labeled';
import { css, withStyles } from '../../../config/withStyles';

class SocialButton extends React.Component {
    render() {
        let logo = (
            this.props.email ? null :
                this.props.google ? <GoogleIcon decorative={false} /> :
                    this.props.facebook ? <GoogleIcon decorative={false} /> :
                        this.props.onelogin && null
        )
                    
        if (this.props.logoOnly) {
            if (this.props.email) {
               
            } else if (this.props.facebook) {
                logo = (
                    React.cloneElement(logo, {
                        size: this.props.small ? 24 : this.props.large ? 40 : 30
                    })
                )
            } else if (this.props.google) {
                logo = (
                    React.cloneElement(logo, {
                        size: this.props.small ? 24 : this.props.large ? 40 : 30
                    })
                )
            } else if (this.props.onelogin) {

            }
        } else {
            logo = (
                <Labeled
                    centered={true}
                    before={
                        React.cloneElement(logo, {
                            size: this.props.small ? 15 : 18
                        })
                    }
                    spaceBetween={1.5}>
                    {this.props.children}
                </Labeled>
            )
        }
        return (
            <ButtonOrLink
                disabled={this.props.disabled}
                onClick={this.props.onPress}
                type={this.props.type}
                href={this.props.href}
                openInNewWindow={this.props.openInNewWindow}
                loading={this.props.loading}
                {...css(
                    this.props.styles.container,
                    this.props.block ? this.props.styles.container_block : this.props.styles.container_notBlock,
                    this.props.small ? this.props.styles.container_sizeSmall : this.props.styles.container_sizeRegular,
                    this.props.large && this.props.styles.container_sizeLarge,
                    this.props.email && this.props.styles.container_styleEmail,
                    this.props.facebook && this.props.styles.container_styleFacebook,
                    this.props.google && this.props.styles.container_styleGoogle,
                    this.props.onelogin && this.props.styles.container_styleOnelogin,
                    this.props.onelogin && this.props.small && this.props.styles.container_styleOneloginSmall,
                    this.props.mono && this.props.styles.container_styleMono,
                    this.props.logoOnly && this.props.styles.container_logoOnly,
                    this.props.logoOnly && this.props.small && this.props.styles.container_logoOnly_sizeSmall,
                    this.props.logoOnly && this.props.large && this.props.styles.container_logoOnly_sizeLarge,
                )}>
                {this.props.logoOnly &&
                    <AccessibleText>
                        {this.props.children}
                    </AccessibleText>
                }
                <span
                    {...css(
                        this.props.styles.text,
                        this.props.styles.text_sizeRegular,
                        this.props.small && this.props.styles.text_sizeSmall,
                        this.props.large && this.props.styles.text_sizeLarge,
                        this.props.loading && this.props.styles.text_hidden,
                        this.props.noWrap && this.props.styles.text_noWrap,
                        this.props.email && this.props.styles.text_styleEmail,
                        this.props.facebook && this.props.styles.text_styleFacebook,
                        this.props.google && this.props.styles.text_styleGoogle,
                        this.props.google && this.props.disabled && this.props.styles.text_styleGoogleDisabled,
                        this.props.onelogin && this.props.styles.text_styleOnelogin,
                        this.props.mono && this.props.styles.text_styleMono,
                        this.props.logoOnly && this.props.styles.text_logoOnly
                    )}>
                    {logo}
                </span>
            </ButtonOrLink>
        )
    }
}
    
SocialButton.propTypes = {
    onPress: PropTypes.func,
    block: PropTypes.bool,
    type: PropTypes.oneOf(["button", "submit"]),
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    href: PropTypes.string,
    openInNewWindow: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    email: PropTypes.bool,
    facebook: PropTypes.bool,
    google: PropTypes.bool,
    onelogin: PropTypes.bool,
    mono: PropTypes.bool,
    noWrap: PropTypes.bool,
    logoOnly: PropTypes.bool
}

SocialButton.defaultProps = {
    onPress: () => {
        return;
    },
    block: false,
    type: "button",
    disabled: false,
    openInNewWindow: false,
    small: false,
    large: false,
    email: false,
    facebook: false,
    google: false,
    onelogin: false,
    mono: false,
    noWrap: false,
    logoOnly: false
}

export default withStyles(({ font, color, unit }) => ({
    container: {
        cursor: "pointer",
        transition: "background 0.3s, border-color 0.3s",
        position: "relative",
        display: "inline-block",
        textAlign: "center",
        textDecoration: "none",
        border: "2px solid " + color.clear
    },
    container_block: {
        width: "100%"
    },
    container_notBlock: {
        width: "auto"
    },
    container_sizeRegular: Object.assign({}, 
        font.button,
        font.bold, 
        {
            paddingTop: 1.5 * unit,
            paddingBottom: 1.5 * unit,
            paddingRight: 3 * unit,
            paddingLeft: 3 * unit
        }
    ),
    container_sizeSmall: Object.assign({},
        font.buttonSmall,
        font.book,
        {
            paddingTop: unit,
            paddingBottom: unit,
            paddingRight: 2 * unit,
            paddingLeft: 2 * unit
        }
    ),
    container_sizeLarge: Object.assign({},
        font.bold,
        {
            paddingTop: 2 * unit,
            paddingBottom: 2 * unit,
            paddingRight: 3.5 * unit,
            paddingLeft: 3.5 * unit
        }
    ),
    container_styleEmail: {
        background: color.buttons.emailColor,
        ":active": {
            background: color.buttons.emailActiveColor
        },
        ":hover": {
            background: color.buttons.emailActiveColor
        },
        ":disabled": {
            background: color.buttons.emailDisabledColor,
            cursor: "default"
        }
    },
    container_styleFacebook: {
        background: color.buttons.facebookColor,
        ":active": {
            background: color.buttons.facebookActiveColor
        },
        ":hover": {
            background: color.buttons.facebookActiveColor
        },
        ":disabled": {
            background: color.buttons.facebookDisabledColor,
            cursor: "default"
        }
    },
    container_styleGoogle: {
        background: color.buttons.googleColor,
        borderColor: color.buttons.googleBorder,
        ":active": {
            background: color.buttons.googleActiveColor
        },
        ":hover": {
            background: color.buttons.googleActiveColor
        },
        ":disabled": {
            background: color.buttons.googleDisabledColor,
            borderColor: color.buttons.googleDisabledBorder,
            cursor: "default"
        }
    },
    container_styleOnelogin: {
        background: color.buttons.defaultColor,
        ":active": {
            background: color.buttons.defaultActiveColor
        },
        ":hover": {
            background: color.buttons.defaultHoverColor
        },
        ":disabled": {
            background: color.buttons.defaultDisabledColor,
            cursor: "default"
        }
    },
    container_styleOneloginSmall: {
        background: color.buttons.defaultSmallColor,
        ":active": {
            background: color.buttons.defaultSmallActiveColor
        },
        ":hover": {
            background: color.buttons.defaultSmallHoverColor
        },
        ":disabled": {
            background: color.buttons.defaultSmallDisabledColor,
            cursor: "default"
        }
    },
    container_styleMono: {
        background: color.buttons.monoColor,
        borderColor: color.buttons.monoBorder,
        ":active": {
            background: color.buttons.monoColor,
            borderColor: color.buttons.monoActiveBorder
        },
        ":hover": {
            background: color.buttons.monoColor
        },
        ":disabled": {
            background: color.buttons.monoColor,
            borderColor: color.buttons.monoDisabledBorder,
            cursor: "default"
        }
    },
    container_logoOnly: {
        borderRadius: "50%",
        padding: unit
    },
    container_logoOnly_sizeSmall: {
        padding: .75 * unit
    },
    container_logoOnly_sizeLarge: {
        padding: 1.25 * unit
    },
    text: {
        transition: "color 0.3s"
    },
    text_hidden: {
        visibility: "hidden"
    },
    text_noWrap: {
        whiteSpace: "nowrap"
    },
    text_sizeRegular: Object.assign({}, font.button),
    text_sizeSmall: Object.assign({}, font.buttonSmall),
    text_sizeLarge: Object.assign({}, font.textLarge),
    text_styleEmail: {
        color: color.buttons.emailText
    },
    text_styleFacebook: {
        color: color.buttons.facebookText
    },
    text_styleGoogle: {
        color: color.buttons.googleText
    },
    text_styleGoogleDisabled: {
        color: color.buttons.googleDisabledText
    },
    text_styleOnelogin: {
        color: color.buttons.defaultText
    },
    text_styleMono: {
        color: color.buttons.monoText
    },
    text_logoOnly: {
        color: color.buttons.inverseColor
    }
}))(SocialButton);