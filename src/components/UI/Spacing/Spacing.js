import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';

function buildAbove(responsive, unit, columns) {
    let space = {};
    columns.forEach(column => {
        space["topMediumAndAbove-" + column] = {[responsive.mediumAndAbove]: {marginTop: column * unit }};
        space["topLargeAndAbove-" + column] = {[responsive.largeAndAbove]: { marginTop: column * unit }};
        space["bottomMediumAndAbove-" + column] = {[responsive.mediumAndAbove]: { marginBottom: column * unit}};
        space["bottomLargeAndAbove-" + column] = {[responsive.largeAndAbove]: { marginBottom: column * unit }};
        space["rightMediumAndAbove-" + column] = {[responsive.mediumAndAbove]: { marginRight: column * unit }};
        space["rightLargeAndAbove-" + column] = {[responsive.largeAndAbove]: { marginRight: column * unit }};
        space["leftMediumAndAbove-" + column] = {[responsive.mediumAndAbove]: { marginLeft: column * unit }};
        space["leftLargeAndAbove-" + column] = {[responsive.largeAndAbove]: { marginLeft: column * unit }};
        space["verticalMediumAndAbove-" + column] = {[responsive.mediumAndAbove]: { marginTop: column * unit, marginBottom: column * unit }};
        space["verticalLargeAndAbove-" + column] = {[responsive.largeAndAbove]: { marginTop: column * unit, marginBottom: column * unit }};
        space["horizontalMediumAndAbove-" + column] = {[responsive.mediumAndAbove]: { marginLeft: column * unit, marginRight: column * unit }};
        space["horizontalLargeAndAbove-" + column] = {[responsive.largeAndAbove]: { marginLeft: column * unit, marginRight: column * unit }};     
    })
    return space;
}

class Spacing extends React.Component {
    
    render() {
        const top = this.props.top != null ? this.props.top : this.props.vertical;
        const bottom = this.props.bottom != null ? this.props.bottom : this.props.vertical;
        const left = this.props.left != null ? this.props.left : this.props.horizontal;
        const right = this.props.right != null ? this.props.right : this.props.horizontal;
        const cssInline = {
            marginTop: (top != null  && (top * this.props.theme.unit)),
            marginBottom: (bottom != null && (bottom * this.props.theme.unit)),
            marginLeft: (left != null && (left * this.props.theme.unit)),
            marginRight: (right != null && (right * this.props.theme.unit))
        }
        return (
            <div
                {...css(
                    this.props.inlineBlock && this.props.styles.inlineBlock,
                    this.props.inline && this.props.styles.inline,
                    cssInline,
                    null != this.props.topMediumAndAbove && this.props.styles["topMediumAndAbove-" + this.props.topMediumAndAbove], 
                    null != this.props.topLargeAndAbove && this.props.styles["topLargeAndAbove-" + this.props.topLargeAndAbove], 
                    null != this.props.bottomMediumAndAbove && this.props.styles["bottomMediumAndAbove-" + this.props.bottomMediumAndAbove], 
                    null != this.props.bottomLargeAndAbove && this.props.styles["bottomLargeAndAbove-" + this.props.bottomLargeAndAbove],
                    null != this.props.verticalMediumAndAbove && this.props.styles["verticalMediumAndAbove-" + this.props.verticalMediumAndAbove], 
                    null != this.props.verticalLargeAndAbove && this.props.styles["verticalLargeAndAbove-" + this.props.verticalLargeAndAbove ], 
                    null != this.props.rightMediumAndAbove && this.props.styles["rightMediumAndAbove-" + this.props.rightMediumAndAbove], 
                    null != this.props.rightLargeAndAbove && this.props.styles["rightLargeAndAbove-" + this.props.rightLargeAndAbove], 
                    null != this.props.leftMediumAndAbove && this.props.styles["leftMediumAndAbove-" + this.props.leftMediumAndAbove], 
                    null != this.props.leftLargeAndAbove && this.props.styles["leftLargeAndAbove-" + this.props.leftLargeAndAbove], 
                    null != this.props.horizontalMediumAndAbove && this.props.styles["horizontalMediumAndAbove-" + this.props.horizontalMediumAndAbove], 
                    null != this.props.horizontalLargeAndAbove && this.props.styles["horizontalLargeAndAbove-" + this.props.horizontalLargeAndAbove]
                )}>
                {this.props.children}
            </div>
        )
    }
}

Spacing.propTypes = {
    top: PropTypes.number,
    topMediumAndAbove: PropTypes.number,
    topLargeAndAbove: PropTypes.number,
    bottom: PropTypes.number,
    bottomMediumAndAbove: PropTypes.number,
    bottomLargeAndAbove: PropTypes.number,
    left: PropTypes.number,
    leftMediumAndAbove: PropTypes.number,
    leftLargeAndAbove: PropTypes.number,
    right: PropTypes.number,
    rightMediumAndAbove: PropTypes.number,
    rightLargeAndAbove: PropTypes.number,
    horizontal: PropTypes.number,
    horizontalMediumAndAbove: PropTypes.number,
    horizontalLargeAndAbove: PropTypes.number,
    vertical: PropTypes.number,
    verticalMediumAndAbove: PropTypes.number,
    verticalLargeAndAbove: PropTypes.number,
    textInline: PropTypes.bool,
    inline: PropTypes.bool,
    children: PropTypes.node.isRequired
}

Spacing.defaultProps = {
    top: null,
    topMediumAndAbove: null,
    topLargeAndAbove: null,
    bottom: null,
    bottomMediumAndAbove: null,
    bottomLargeAndAbove: null,
    left: null,
    leftMediumAndAbove: null,
    leftLargeAndAbove: null,
    right: null,
    rightMediumAndAbove: null,
    rightLargeAndAbove: null,
    horizontal: null,
    horizontalMediumAndAbove: null,
    horizontalLargeAndAbove: null,
    vertical: null,
    verticalMediumAndAbove: null,
    verticalLargeAndAbove: null,
    inline: !1,
    textInline: !1
}

export default withStyles(({ 
    responsive, 
    unit,
    columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
}) => (
    Object.assign(
        {},
        buildAbove(responsive, unit, columns),
        {
            inline: { 
                display: "inline"
            },
            inlineBlock: {
                display: "inline-block"
            }
        }
    )
))(Spacing);