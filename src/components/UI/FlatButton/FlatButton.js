import React from 'react';
import PropTypes from 'prop-types';

import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';
import { css, withStyles } from '../../../config/withStyles';

class FlatButton extends React.Component {
    render() {
        return (
            <ButtonOrLink 
                {...css(
                    this.props.styles.button,
                    !this.props.inverse && this.props.styles.button_styleDefault, 
                    !this.props.inverse && this.props.primary && this.props.styles.button_stylePrimary,
                    !this.props.inverse && this.props.secondary && this.props.styles.button_styleSecondary, 
                    this.props.inverse && this.props.styles.button_styleInverse,
                    this.props.inverse && this.propsy && this.props.styles.button_styleSecondaryInverse,
                    this.props.small && !this.props.inverse && this.props.styles.button_styleDefaultSmall,
                    this.props.small && !this.props.inverse && this.props.primary && this.props.styles.button_stylePrimarySmall,
                    this.props.small && !this.props.inverse && this.props.secondary && this.props.styles.button_styleSecondarySmall,
                    !this.props.small && !this.props.size && this.props.styles.button_size_default,
                    this.props.small && !this.props.size && this.props.styles.button_size_small,
                    this.props.floating && this.props.styles.button_floating,
                    this.props.size && {
                        width: this.props.size,
                        height: this.props.size
                    },
                    this.props.square && this.props.styles.button_square,
                    this.props.shadowLevel === 1 && this.props.styles.button_shadowLevel1,
                    this.props.shadowLevel === 2 && this.props.styles.button_shadowLevel2,
                    this.props.shadowLevel === 3 && this.props.styles.button_shadowLevel3
                )}
                href={this.props.href}
                onClick={this.props.onPress}
                removeOutlineOnPress={true}
                type="button"
                ariaControls={this.props.accessibilityControlledIds}
                disabled={this.props.disabled}>
                <span
                    {...css(
                        this.props.styles.icon,
                        !this.props.inverse && this.props.styles.icon_styleDefault,
                        !this.props.inverse && this.props.primary && this.props.styles.icon_stylePrimary,
                        !this.props.inverse && this.props.secondary && this.props.styles.icon_styleSecondary,
                        !this.props.inverse && this.props.secondary && this.props.s && this.props.styles.icon_styleSecondaryDisabled,
                        !this.props.inverse && this.props.C && this.props.styles.icon_styleSelect,
                        !this.props.inverse && this.props.C && this.props.disabled && this.props.styles.icon_styleSelectDisabled,
                        this.props.inverse && this.props.styles.icon_styleInverse,
                        this.props.inverse && this.props.secondary && this.props.styles.icon_styleSecondaryInverse,
                        this.props.inverse && this.props.secondary && this.props.s && this.props.styles.icon_styleSecondaryInverseDisabled,
                        this.props.small && !this.props.inverse && this.props.styles.icon_styleDefaultSmall,
                        this.props.small && !this.props.inverse && this.props.primary && this.props.styles.icon_stylePrimarySmall,
                        this.props.small && !this.props.inverse && this.props.secondary && this.props.styles.icon_styleSecondarySmall,
                        this.props.small && !this.props.inverse && this.props.secondary && this.props.disabled && this.props.styles.icon_styleSecondarySmallDisabled,
                        !this.props.small && !this.props.size && this.props.styles.icon_size_default,
                        this.props.small && !this.props.size && this.props.styles.icon_size_small,
                        this.props.small && this.props.styles.icon_small,
                        this.props.size && {
                            fontSize: this.props.size / 2
                        }
                    )}>
                    {this.props.icon}
                </span>
            </ButtonOrLink>
        )
    }
}

FlatButton.propTypes = { 
    accessibilityControlledIds: PropTypes.string,
    disabled: PropTypes.bool,
    floating: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.node.isRequired,
    inverse: PropTypes.bool,
    onPress: PropTypes.func,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    shadowLevel: PropTypes.oneOf([0, 1, 2, 3]),
    size: PropTypes.number,
    small: PropTypes.bool,
    square: PropTypes.bool
}

FlatButton.defaultProps = {
    accessibilityControlledIds: null,
    disabled: false,
    floating: false,
    inverse: false,
    primary: false,
    secondary: false,
    shadowLevel: 0,
    size: null,
    small: false,
    square: false
}

export default withStyles(({ color, unit }) => ({
    button: {
        display: "inline-block",
        cursor: "pointer",
        borderRadius: "50%",
        textAlign: "center",
        lineHeight: 1,
        position: "relative",
        touchAction: "manipulation",
        border: "2px solid " + color.clear,
        ":focus": {
            outline: "none",
            boxShadow: "0 0 2px 2px " + color.focus
        }
    },
    button_square: {
        borderRadius: unit / 2
    },
    button_size_default: {
        width: 6 * unit,
        height: 6 * unit
    },
    button_size_small: {
        width: 4 * unit,
        height: 4 * unit
    },
    button_floating: {
        boxShadow: "0 1px 1px 1px rgba(0, 0, 0, 0.14)"
    },
    button_styleDefault: {
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
    button_stylePrimary: {
        background: color.buttons.primaryColor,
        ":active": {
            background: color.buttons.primaryActiveColor
        },
        ":hover": {
            background: color.buttons.primaryHoverColor
        },
        ":disabled": {
            background: color.buttons.primaryDisabledColor,
            cursor: "default"
        }
    },
    button_styleSecondary: {
        background: color.buttons.secondaryColor,
        borderColor: color.buttons.secondaryBorder,
        ":active": {
            background: color.buttons.secondaryActiveColor,
            borderColor: color.buttons.secondaryActiveBorder
        },
        ":hover": {
            background: color.buttons.secondaryHoverColor,
            borderColor: color.buttons.secondaryHoverBorder
        },
        ":disabled": {
            background: color.buttons.secondaryDisabledColor,
            borderColor: color.buttons.secondaryDisabledBorder,
            cursor: "default"
        }
    },
    button_styleSelect: {
        background: color.buttons.selectSecondaryColor,
        borderColor: color.buttons.selectColor,
        ":active": {
            background: color.buttons.selectSecondaryColor,
            borderColor: color.buttons.selectActiveColor
        },
        ":hover": {
            background: color.buttons.selectSecondaryColor,
            borderColor: color.buttons.selectHoverColor
        },
        ":disabled": {
            background: color.buttons.selectSecondaryColor,
            borderColor: color.buttons.selectDisabledColor,
            cursor: "default"
        },
        ":focus": {
            outline: "none",
            boxShadow: "0 0 2px 2px " + color.buttons.selectColor
        }
    },
    button_styleLuxury: {
        borderWidth: 1
    },
    button_styleInverse: {
        background: color.buttons.inverseColor,
        ":active": {
            borderColor: color.buttons.inverseActiveColor
        },
        ":hover": {
            background: color.buttons.inverseHoverColor
        },
        ":disabled": {
            background: color.buttons.inverseDisabledColor,
            cursor: "default"
        }
    },
    button_styleSecondaryInverse: {
        background: color.buttons.secondaryColor,
        borderColor: color.buttons.secondaryInverseBorder,
        ":active": {
            background: color.buttons.secondaryColor,
            borderColor: color.buttons.secondaryInverseActiveBorder
        },
        ":hover": {
            background: color.buttons.secondaryColor,
            borderColor: color.buttons.secondaryInverseHoverBorder
        },
        ":disabled": {
            background: color.buttons.secondaryColor,
            borderColor: color.buttons.secondaryInverseDisabledBorder,
            cursor: "default"
        }
    },
    button_styleDefaultSmall: {
        background: color.buttons.defaultSmallColor,
        ":active": {
            background: color.buttons.defaultSmallActiveColor
        },
        ":hover": {
            background: color.buttons.defaultSmallHoverColor
        },
        ":disabled": {
            background: color.buttons.defaultSmallDisabledColor
        }
    },
    button_stylePrimarySmall: {
        background: color.buttons.primarySmallColor,
        ":active": {
            background: color.buttons.primarySmallActiveColor
        },
        ":hover": {
            background: color.buttons.primarySmallHoverColor
        },
        ":disabled": {
            background: color.buttons.primarySmallDisabledColor
        }
    },
    button_styleSecondarySmall: {
        borderColor: color.buttons.secondarySmallBorder,
        background: color.buttons.secondaryColor,
        ":active": {
            borderColor: color.buttons.secondarySmallActiveBorder,
            background: color.buttons.secondaryColor
        },
        ":hover": {
            borderColor: color.buttons.secondarySmallHoverBorder,
            background: color.buttons.secondaryColor
        },
        ":disabled": {
            borderColor: color.buttons.secondarySmallDisabledBorder,
            background: color.buttons.secondaryColor
        }
    },
    button_styleSelectSmall: {
        background: color.buttons.selectSecondaryColor,
        borderColor: color.buttons.selectColor,
        ":active": {
            background: color.buttons.selectSecondaryColor,
            borderColor: color.buttons.selectActiveColor
        },
        ":hover": {
            background: color.buttons.selectSecondaryColor,
            borderColor: color.buttons.selectHoverColor
        },
        ":disabled": {
            background: color.buttons.selectSecondaryColor,
            borderColor: color.buttons.selectDisabledColor,
            cursor: "default"
        }
    },
    button_shadowLevel1: {
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
    },
    button_shadowLevel2: {
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.05)"
    },
    button_shadowLevel3: {
        boxShadow: "0 3px 9px 3px rgba(0, 0, 0, 0.05)"
    },
    icon: {
        display: "inline-block",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    icon_size_default: {
        fontSize: 3 * unit
    },
    icon_size_small: {
        fontSize: 2 * unit
    },
    icon_styleDefault: {
        color: color.buttons.defaultText
    },
    icon_styleSecondary: {
        color: color.buttons.secondaryText
    },
    icon_styleSecondaryDisabled: {
        color: color.buttons.secondaryDisabledText
    },
    icon_styleSelect: {
        color: color.buttons.selectColor
    },
    icon_styleSelectDisabled: {
        color: color.buttons.selectDisabledColor
    },
    icon_styleInverse: {
        color: color.buttons.inverseText
    },
    icon_styleSecondaryInverse: {
        color: color.buttons.secondaryInverseText
    },
    icon_styleSecondaryInverseDisabled: {
        color: color.buttons.secondaryInverseDisabledBorder
    },
    icon_styleSecondarySmall: {
        color: color.buttons.secondarySmallText
    },
    icon_styleSelectSmall: {
        color: color.buttons.selectColor
    },
    icon_styleSelectSmallDisabled: {
        color: color.buttons.selectDisabledColor
    },
    icon_styleSecondarySmallDisabled: {
        color: color.buttons.secondarySmallDisabledText
    }
}))(FlatButton)