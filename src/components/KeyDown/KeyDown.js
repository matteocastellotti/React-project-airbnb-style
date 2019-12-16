import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../config/withStyles';

var c = 20;
var l = 10;
var p = 950;

const keyDown = props => (
    <div 
        {...css(props.styles.container)}>
        <div 
            {...css(
                props.styles.content,
                !props.floating && props.styles.content_attached,
                props.floating && props.styles.content_floating,
                props.menuWidth && { width: props.menuWidth + "px"}
            )}>
            {props.children}
        </div>
    </div>
)
   
keyDown.propTypes = {
    children: PropTypes.node,
    floating: PropTypes.bool,
    colorFloating: PropTypes.bool,
    hideCaret: PropTypes.bool,
    menuWidth: PropTypes.number,
    parentWidth: PropTypes.number
}

keyDown.defaultProps = {
    children: null,
    floating: !1,
    colorFloating: !1,
    hideCaret: !1,
    menuWidth: null,
    parentWidth: 28 + c
}

export default withStyles(({ color }) => ({ 
    container: {
        position: "absolute",
        width: "100%",
        right: 0
    },
    content: {
        backgroundColor: color.white,
        border: "1px solid " + color.accent.hrGray,
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
        minWidth: 282,
        maxWidth: p,
        minHeight: 60,
        position: "absolute",
        right: 0,
        top: 0
    },
    content_attached: {
        borderTop: "none"
    },
    fang: {
        position: "absolute",
        width: c,
        height: l,
        top: 1 - l
    },
    fangShape: {
        fill: color.white
    },
    colorFangShape: {
        fill: color.buttons.inverseActiveColor
    },
    fangStroke: {
        stroke: color.accent.hrGray,
        fill: "transparent"
    }
}))(keyDown);