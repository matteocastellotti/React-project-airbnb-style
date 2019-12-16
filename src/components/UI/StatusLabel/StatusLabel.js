import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';

class StatusLabel extends React.Component {
    render() {    
        let label = null;
        if (this.props.info || this.props.danger || this.props.warning) {
            label = (
                <div 
                    {...css(
                        this.props.styles.leftColorBar,
                        this.props.info && this.props.style.info,
                        this.props.danger && this.props.style.danger,
                        this.props.warning && this.props.styles.warning
                    )}>
                    <div 
                        {...css(
                            this.props.styles.content,
                            this.props.secondary && this.props.styles.content_secondary,
                            this.props.book && this.props.styles.content_book, 
                            (this.props.info || this.props.danger || this.props.warning) && this.props.style.content_hasColorBar
                        )}>
                        {this.props.children}
                    </div>
                </div>
            )
        }
        return (
            <div 
                {...css(
                    this.props.style.container
                )}>
                {label}
            </div>
        )        
    }
}
    
StatusLabel.propTypes =  {
    children: PropTypes.node.isRequired,
    book: PropTypes.bool,
    secondary: PropTypes.bool,
    info: PropTypes.bool,
    danger: PropTypes.bool,
    warning: PropTypes.bool
}

StatusLabel.defaultProps = {
    children: null,
    info: false,
    danger: false,
    warning: false,
    secondary: false,
    book: false
};

export default withStyles(({ unit, color, font }) => ({
    container: {
        display: "inline-block",
        marginRight: 4,
        verticalAlign: "middle"
    },
    content: Object.assign({},
        color.textMicro,
        color.bold, {
        display: "table-cell",
        backgroundColor: color.white,
        border: "1px solid " + color.accent.lightGray,
        borderRadius: 2,
        padding: "3px " + .75 * unit + "px"
    }),
    content_secondary: {
        border: "1px solid " + color.accent.bgGray,
        backgroundColor: color.accent.bgGray
    },
    content_select: {
        color: color.core.hackberry,
        border: "1px solid " + color.core.hackberry,
        backgroundColor: color.white
    },
    content_book: Object.assign({},
        font.book
    ),
    content_hasColorBar: {
        borderLeft: "none",
        borderRadius: "0 2px 2px 0"
    },
    leftColorBar: {
        display: "table-cell",
        borderRadius: "2px 0 0 2px",
        border: "1px solid " + color.accent.lightGray,
        borderRight: "none",
        height: "100%",
        width: .5 * unit,
        verticalAlign: "top"
    },
    info: {
        backgroundColor: color.core.babu,
        border: "1px solid " + color.core.babu
    },
    danger: {
        backgroundColor: color.core.arches,
        border: "1px solid " + color.core.arches
    },
    warning: {
        backgroundColor: color.accent.beach,
        border: "1px solid " + color.accent.beach
    }
}))(StatusLabel);