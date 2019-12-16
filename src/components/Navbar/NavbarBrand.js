import React from 'react';
import PropTypes from 'prop-types';

import HideAt from '../UI/HideAt/HideAt';
import ShowAt from '../UI/ShowAt/ShowAt';
import Icon from './Icon';
import Chevron from './Chevron';
import { css, withStyles } from '../../config/withStyles';

class NavbarBrand extends React.Component {
    
    render() {
        const g = (
            <div {...css(this.props.styles.content)}> 
                <div {...css(this.props.styles.logo)}> 
                    <div {...css(this.props.styles.icon)}> 
                        <Icon />
                    </div>
                    {this.props.text && 
                        <div 
                            {...css(
                                this.props.styles.text,
                                this.props.light && this.props.styles.color_light,
                                this.props.dark && this.props.style.color_dark
                            )}> 
                            {this.props.text}
                        </div>
                    }
                </div>
                {!this.props.disableFlyoutMenu && 
                    <HideAt inline={true} breakpoint="largeAndAbove">
                        <div
                            {...css(
                                this.props.styles.menuIndicator,
                                this.props.light && this.props.styles.color_light,
                                this.props.dark && this.props.style.color_dark
                            )}>
                            <Chevron isActive={this.props.menuIndicatorIsActive} />
                        </div>
                    </HideAt>
                }
            </div>
        )
        const v = (
            <a 
                href="/?logo=1" 
                {...css(this.props.styles.container)} 
                aria-label="Menu">
                {g}
            </a>
        )
        return  (
            <div>
                {this.props.disableFlyoutMenu && v} 
                {!this.props.disableFlyoutMenu && 
                    <ShowAt breakpoint="largeAndAbove">
                        {v}
                    </ShowAt> 
                }
                {!this.props.disableFlyoutMenu &&
                    <HideAt breakpoint="largeAndAbove">
                        <button
                            onClick={this.props.onPress}
                            aria-label="Menu"
                            aria-haspopup={!0}
                            {...css(
                                this.props.styles.container,
                                this.props.styles.container_button
                            )}>
                            {g}
                        </button>
                    </HideAt>
                }
            </div>
        )
    }
}

NavbarBrand.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    menuIndicatorIsActive: PropTypes.bool,
    disableFlyoutMenu: PropTypes.bool
}

NavbarBrand.defaultProps = {
    menuIndicatorIsActive: !1,
    disableFlyoutMenu: !1,
    onPress: () => {
        return;
    },
    text: null
}
    
export default withStyles(({ font, color, responsive, unit }) => ({
    container: {
        display: "table-cell"
    },
    container_button: {
        appearance: "none",
        background: "none",
        border: "none",
        padding: 0,
        margin: 0,
        ":focus": {
            outline: "none"
        }
    },
    content: {
        display: "table-cell",
        height: 64,
        position: "relative",
        textAlign: "center",
        textDecoration: "none",
        transition: "0.25s color",
        paddingLeft: 3 * unit,
        paddingRight: 3 * unit,
        verticalAlign: "middle",
        whiteSpace: "nowrap",
        [responsive.mediumAndAbove]: {
            height: 80
        }
    },
    logo: {
        display: "inline-block"
    },
    text: Object.assign({}, font.textLarge, {
        display: "inline-block",
        marginLeft: 1 * unit,
        color: color.core.rausch,
        verticalAlign: "middle"
    }),
    icon: {
        color: color.core.rausch,
        display: "inline-block",
        verticalAlign: "middle",
        fontSize: 34,
        transition: "0.25s color",
        [responsive.small]: {
            fontSize: 34,
            left: "45%"
        }
    },
    menuIndicator: {
        color: font.textMuted,
        display: "inline-block",
        fontSize: 9,
        marginLeft: unit,
        transition: "1s color"
    }
}))(NavbarBrand);