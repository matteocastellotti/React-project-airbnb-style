import React from 'react';
import PropTypes from 'prop-types';
import PropTypes2 from 'airbnb-prop-types';

import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';
import { css, withStyles } from '../../../config/withStyles';

class Button extends React.Component {
    render() {
        const B = this.props.brand === "luxury"
        let z = null;
        if (this.props.beforeIcon) {
            /*z = React.createElement(S.default, {
                    centered: !0,
                    before: React.cloneElement(this.props.beforeIcon,
                                {
                                    color: this.props.inverse ? this.props.beforeIcon.props.color : undefined,
                                    size: this.props.small ? 15 : 18
                                }
                            ),
                            spaceBetween: this.props.hideText ? 0 : 1.5
                },
                !this.props.hideText && this.props.children)*/
        } else if (this.props.afterIcon) {
            /*z = React.createElement(S.default,
                {
                    centered: !0,
                    after: React.cloneElement(this.props.afterIcon, 
                                {
                                    color: this.props.inverse ? this.props.afterIcon.props.color : undefined,
                                    size: this.props.small ? 15 : 18
                                }
                            ),
                            spaceBetween: this.props.hideText ? 0 : 1.5
                },
                !this.props.hideText && this.props.children)*/
        } else if (!this.props.hideText) {
            z = this.props.children;
        }

        return (
            <ButtonOrLink
                disabled={this.props.disabled}
                onClick={this.props.onPress}
                type={this.props.type}
                href={this.props.href}
                openInNewWindow={this.props.openInNewWindow}
                ariaDescribedBy={this.props.ariaDescribedBy}
                buttonAnchorRef={this.props.buttonRef}
                velouteId={this.props.velouteId}
                {...css(
                    this.props.styles.container,
                    !this.props.rectangular && !B && this.props.styles.container_rounded,
                    this.props.block ? this.props.styles.container_block : this.props.styles.container_notBlock,
                    this.props.small ? this.props.styles.container_sizeSmall : this.props.styles.container_sizeRegular,
                    this.props.large && this.props.styles.container_sizeLarge,
                    this.props.compact && this.props.styles.container_sizeCompact,
                    //this.props.brand === "luxury" && this.props.styles.container_luxury,
                    this.props.shadowLevel === 1 && this.props.styles.container_shadowLevel1,
                    this.props.shadowLevel === 2 && this.props.styles.container_shadowLevel2,
                    this.props.shadowLevel === 3 && this.props.styles.container_shadowLevel3,
                    !this.props.inverse && this.props.styles.container_styleDefault,
                    !this.props.inverse && this.props.primary && this.props.styles.container_stylePrimary,
                        //this.props.brand === "select" && this.props.styles.container_styleSelect,
                    !this.props.inverse && this.props.secondary && !this.props.inverse && this.props.styles.container_styleSecondary,
                        //this.props.brand === "select" && this.props.secondary && this.props.styles.container_styleSelectSecondary,
                    !this.props.inverse && this.props.mono && this.props.styles.container_styleMono,
                    this.props.inverse && this.props.styles.container_styleInverse,
                    this.props.inverse && this.props.secondary && this.props.styles.container_styleSecondaryInverse,
                    this.props.small && !this.props.inverse && this.props.styles.container_styleDefaultSmall,
                    this.props.small && !this.props.inverse && this.props.primary && this.props.styles.container_stylePrimarySmall,
                            //this.props.brand === "select" && this.props.styles.container_styleSelect,
                    this.props.small && !this.props.inverse && this.props.secondary && !this.props.inverse && this.props.styles.container_styleSecondarySmall,
                            //this.props.brand === "select" && this.props.secondary && this.props.styles.container_styleSelectSecondary,
                    this.props.small && !this.props.inverse && this.props.mono && this.props.styles.container_styleMonoSmall
                )}> 
                {/*this.props.loading && React.createElement(w.a, {
                        light: !this.props.inverse && !this.props.mono && !this.props.secondary || this.props.secondary && this.props.inverse,
                        dark: this.props.mono})
                        React.createElement(O.default, null, z)
                */}
                <span 
                    {...css(
                        this.props.styles.text,
                        this.props.styles.text_sizeRegular,
                        this.props.small && this.props.styles.text_sizeSmall,
                        this.props.large && this.props.styles.text_sizeLarge,
                        this.props.loading && this.props.styles.text_hidden,
                        this.props.nowrap && this.props.styles.text_noWrap,
                        !this.props.inverse && this.props.styles.text_styleDefault,
                        !this.props.inverse && this.props.disabled && this.props.styles.text_styleDefaultDisabled,
                        !this.props.inverse && this.props.primary && this.props.styles.text_stylePrimary,
                        !this.props.inverse && this.props.primary && this.props.disabled && this.props.styles.text_stylePrimaryDisabled,
                        !this.props.inverse && this.props.secondary && this.props.styles.text_styleSecondary,
                        !this.props.inverse && this.props.secondary && this.props.disabled && this.props.styles.text_styleSecondaryDisabled,
                            //this.props.brand === "select" && this.props.styles.text_styleSelect,
                            //this.props.brand === "select" && this.props.secondary && this.props.styles.text_styleSelectSecondary,
                            //this.props.brand === "select" && this.props.secondary && this.props.disabled && this.props.styles.text_styleSelectSecondaryDisabled,
                        !this.props.inverse && this.props.mono && this.props.styles.text_styleMono,
                        !this.props.inverse && this.props.mono && this.props.disabled && this.props.styles.text_styleMonoDisabled,
                        this.props.inverse && this.props.styles.text_styleInverse,
                        this.props.inverse && this.props.secondary && this.props.styles.text_styleSecondaryInverse,
                        this.props.inverse && this.props.secondary && this.props.disabled && this.props.styles.text_styleSecondaryInverseDisabled,
                        this.props.small && !this.props.inverse && this.props.secondary && this.props.styles.text_styleSecondarySmall,
                        this.props.small && !this.props.inverse && this.props.secondary && this.props.disabled && this.props.styles.text_styleSecondarySmallDisabled
                            //this.props.brand === "select" && this.props.secondary && this.props.styles.text_styleSelectSecondary,
                            //this.props.brand === "select" && this.props.secondary && this.props.disabled && this.props.styles.text_styleSelectSecondaryDisabled
                    )}>
                    {z}
                </span>
            </ButtonOrLink>
        )
    }
}

const C = (1 + Math.sqrt(5)) / 2     
const P = PropTypes2.mutuallyExclusiveTrueProps("primary", "secondary", "mono");
      
Button.propTypes = {
    onPress: PropTypes.func,
    block: PropTypes.bool,
    type: PropTypes.oneOf(["button", "submit"]),
    compact: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    beforeIcon: PropTypes.node,
    afterIcon: PropTypes.node,
    inverse: PropTypes.bool,
    primary: P,
    secondary: P,
    mono: P,
    href: PropTypes.string,
    openInNewWindow: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    rectangular: PropTypes.bool,
    ariaDescribedBy: PropTypes.string,
    noWrap: PropTypes.bool,
    buttonRef: PropTypes.func,
    velouteId: PropTypes.string,
    hideText: PropTypes.bool,
    shadowLevel: PropTypes.oneOf([0, 1, 2, 3])
}

Button.defaultProps = {
    onPress: () => {
        return;
    },
    block: false,
    compact: false,
    type: "button",
    disabled: false,
    loading: false,
    inverse: false,
    primary: false,
    secondary: false,
    mono: false,
    openInNewWindow: false,
    small: false,
    large: false,
    rectangular: false,
    ariaDescribedBy: null,
    noWrap: false,
    buttonRef: () => {
        return;
    },
    velouteId: null,
    hideText: false,
    shadowLevel: 0
}

export default withStyles(({ font, color, unit }) => ({
    container: {
        cursor: "pointer",
        transition: "background 0.3s, border-color 0.3s",
        position: "relative",
        display: "inline-block",
        textAlign: "center",
        textDecoration: "none"
    },
    container_rounded: {
        borderRadius: unit / 2
    },
    container_block: {
        width: "100%"
    },
    container_notBlock: {
        width: "auto"
    },
    container_shadowLevel1: {
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
    },
    container_shadowLevel2: {
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.05)"
    },
    container_shadowLevel3: {
        boxShadow: "0 3px 9px 3px rgba(0, 0, 0, 0.05)"
    },
    container_sizeRegular: Object.assign(
        {}, 
        font.button, 
        font.bold, 
        {
            border: "2px solid " + color.clear,
            paddingTop: 1.5 * unit,
            paddingBottom: 1.5 * unit,
            paddingRight: 3 * unit,
            paddingLeft: 3 * unit,
            minWidth: 6 * C * unit
        }
    ),
    container_sizeSmall: Object.assign(
        {},
        font.buttonSmall,
        font.book,
        {
            border: "1px solid " + color.clear,
            paddingTop: unit,
            paddingBottom: unit,
            paddingRight: 2 * unit,
            paddingLeft: 2 * unit,
            minWidth: 4 * C * unit
        }
    ),
    container_sizeLarge: Object.assign(
        {},
        font.bold,
        {
            paddingTop: 2 * unit,
            paddingBottom: 2 * unit,
            paddingRight: 3.5 * unit,
            paddingLeft: 3.5 * unit,
            minWidth: 8 * C * unit
        }
    ),
    container_sizeCompact: {
        paddingRight: unit,
        paddingLeft: unit
    },
    container_luxury: {
        borderWidth: 1
    },
    container_styleDefault: {
        background: color.buttons.defaultColor,
        borderColor: color.buttons.defaultBorder,
        ":active": {
            background: color.buttons.defaultActiveColor,
            borderColor: color.buttons.defaultActiveBorder
        },
        ":hover": {
            background: color.buttons.defaultHoverColor,
            borderColor: color.buttons.defaultHoverBorder
        },
        ":disabled": {
            background: color.buttons.defaultDisabledColor,
            borderColor: color.buttons.defaultDisabledBorder,
            cursor: "default"
        },
        "::-moz-focus-inner": {
            border: 0,
            padding: 0,
            margin: 0
        },
        ":focus::-moz-focus-inner": {
            border: "1px dotted " + color.white
        }
    },
    container_stylePrimary: {
        background: color.buttons.primaryColor,
        borderColor: color.buttons.primaryBorder,
        ":active": {
            background: color.buttons.primaryActiveColor,
            borderColor: color.buttons.primaryActiveBorder
        },
        ":hover": {
            background: color.buttons.primaryHoverColor,
            borderColor: color.buttons.primaryHoverBorder
        },
        ":disabled": {
            background: color.buttons.primaryDisabledColor,
            borderColor: color.buttons.primaryDisabledBorder,
            cursor: "default"
        },
        "::-moz-focus-inner": {
            border: 0,
            padding: 0,
            margin: 0
        },
        ":focus::-moz-focus-inner": {
            border: "1px dotted " + color.white
        }
    },
    container_styleSelect: {
        background: color.buttons.selectColor,
        borderColor: color.buttons.selectBorder,
        ":active": {
            background: color.buttons.selectActiveColor,
            borderColor: color.buttons.selectBorder
        },
        ":hover": {
            background: color.buttons.selectHoverColor,
            borderColor: color.buttons.selectBorder
        },
        ":disabled": {
            background: color.buttons.selectDisabledColor,
            borderColor: color.buttons.selectBorder,
            cursor: "default"
        },
        "::-moz-focus-inner": {
            border: 0,
            padding: 0,
            margin: 0
        },
        ":focus::-moz-focus-inner": {
            border: "1px dotted "+ color.white
        }
    },
    container_styleSecondary: {
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
        },
        "::-moz-focus-inner": {
            border: 0,
            padding: 0,
            margin: 0
        },
        ":focus::-moz-focus-inner": {
            border: "1px dotted "+ color.white
        }
    },
    container_styleSelectSecondary: {
        background: color.buttons.selectSecondaryColor,
        borderColor: color.buttons.selectSecondaryBorder,
        ":active": {
            background: color.buttons.selectSecondaryColor,
            borderColor: color.buttons.selectSecondaryActiveColor
        },
        ":hover": {
            background: color.buttons.selectSecondaryColor,
            borderColor: color.buttons.selectSecondaryHoverColor
        },
        ":disabled": {
            background: color.buttons.selectSecondaryColor,
            borderColor: color.buttons.selectSecondaryDisabledColor,
            cursor: "default"
        },
        "::-moz-focus-inner": {
            border: 0,
            padding: 0,
            margin: 0
        },
        ":focus::-moz-focus-inner": {
            border: "1px dotted "+ color.white
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
            background: color.buttons.monoColor,
            borderColor: color.buttons.monoBorder
        },
        ":disabled": {
            background: color.buttons.monoColor,
            borderColor: color.buttons.monoDisabledBorder,
            cursor: "default"
        },
        "::-moz-focus-inner": {
            border: 0,
            padding: 0,
            margin: 0
        },
        ":focus::-moz-focus-inner": {
            border: "1px dotted "+ color.white
        }
    },
    container_styleInverse: {
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
    container_styleSecondaryInverse: {
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
        },
        "::-moz-focus-inner": {
            border: 0,
            padding: 0,
            margin: 0
        },
        ":focus::-moz-focus-inner": {
            border: "1px dotted "+ color.white
        }
    },
    container_styleDefaultSmall: {
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
    container_stylePrimarySmall: {
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
    container_styleSecondarySmall: {
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
    container_styleMonoSmall: {
        background: color.buttons.monoColor,
        ":active": {
            background: color.buttons.monoColor
        },
        ":hover": {
            background: color.buttons.monoColor
        },
        ":disabled": {
            background: color.buttons.monoColor
        }
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
    text_styleDefault: {
        color: color.buttons.defaultText
    },
    text_stylePrimary: {
        color: color.buttons.primaryText
    },
    text_styleSecondary: {
        color: color.buttons.secondaryText
    },
    text_styleDefaultDisabled: {
        color: color.buttons.defaultDisabledText
    },
    text_styleSecondaryDisabled: {
        color: color.buttons.secondaryDisabledText
    },
    text_stylePrimaryDisabled: {
        color: color.buttons.primaryDisabledText
    },
    text_styleSelect: {
        color: color.buttons.selectText
    },
    text_styleSelectSecondary: {
        color: color.buttons.selectSecondaryText
    },
    text_styleSelectSecondaryDisabled: {
        color: color.buttons.selectSecondaryDisabledColor
    },
    text_styleMono: {
        color: color.buttons.monoText
    },
    text_styleMonoDisabled: {
        color: color.buttons.monoDisabledText
    },
    text_styleInverse: {
        color: color.buttons.inverseText
    },
    text_styleSecondaryInverse: {
        color: color.buttons.secondaryInverseText
    },
    text_styleSecondaryInverseDisabled: {
        color: color.buttons.secondaryInverseDisabledBorder
    },
    text_styleSecondarySmall: {
        color: color.buttons.secondarySmallText
    },
    text_styleSecondarySmallDisabled: {
        color: color.buttons.secondarySmallDisabledText
    }
}))(Button);