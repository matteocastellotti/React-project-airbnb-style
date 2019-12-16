import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';

class FlexBar extends React.Component {
    render() {
        let before = null;
        if (this.props.before) {
            before = (
                <div 
                    {...css(
                        this.props.styles.child, 
                        this.props.align === "top" && this.props.styles.child_alignTop, 
                        this.props.align === "middle" && this.props.styles.child_alignMiddle, 
                        this.props.align === "bottom" && this.props.styles.child_alignBottom,
                        this.props.responsive && this.props.styles.child_responsive
                    )}>
                    {this.props.before}
                </div>
            )
        }
        let after = null;
        if (this.props.after) {
            after = (
                <div 
                    {...css(
                        this.props.styles.child, 
                        this.props.align === "top" && this.props.styles.child_alignTop,
                        this.props.align === "middle" && this.props.styles.child_alignMiddle,
                        this.props.align === "bottom" && this.props.styles.child_alignBottom,
                        this.props.responsive && this.props.styles.child_responsive
                    )}>
                    {this.props.after}
                </div>
            )
        }
        return (
            <div 
                {...css(
                    this.props.styles.container, 
                    this.props.fillVertical && this.props.styles.fillVertical,
                    this.props.responsive && this.props.styles.container_responsive
                )}> 
                {before}
                <div 
                    {...css(
                        this.props.styles.child,
                        this.props.styles.child_middle, 
                        this.props.align === "top" && this.props.styles.child_alignTop,
                        this.props.align === "middle" && this.props.styles.child_alignMiddle,
                        this.props.align === "bottom" && this.props.styles.child_alignBottom,
                        this.props.responsive && this.props.styles.child_responsive
                    )}>
                    {this.props.children}
                </div> 
                {after}
            </div>
        )
    }
}

FlexBar.propTypes = {
    after: PropTypes.node,
    align: PropTypes.oneOf(["top", "middle", "bottom"]),
    before: PropTypes.node,
    children: PropTypes.node,
    fillVertical: PropTypes.bool,
    responsive: PropTypes.bool
}

FlexBar.defaultProps = {
    after: null,
    align: "middle",
    before: null,
    children: null,
    fillVertical: false,
    responsive: false
}

export default withStyles(({ responsive }) => ({
    child: {
        display: 'table-cell'
    },
    child_alignBottom: {
        verticalAlign: 'bottom'
    },
    child_alignMiddle: {
        verticalAlign: 'middle'
    },
    child_alignTop: {
        verticalAlign: 'top'
    },
    child_middle: {
        width: '100%'
    },
    fillVertical: {
        height: '100%'
    },
    container: {
        display: 'table !important',
        width: '100% !important'
    },
    container_responsive:{
        [responsive.small]: {
            display: "block"
        }
    },
    child_responsive: {
        [responsive.small]: {
            display: "inline-block"
        }
    }
}))(FlexBar);