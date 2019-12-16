import React from 'react';
import PropTypes from 'prop-types';

import WrappedComponent from '../WrappedComponent/WrappedComponent';
import KeyDown from '../KeyDown/KeyDown';
import KeyDownHandler from '../KeyDownHandler/KeyDownHandler';
import ButtonOrLink from '../UI/ButtonOrLink/ButtonOrLink';

import { css, withStyles } from '../../config/withStyles';

function isFocusMenu(props) {
    return props.menu && props.focused
}

class NavigationLink extends React.Component {

    state = {
        containerWidth: null,
        isActive: false,
        isHovered: false,
        isFocused: false,
        autoLoaded: false
    }
    
    componentDidMount() {
        isFocusMenu(this.props) && this.updateWidth()
    }

    componentWillReceiveProps(nextProps) {
        const e = this;
        isFocusMenu(nextProps) && !isFocusMenu(this.props) && this.updateWidth();
        if (nextProps.activeOnLoad && !this.state.autoLoaded) {
            this.setState({autoLoaded: !0});
            setTimeout(function() {
                nextProps.onActive(nextProps.name),
                setTimeout(function() {
                    e.autoDismiss()
                }, 5e3)
            });
        }
    }
     
    setContainerNodeRef = (containerNode) => {        
        this.containerNode = containerNode
    }
    
    setButtonOrARef = e => {
        this.buttonOrANode = e
    }

    handleMouseEnter = event => {
        const { onHover, focusOnHover, hoverToOpenMenu, onActive, name } = this.props;
        this.setState({isHovered: true});
        onHover(event);
        if (focusOnHover || hoverToOpenMenu) {
            onActive(name);
        }
    }
    
    handleMouseLeave = () => {
        const { focusOnHover, dropDownMenuActive, hoverToOpenMenu, onActive} = this.props;
        this.setState({isHovered: false});
        if ((focusOnHover && !dropDownMenuActive) || hoverToOpenMenu) {
            onActive(null);
        }
    }
    
    handleMouseDown = () => {
        this.setState({isActive: true});
    }
    
    handleMouseUp = () => {
        this.setState({isActive: false});
    }
    
    handleFocus = () => {
        this.setState({isFocused: true});
    }
    
    handleBlur = () => {
        this.setState({isFocused: false});
    }

    handleClick = event => {
        const { onPress, focusOnHover, menu, clickToOpenMenu, focusOnClick, focused, onActive } = this.props;
        onPress(event);
        !focusOnHover && menu && event.preventDefault();
        clickToOpenMenu && ((!focusOnHover || focusOnClick) && !focused) && onActive(this.props.name);
    }
     
    handleOnMenuEscape = () => {
        (0, this.props.onMenuEscape)(),
        this.buttonOrANode && this.buttonOrANode.focus(),
        this.handleFocus()
    }
    
    updateWidth() {
        this.setState({containerWidth: this.containerNode.getBoundingClientRect().width});
    }
        
    autoDismiss = () => {
        if (this.props.focused) {
            this.props.onActive(null);
        }
    }
     
    removeFocusRing = () => {
        document.activeElement.blur();
    }
    
    render() {
        return  (
            <div {...css(this.props.styles.container)}>
                <WrappedComponent
                    onOutsideClick={this.props.onOutsideClick}
                    disabled={!isFocusMenu(this.props) || !this.props.clickToOpenMenu}>
                    <div 
                        ref={this.setContainerNodeRef}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        onMouseUp={this.removeFocusRing}>
                        <ButtonOrLink /*{babelHelpers.extends({}, W,*/
                            id={this.props.id}
                            href={(!this.props.menu || this.props.focusOnHover) ? this.props.href : null}
                            removeOutlineOnPress={!0}
                            ariaLabel={this.props.accessibilityLabel}
                            buttonAnchorRef={this.setButtonOrARef}
                            onMouseDown={this.handleMouseDown}
                            onMouseUp={this.handleMouseUp}
                            onDragEnd={this.handleMouseUp}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            onClick={this.handleClick}
                            openInNewWindow={this.props.href && this.props.openLinkInNewWindow}
                            ariaExpanded={void 0 !== this.props.menu ? isFocusMenu(this.props) : null}
                            ariaHasPopup={void 0 !== this.props.menu}
                            ariaControls={this.props.ariaControlsId}
                            /*o(this.props.dataAttrs),*/
                            {...css(
                                this.props.styles.link,
                                this.props.isFocused && this.props.styles.link_focused,
                                !this.props.sticky && this.props.colorTheme === 'Light' && this.props.styles.link_light,
                                !this.props.sticky && this.props.colorTheme === 'Dark' && this.props.styles.link_dark
                            )}> 
                            <div {...css(
                                    this.props.styles.wrapper,
                                    this.props.styles.underline,
                                    this.props.isHovered && this.props.styles.underline_default,
                                    this.props.isHovered && ((!this.props.sticky && this.props.colorTheme === 'Light') || (!this.props.sticky && this.props.colorTheme === 'Dark')) && this.props.styles.underline_currentColor,
                                    (this.props.isActive || isFocusMenu(this.props)) && this.props.styles.underline_active,
                                    !this.props.sticky && this.props.floating && this.props.styles.underline_none,
                                    this.props.selected && !this.props.sticky && this.props.colorTheme === 'Light' && this.props.styles.underline_light_selected,
                                    this.props.selected && !(!this.props.sticky && this.props.colorTheme === 'Light') && this.props.styles.underline_selected
                                    )}>
                                <div {...css(
                                        this.props.styles.content,
                                        this.props.styles.underline,
                                        !this.props.sticky && this.props.floating && this.props.isHovered && this.props.styles.underline_default,
                                        !this.props.sticky && this.props.floating && this.props.isHovered && ((!this.props.sticky && this.props.colorTheme === 'Light') || (!this.props.sticky && this.props.colorTheme === 'Dark')) && this.props.styles.underline_currentColor,
                                        !this.props.sticky && this.props.floating && (this.props.isActive || isFocusMenu(this.props)) && this.props.styles.underline_active,
                                        this.props.isFocused && !this.props.isActive && this.props.styles.content_focused,
                                        this.props.isFocused && !this.props.isActive && !this.props.sticky && this.props.colorTheme === 'Light' && this.props.styles.content_focused_light
                                    )}> 
                                    {this.props.children} 
                                    {/*<WrappedComponent
                                        visible={this.props.hasNotification}
                                        dark={!this.props.sticky && this.props.colorTheme === 'Dark'}
                                    light={!this.props.sticky && this.props.colorTheme === 'Light'} />*/}
                                </div>
                            </div>
                        </ButtonOrLink>    
                        {isFocusMenu(this.props) &&
                            <div {...css(this.props.styles.menu)}>
                                <KeyDown 
                                    floating={!this.props.sticky && this.props.floating}
                                    colorFloating={this.props.colorFloating}
                                    hideCaret={this.props.hideMenuCaret}
                                    menuWidth={this.props.menuWidth}
                                    parentWidth={this.state.containerWidth}>
                                    <KeyDownHandler 
                                        keyName='Escape'
                                        handler={this.handleOnMenuEscape}>
                                        {this.props.menu}
                                    </KeyDownHandler>
                                </KeyDown>
                            </div>
                        }
                    </div>
                </WrappedComponent>
            </div>
        )
    }
}

NavigationLink.propTypes = {
    id: PropTypes.string,
    ariaControlsId: PropTypes.string,
    accessibilityLabel: PropTypes.string,
    children: PropTypes.node,
    clickToOpenMenu: PropTypes.bool,
    hoverToOpenMenu: PropTypes.bool,
    dataAttrs: PropTypes.object,
    floating: PropTypes.bool,
    colorFloating: PropTypes.bool,
    focused: PropTypes.bool,
    focusOnHover: PropTypes.bool,
    focusOnClick: PropTypes.bool,
    dropDownMenuActive: PropTypes.bool,
    hasNotification: PropTypes.bool,
    hideMenuCaret: PropTypes.bool,
    href: PropTypes.string,
    menu: PropTypes.node,
    menuWidth: PropTypes.number,
    name: PropTypes.string.isRequired,
    onActive: PropTypes.func,
    onMenuEscape: PropTypes.func,
    onPress: PropTypes.func,
    onHover: PropTypes.func,
    colorTheme: PropTypes.string,
    onOutsideClick: PropTypes.func,
    openLinkInNewWindow: PropTypes.bool,
    selected: PropTypes.bool,
    activeOnLoad: PropTypes.bool
}

NavigationLink.defaultProps = {
    accessibilityLabel: null,
    ariaControlsId: null,
    clickToOpenMenu: !0,
    hoverToOpenMenu: !1,
    dataAttrs: null,
    focusOnHover: !1,
    focusOnClick: !1,
    dropDownMenuActive: !1,
    focused: !1,
    hasNotification: null,
    hideMenuCaret: !1,
    id: null,
    menuWidth: null,
    onPress: () => {
        return;
    },
    onActive: () => {
        return;
    },
    onMenuEscape: () => {
        return;
    },
    onHover: () => {
        return;
    },
    onOutsideClick: () => {
        return;
    },
    openLinkInNewWindow: !1,
    selected: !1,
    activeOnLoad: !1,
    colorTheme: null,
    colorFloating: !1
}

export default withStyles(({ color, font, responsive, unit }) => ({
    container: {
        position: "relative"
    },
    link: {
        appearance: "none",
        background: "transparent",
        border: "none",
        color: "inherit",
        display: "inline-block",
        height: 64,
        lineHeight: "64px",
        textDecoration: "none",
        margin: 0,
        position: "relative",
        padding: "0 " + unit + "px",
        whiteSpace: "nowrap",
        [responsive.mediumAndAbove]: {
            height: 80,
            lineHeight: "80px"
        }
    },
    link_focused: {
        ":focus": {
            outline: "none"
        }
    },
    link_light: {
        color: color.white
    },
    link_dark: {
        color: color.core.hof
    },
    underline: {
        borderBottom: "2px solid " + String(color.clear)
    },
    underline_default: {
        borderBottomColor: color.core.foggy
    },
    underline_currentColor: {
        borderBottomColor: "currentColor"
    },
    underline_active: {
        borderBottomColor: color.clear
    },
    underline_none: {
        borderBottom: "none"
    },
    underline_selected: {
        borderBottom: "2px solid " + color.core.babu
    },
    underline_light_selected: {
        borderBottom: "2px solid " + color.white
    },
    wrapper: {
        height: "100%",
        verticalAlign: "middle",
        boxSizing: "border-box"
    },
    content: {
        display: "inline-block",
        padding: unit,
        verticalAlign: "middle",
        lineHeight: 1
    },
    content_focused: {
        borderRadius: "3px",
        boxShadow: "0 0 1px 1px " + color.core.foggy
    },
    content_focused_light: {
        boxShadow: "0 0 1px 1px " + color.white
    },
    menu: {
        position: "absolute",
        top: "100%",
        right: 0,
        paddingTop: 3 * unit,
        marginTop: 3 * -unit,
        width: 950,
        zIndex: -1
    }
}))(NavigationLink);