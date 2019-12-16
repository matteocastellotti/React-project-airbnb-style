import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';

class DividerText extends React.Component {
    render() {
        return (
            <div
                {...css(
                    this.props.styles.container,
                    this.props.left && this.props.styles.container_left,
                    this.props.right && this.props.styles.container_right
                )}>
                <span
                    {...css(
                        this.props.styles.content,
                        this.props.left && this.props.styles.content_left,
                        this.props.right && this.props.styles.content_right
                    )}>
                    {this.props.children}
                </span>
            </div>
        )
    }
}

DividerText.propTypes = {
    children: PropTypes.node.isRequired,
    left: PropTypes.bool,
    right: PropTypes.bool
}
      
DividerText.defaultProps = {
    left: false,
    right: false
}
    
export default withStyles(({ color, unit }) => ({
    container: {
        overflow: "hidden",
        textAlign: "center"
    },
    container_left: {
        textAlign: "left"
    },
    container_right: {
        textAlign: "right"
    },
    content: {
        position: "relative",
        padding: 2 * unit,
        "::before": {
            content: "''",
            position: "absolute",
            borderBottom: "1px solid " + color.panelBorder,
            top: "50%",
            right: "100%",
            width: 5e3
        },
        "::after": {
            content: "''",
            position: "absolute",
            borderBottom: "1px solid " + color.panelBorder,
            top: "50%",
            left: "100%",
            width: 5e3
        }
    },
    content_left: {
        paddingLeft: 0
    },
    content_right: {
        paddingRight: 0
    }
}))(DividerText);