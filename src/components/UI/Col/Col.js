import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';

function percentage(size, columns) {
    return ((size / columns) * 100) + "%";
}

function buildAbove(responsive, columns) {
    let cols = {};
    columns.forEach(column => {
        cols["col-sm-" + column] = { width: percentage(column, columns.length-1), float: "left" };
        cols["col-md-" + column] = {[responsive.mediumAndAbove]: { width: percentage(column, columns.length-1), float: "left" }};
        cols["col-lg-" + column] = {[responsive.largeAndAbove]: { width: percentage(column, columns.length-1), float: "left" }};
        cols["col-sm-offset-" + column] = { marginLeft: percentage(column, columns.length-1)};
        cols["col-md-offset-" + column] = {[responsive.mediumAndAbove]: { marginLeft: percentage(column, columns.length-1)}};
        cols["col-lg-offset-" + column] = {[responsive.largeAndAbove]: { marginLeft: percentage(column, columns.length-1)}};
        cols["col-sm-push-" + column] = { left: percentage(column, columns.length-1)};
        cols["col-md-push-" + column] = {[responsive.mediumAndAbove]: { left: percentage(column, columns.length-1)}};
        cols["col-lg-push-" + column] = {[responsive.largeAndAbove]: { left: percentage(column, columns.length-1)}};
        cols["col-sm-pull-" + column] = { right: percentage(column, columns.length-1)};
        cols["col-md-pull-" + column] = {[responsive.mediumAndAbove]: { right: percentage(column, columns.length-1)}};
        cols["col-lg-pull-" + column] = {[responsive.largeAndAbove]: { right: percentage(column, columns.length-1)}};
    })
    return cols;
}

class Col extends React.Component {
    render() {
        return (
            <div
                {...css(
                    (this.props.sm || this.props.md || this.props.lg) && this.props.styles.col,
                    this.props.sm && this.props.styles["col-sm-" + this.props.sm],
                    this.props.md && this.props.styles["col-md-" + this.props.md],
                    this.props.lg && this.props.styles["col-lg-" + this.props.lg],
                    this.props.smOffset && this.props.styles["col-sm-offset-" + this.props.smOffset],
                    this.props.mdOffset && this.props.styles["col-md-offset-" + this.props.mdOffset],
                    this.props.lgOffset && this.props.styles["col-lg-offset-" + this.props.lgOffset],
                    this.props.smPush && this.props.styles["col-sm-push-" + this.props.smPush],
                    this.props.mdPush && this.props.styles["col-md-push-" + this.props.mdPush],
                    this.props.lgPush && this.props.styles["col-lg-push-" + this.props.lgPush],
                    this.props.smPull && this.props.styles["col-sm-pull-" + this.props.smPull],
                    this.props.mdPull && this.props.styles["col-md-pull-" + this.props.mdPull],
                    this.props.lgPull && this.props.styles["col-lg-pull-" + this.props.lgPull]
                )}>
                {this.props.children}
            </div>
        )
    }
}

Col.propTypes = {
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    smOffset: PropTypes.number,
    mdOffset: PropTypes.number,
    lgOffset: PropTypes.number,
    smPush: PropTypes.number,
    mdPush: PropTypes.number,
    lgPush: PropTypes.number,
    smPull: PropTypes.number,
    mdPull: PropTypes.number,
    lgPull: PropTypes.number
}

Col.defaultProps = {
    sm: null,
    md: null,
    lg: null,
    smOffset: null,
    mdOffset: null,
    lgOffset: null,
    smPush: null,
    mdPush: null,
    lgPush: null,
    smPull: null,
    mdPull: null,
    lgPull: null
}

export default withStyles(({ 
    responsive, 
    unit,
    columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
}) => (Object.assign({}, buildAbove(responsive, columns),
    {
        col: {
            position: "relative",
            minHeight: 1,
            paddingLeft: 1.5 * unit,
            paddingRight: 1.5 * unit
        }
    })
))(Col);