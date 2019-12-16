import React from 'react';
import PropTypes from 'prop-types';
import PropTypes2 from 'airbnb-prop-types';

import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';
import { css, withStyles } from '../../../config/withStyles';

class Link extends React.Component {
    render() {
        /*var t = e.css
        , n = e.brand
        , r = e.children
        , o = e.href
        , i = e.onPress
        , a = e.beforeIcon
        , s = e.afterIcon
        , c = e.openInNewWindow
        , l = e.navigation
        , p = e.footer
        , h = e.mono
        , b = e.loading
        , g = e.textAlign
        , v = e.itemPropSameAs
        , y = e.submit
        , S = e.disabled
        , E = e.isExpander
        , C = e.expanded
        , k = e.ariaControls
        , T = e.styles
        , P = e.ampVarsClickType
        , j = e.ampReplace
        , A = e.linkRef
        , x = e.velouteId
        , I = e.inlineBlockWithIcon
        , R = e.inverse;*/
    if (this.props.loading) {
        return (
            <div {...css(this.props.styles.loader)}>
                {/*React.createElement(d.a, {inline: !0})*/}
            </div>
        )
    }

    var N = undefined;
    if (this.props.beforeIcon) {
        //N = React.createElement(m.default, {before: this.props.beforeIcon}, this.props.children);
    } else if(this.props.afterIcon) {
        //N = React.createElement(m.default, {after: this.props.afterIcon}, this.props.children);
    } else {
        N = this.props.children;
    }

    //var D = n === _.c
    //var H = n === _.b
    return (
        <ButtonOrLink
            href={this.props.href}
            onClick={(event) => {
                this.props.disabled ? event.preventDefault() : this.props.onPress(event)
            }}
            openInNewWindow={this.props.openInNewWindow}
            itemProp={this.props.itemPropSameAs ? "sameAs" : null}
            type={this.props.submit ? "submit" : "button"}
            disabled={this.props.disabled}
            ariaControls={this.props.ariaControls}
            ariaDisabled={this.props.disabled}
            ariaExpanded={this.props.isExpander ? this.props.expanded : undefined}
            removeOutlineOnPress={true}
            buttonAnchorRef={this.props.linkRef}
            velouteId={this.props.velouteId}
            {...css(
                this.props.styles.component,
                this.props.styles.component_interactions,
                (!this.props.href || this.props.disabled) && this.props.styles.component_button,
                (!this.props.href || this.props.disabled) && this.props.textAlign === "center" && this.props.styles.button_center_align,
                (!this.props.href || this.props.disabled) && this.props.textAlign === "left" && this.props.styles.button_left_align,
                (!this.props.href || this.props.disabled) && this.props.textAlign === "right" && this.props.styles.button_right_align,
                //D && this.props.styles.color_select,
                //H && !this.props.navigation && this.props.styles.component_luxury,
                this.props.disabled && this.props.styles.component_disabled,
                this.props.navigation && this.props.styles.navigation,
                this.props.inverse && this.props.styles.color_inverse,
                this.props.footer && this.props.styles.footer,
                this.props.mono && this.props.styles.mono,
                this.props.inlineBlockWithIcon && (!!this.props.beforeIcon || !!this.props.afterIcon) && this.props.styles.component_inlineBlock
            )}>
            {N}
        </ButtonOrLink>
        )
    }
}

Link.propTypes = {
    href: PropTypes.string,
    submit: PropTypes2.mutuallyExclusiveProps(PropTypes.bool, "href", "submit"),
    onPress: PropTypes.func,
    beforeIcon: PropTypes.node,
    afterIcon: PropTypes.node,
    openInNewWindow: PropTypes.bool,
    navigation: PropTypes2.mutuallyExclusiveTrueProps("navigation", "footer", "mono"),
    footer: PropTypes2.mutuallyExclusiveTrueProps("navigation", "footer", "mono"),
    mono: PropTypes2.mutuallyExclusiveTrueProps("navigation", "footer", "mono"),
    loading: PropTypes.bool,
    textAlign: PropTypes.oneOf(["center", "left", "right"]),
    itemPropSameAs: PropTypes.bool,
    disabled: PropTypes.bool,
    isExpander: PropTypes.bool,
    expanded: PropTypes.bool,
    ariaControls: PropTypes.string,
    linkRef: PropTypes.func,
    ampVarsClickType: PropTypes.string,
    ampReplace: PropTypes.string,
    velouteId: PropTypes.string,
    inlineBlockWithIcon: PropTypes.bool,
    inverse: PropTypes.bool
}

Link.defaultProps = {
    onPress: () => {
        return;
    },
    openInNewWindow: false,
    navigation: false,
    footer: false,
    mono: false,
    loading: false,
    textAlign: "left",
    itemPropSameAs: false,
    submit: false,
    disabled: false,
    isExpander: false,
    expanded: false,
    ariaControls: null,
    ampVarsClickType: null,
    ampReplace: null,
    linkRef: () => {
        return;
    },
    velouteId: null,
    inlineBlockWithIcon: false,
    inverse: false
}

export default withStyles(({ color, font, unit }) => ({
    color_select: {
        color: color.core.hackberry,
        ":active": {
            color: color.buttons.selectActiveColor
        }
    },
    color_inverse: {
        color: color.white,
        ":active": {
            color: color.textLinkInverseActive
        }
    },
    component: {
        color: color.textLink,
        font: "inherit",
        fontFamily: font.FONT_FAMILY,
        textDecoration: "none",
        whiteSpace: "nowrap"
    },
    component_interactions: {
        ":hover": {
            textDecoration: "underline"
        },
        ":focus": {
            textDecoration: "underline"
        },
        ":active": {
            color: color.textLinkActive
        }
    },
    component_button: {
        appearance: "none",
        background: "transparent",
        border: 0,
        cursor: "pointer",
        margin: 0,
        padding: 0,
        userSelect: "auto",
        ":active": {
            outline: 0
        }
    },
    component_luxury: {
        textDecoration: "underline"
    },
    button_center_align: {
        textAlign: "center"
    },
    button_left_align: {
        textAlign: "left"
    },
    button_right_align: {
        textAlign: "right"
    },
    component_disabled: {
        color: color.textMuted,
        cursor: "default",
        ":hover": {
            textDecoration: "none"
        },
        ":active": {
            color: color.textMuted
        }
    },
    component_inlineBlock: {
        display: "inline-block"
    },
    navigation: {
        color: color.textLinkNavigation
    },
    footer: {
        color: color.textMuted
    },
    mono: {
        color: color.core.hof,
        textDecoration: "underline"
    },
    loader: {
        display: "inline",
        marginLeft: unit,
        marginRight: unit
    }
}))(Link)