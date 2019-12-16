import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spacing from '../Spacing/Spacing';

import polyglot from '../../../languageProvider';
import { css, withStyles } from '../../../config/withStyles';

class MenuItem extends Component {
      
    handleClick = e => {
        this.props.isActive ? this.props.onDeselect({ shouldResetFilters: false }) : this.props.onSelect(this.props.id);
    }
    
    handleKeyUp = e => {
        if(this.props.isActive && e.keyCode === 38) {
            this.props.onDeselect();
        }
        this.props.isActive || e.keyCode !== 40 || this.props.onSelect(this.props.id);
    }
    
    render() {
        let content = polyglot.phrases[this.props.label];
        if(this.props.labelCount && !this.props.pill) {
            content = (
                <span>
                    {polyglot.phrases[this.props.label]}
                    <Spacing
                        inline={!0}
                        left={.5}>
                        {/*<c.b
                            value={this.props.labelCount}
                        accessibilityLabel={this.props.labelCountA11yLabel} />*/}
                    </Spacing>
                </span>
            )
        } else { 
            if(this.props.labelCount && this.props.pill) {
                content = (
                    <span>
                        {polyglot.phrases[this.props.label]}
                        " · "
                        <span
                            key={"label-count"}
                            aria-label={this.props.labelCountA11yLabel}>
                            {polyglot.phrases[this.props.labelCount]}
                        </span>
                    </span>
                )
            }
        }

        return (
            <div
                {...css(
                    this.props.styles.item,
                    !this.props.pill && this.props.webcot && this.props.styles.item_webcot,
                    this.props.noRightMargin && this.props.styles.item_noRightMargin,
                    this.props.pill && !this.props.forButtonBar && this.props.styles.item_pill
                )}>
                <div disabled={this.props.withAnchor && !this.props.isActive}>
                    <button
                        aria-haspopup={true}
                        aria-expanded={this.props.isActive}
                        aria-controls={"menuItemComponent-" + this.props.id}
                        ref={this.props.forwardedRef}
                        {...css(
                            this.props.styles.noBorder,
                            this.props.pill && this.props.styles.pill,
                            this.props.pill && !this.props.immersive && this.props.styles.pill__hover,
                            this.props.pill && !this.props.immersive && this.props.isActive && this.props.styles.pill__active,
                            this.props.pill && !this.props.immersive && this.props.isSelected && this.props.styles.pill_selected,
                            this.props.pill && this.props.immersive && this.props.styles.pill_immersive,
                            this.props.pill && this.props.immersive && this.props.isActive && this.props.styles.pill_immersive__active,
                            this.props.pill && this.props.immersive && this.props.isSelected && this.props.styles.pill_immersive__active,
                            !this.props.pill && this.props.styles.menuItem,
                            !this.props.pill && this.props.webcot && this.props.styles.menuItem_webcot,
                            !this.props.pill && this.props.isActive && this.props.styles.menuItem_active,
                            !this.props.pill && this.props.isActive && this.props.webcot && this.props.styles.menuItem_webcot_active,
                            !this.props.pill && this.props.isSelected && this.props.styles.selected,
                            !this.props.pill && this.props.immersive && this.props.styles.menuItem_immersive,
                            !this.props.pill && this.props.immersive && this.props.isActive && this.props.styles.menuItem_active_immersive,
                            !this.props.pill && this.props.immersive && this.props.isSelected && this.props.styles.selected_immersive,
                            this.props.forButtonBar && this.props.styles.forButtonBar,
                            this.props.roundedLeft && this.props.styles.roundedLeft,
                            this.props.roundedRight && this.props.styles.roundedRight
                        )}
                        onClick={this.handleClick}
                        onKeyUp={this.handleKeyUp}>
                        <div
                            {...css(
                                this.props.forButtonBar && this.props.isActive && this.props.styles.forButtonBar_label_selected,
                                this.props.styles.label,
                                this.props.labelTruncate && this.props.styles.labelTruncate,
                                this.props.pill && this.props.isActive && this.props.styles.label_pill__active,
                                this.props.pill && this.props.isActive && this.props.immersive && this.props.styles.label_pill__active_immersive,
                                this.props.pill && this.props.isActive && this.props.immersive && this.props.styles.label_pill_luxury__active_immersive
                            )}>
                            {content}
                        </div>
                        {(!this.props.pill || this.props.forButtonBar) && this.props.withChevron && 
                            <span
                                {...css(
                                    this.props.forButtonBar && this.props.styles.forButtonBar,
                                    this.props.styles.chevron,
                                    this.props.babuChevron && this.props.styles.babuChevron,
                                    this.props.immersive && this.props.styles.immersiveChevron,
                                    this.props.immersive && this.props.isActive && this.props.styles.immersiveChevron_active
                                )}>
                                {/*ActiveChevron<l.a isActive={this.props.isActive} />*/}
                            </span>
                        }
                    </button>
                </div>
                <div id={"menuItemComponent-" + this.props.id}>
                    {!!this.props.isActive && this.props.children}
                </div>
            </div>
        )
    }
}

MenuItem.propTypes = {
    babuChevron: PropTypes.bool,
    forwardedRef: PropTypes.func,
    isSelected: PropTypes.bool,
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    immersive: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    isActive: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    onDeselect: PropTypes.func.isRequired,
    labelCount: PropTypes.number,
    labelCountA11yLabel: PropTypes.string,
    labelTruncate: PropTypes.bool,
    noRightMargin: PropTypes.bool,
    pill: PropTypes.bool,
    webcot: PropTypes.bool,
    withAnchor: PropTypes.bool,
    withChevron: PropTypes.bool,
    forButtonBar: PropTypes.bool,
    roundedLeft: PropTypes.bool,
    roundedRight: PropTypes.bool
}

MenuItem.defaultProps = {
    babuChevron: true,
    forwardedRef: () => {
        return;
    },
    immersive: false,
    isSelected: false,
    labelCount: undefined,
    labelCountA11yLabel: "",
    labelTruncate: false,
    noRightMargin: false,
    pill: false,
    webcot: false,
    withAnchor: false,
    withChevron: true,
    forButtonBar: false,
    roundedLeft: false,
    roundedRight: false
}

export default withStyles(({ color, unit, font }) => ({
    item: {
        display: "inline-block",
        position: "relative"
    },
    item_webcot: {
        marginRight: unit
    },
    item_pill: {
        margin: "0 " + .5 * unit + "px 0 " + unit + "px"
    },
    menuItem: {
        appearance: "none",
        cursor: "pointer",
        padding: "0 " + 2.375 * unit + "px",
        display: "inline-block",
        height: 6 * unit,
        color: color.textDark,
        background: "none",
        border: "none",
        borderRight: "1px solid #dce0e0",
        position: "relative",
        verticalAlign: "top",
        ":hover": {
            backgroundColor: color.accent.bgGray,
            borderBottom: "1px solid #dce0e0"
        },
        ":active": {
            outline: 0
        },
        ":focus": {
            outline: "1px solid #2380DD"
        },
        ":after": {
            content: '""',
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            background: color.core.babu,
            height: 2,
            opacity: 0,
            transitionProperty: "opacity",
            transitionDuration: "250ms",
            transitionTimingFunction: "ease-out"
        }
    },
    menuItem_immersive: {
        color: color.black
    },
    forButtonBar: {
        border: "none",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        lineHeight: "16px",
        height: "100%",
        zIndex: 7,
        marginTop: -1,
        paddingTop: unit,
        paddingBottom: unit
    },
    forButtonBar_label_selected: {
        color: color.white
    },
    roundedLeft: {
        borderTopLeftRadius: .5 * unit,
        borderBottomLeftRadius: .5 * unit
    },
    roundedRight: {
        borderTopRightRadius: .5 * unit,
        borderBottomRightRadius: .5 * unit
    },
    pill: Object.assign({}, font.textSmall, {
        background: "none",
        border: "1px solid #dce0e0",
        borderRadius: 4,
        cursor: "pointer",
        display: "inline-block",
        paddingBottom: .75 * unit,
        paddingLeft: 1.5 * unit,
        paddingRight: 1.5 * unit,
        paddingTop: .75 * unit,
        position: "relative",
        textAlign: "center",
        textDecoration: "none",
        width: "auto"
    }),
    pill__hover: {
        ":hover": {
            background: color.accent.bgGray,
            borderColor: color.accent.bgGray
        }
    },
    pill__active: {
        background: color.core.babu,
        border: "1px solid " + color.core.babu,
        ":hover": {
            background: color.dark.babu,
            borderColor: color.dark.babu
        }
    },
    pill_immersive: {
        borderColor: color.white,
        color: color.white
    },
    pill_immersive__active: {
        background: color.white,
        borderColor: color.white,
        color: color.textMuted
    },
    selected: {
        color: color.core.babu
    },
    selected_immersive: {
        color: color.textMuted
    },
    pill_selected: {
        background: color.core.babu,
        border: "1px solid " + color.core.babu,
        color: color.white,
        ":hover": {
            background: color.dark.babu,
            borderColor: color.dark.babu
        }
    },
    menuItem_webcot: Object.assign({}, font.textSmall, {
        color: color.textMuted,
        paddingLeft: 1 * unit,
        paddingRight: 1 * unit,
        height: 4 * unit,
        lineHeight: "32px",
        borderRight: "none",
        borderRadius: .5 * unit,
        ":after": {
            content: void 0
        },
        ":focus": {
            outline: 0
        },
        ":hover": {
            borderBottom: "none"
        }
    }),
    menuItem_active: {
        ":after": {
            opacity: 1
        }
    },
    menuItem_active_immersive: {
        color: color.textMuted
    },
    menuItem_webcot_active: {
        backgroundColor: color.accent.bgGray
    },
    label: {
        display: "table-cell",
        verticalAlign: "middle"
    },
    label_pill__active: {
        color: color.white
    },
    label_pill__active_immersive: {
        color: color.textMuted
    },
    label_pill_luxury__active_immersive: {
        color: color.black
    },
    labelTruncate: {
        maxWidth: 30 * unit,
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    babuChevron: {
        color: color.core.babu
    },
    immersiveChevron: {
        color: color.white
    },
    immersiveChevron_active: {
        color: color.textMuted
    },
    chevron: {
        fontSize: unit,
        display: "table-cell",
        verticalAlign: "middle",
        paddingLeft: unit
    },
    item_noRightMargin: {
        marginRight: 0
    }
}))(MenuItem);