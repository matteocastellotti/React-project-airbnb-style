import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';
import NavbarBrand from './NavbarBrand';
import FlexBar from '../UI/FlexBar/FlexBar';
import ShowAt from '../UI/ShowAt/ShowAt';

import { css, withStyles } from '../../config/withStyles';

class Navbar extends React.Component {
      
    state = {
        navigationIsHidden: this.props.initiallyHideNavigation
    }
    
    componentDidMount() {
        if (this.props.initiallyHideNavigation && !this.props.hideNavigation) { 
            this.setState({navigationIsHidden: false});
        }
    }
    
    handleFlyoutMenuKeyDown = event => {
        "Escape" === event.key && this.props.onPressLogo(event);
    }
    
    render() {
        var brand = null;
        if (!this.props.hideLogo) {
            if (this.props.logo) {
                brand = <NavbarBrand />;
            } else {
                var M = (
                    <NavbarBrand
                        text={this.props.logoText}
                        onPress={this.props.onFlyoutMenuToggle ? this.props.onFlyoutMenuToggle : this.props.onPressLogo}
                        menuIndicatorIsActive={this.props.flyoutMenuIsOpen}
                        disableFlyoutMenu={this.props.disableFlyoutMenu} />
                )
                brand = (
                    <div>
                        <div {...css(this.props.styles.logoContainer)}>
                            {M}
                        </div>
                        <div 
                            {...css(
                                this.props.styles.flyoutMenuMask,
                                this.props.flyoutMenuIsOpen && this.props.flyoutMenuMask_visible
                            )} /> 
                        <div {...css(this.props.styles.flyoutMenuContainer)}>
                            {this.props.flyoutMenu}
                        </div>
                    </div>
                )
            }
        }
        return ( 
            <header role="banner"
                {...css(
                    this.props.styles.container,
                    this.props.hidden && this.props.styles.container_hidden,
                    this.props.flyoutMenuIsOpen && this.props.styles.container_withFlyout
                )}> 
                {this.props.flyoutMenuIsOpen && 
                    <div 
                        target="window"
                        type="keydown"
                        onEvent={this.handleFlyoutMenuKeyDown} /> 
                }
                <div
                    {...css(
                        this.props.styles.content,
                        this.props.sticky && this.props.styles.content_sticky,
                        !this.props.sticky && this.props.floating && this.props.styles.content_floating,
                        (this.props.suppressBorders || this.props.suppressBottomBorder) && this.props.styles.content_suppressBorders, 
                        this.props.useTransparentBackground && this.props.styles.content_transparent
                    )}>
                    <FlexBar
                        align="middle"
                        before={brand}
                        after={
                            !this.props.hideNavigation && !this.state.navigationIsHidden && 
                                <ShowAt breakpoint="largeAndAbove"> 
                                    <Navigation
                                        colorTheme={this.props.colorTheme} />
                                </ShowAt>
                            }>
                            {!this.props.hideSearch && 
                                <div
                                    {...css(
                                        this.props.styles.searchBar,
                                        this.props.floating && this.props.styles.searchBar_floating,
                                        this.props.suppressBorders && this.props.styles.searchBar_suppressBorders
                                    )}>
                                    {this.props.searchSettings}
                                </div>
                            }
                    </FlexBar>
                </div>
                {!this.props.floating && this.props.sticky && 
                    <div {...css(this.props.styles.content_stickyPlaceholder)} />
                }
            </header>                      
        )
    }
}

Navbar.propTypes = {
    children: PropTypes.node,
    floating: PropTypes.bool,
    hidden: PropTypes.bool,
    sticky: PropTypes.bool,
    hideLogo: PropTypes.bool,
    hideNavigation: PropTypes.bool,
    hideSearch: PropTypes.bool,
    suppressBorders: PropTypes.bool,
    suppressBottomBorder: PropTypes.bool,
    useTransparentBackground: PropTypes.bool,
    forceSearchBarOnStickyHeader: PropTypes.bool,
    searchReplacement: PropTypes.node,
    initiallyHideNavigation: PropTypes.bool,
    searchSettings: PropTypes.object,
    logoText: PropTypes.string,
    logo: PropTypes.node,
    onPressLogo: PropTypes.func,
    flyoutMenu: PropTypes.node,
    flyoutMenuIsOpen: PropTypes.bool,
    disableFlyoutMenu: PropTypes.bool,
    colorTheme: PropTypes.string
}

Navbar.defaultProps = {
    floating: false,
    sticky: false,
    hideLogo: false,
    hideNavigation: false,
    hideSearch: false,
    suppressBorders: false,
    forceSearchBarOnStickyHeader: false,
    searchReplacement: null,
    suppressBottomBorder: false,
    initiallyHideNavigation: false,
    logoText: null,
    logo: null,
    disableFlyoutMenu: false,
    useTransparentBackground: false,
    colorTheme: null
}

export default withStyles(({ color, unit }) => ({
    container: {
        position: "relative",
        zIndex: 5
    },
    container_withFlyout: {
        zIndex: 10
    },
    container_hidden: {
        display: "none"
    },
    content: {
        backgroundColor: color.white,
        boxShadow: "0 1px 0 " + color.divider
    },
    content_stickyPlaceholder: {
        height: 64
    },
    content_floating: {
        backgroundColor: "transparent",
        boxShadow: "none",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
    },
    content_sticky: {
        backgroundColor: color.white,
        borderBottom: "1px solid " + color.panelBorder,
        boxShadow: "none",
        position: "fixed",
        width: "100%"
    },
    content_transparent: {
        backgroundColor: "transparent",
        boxShadow: "0"
    },
    content_suppressBorders: {
        borderBottom: "none",
        boxShadow: "none"
    },
    searchBar: {
        borderLeft: "1px solid " + color.accent.hrGray
    },
    searchBar_floating: {
        borderLeftColor: "transparent"
    },
    searchBar_suppressBorders: {
        borderLeftColor: "transparent"
    },
    logoContainer: {
        position: "relative",
        zIndex: 20
    },
    flyoutMenuContainer: {
        position: "relative",
        zIndex: 10
    },
    flyoutMenuMask: {
        height: 64,
        width: "100%",
        backgroundColor: color.white,
        position: "absolute",
        top: 0,
        left: 0,
        transform: "translateY(" + -64 + "px)",
        transitionDuration: "0.05s",
        transitionProperty: "transform",
        transitionTimingFunction: "ease-out",
        transitionDelay: "0.3s",
        zIndex: 15
    },
    flyoutMenuMask_visible: {
        transform: "translateY(0)",
        transitionDelay: "0s"
    }
}))(Navbar);