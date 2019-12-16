import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { isLarge } from '../../../config/themes/responsive';
import { css, withStyles } from '../../../config/withStyles';

class HideAt extends React.Component {
    render() {
        var element = null;
        if (!isLarge(this.props.currentBreakpoint, this.props.breakpoint)) {
            element = (
                <div {...css(this.props.inline && this.props.styles.inlineBlock)}>
                    {this.props.children}
                </div>
            )
        }
        return element;
    }
}

HideAt.propTypes = {
    breakpoint: PropTypes.string.isRequired,
    children: PropTypes.node,
    inline: PropTypes.bool
}

HideAt.defaultProps = {
    children: void 0,
    inline: !1
}

const mapStateToProps = state => {
    return {
        currentBreakpoint: state.App.toJS().currentBreakpoint
    }
}

export default compose(
    withStyles(({ responsive }) => ({
        inlineBlock: {
            display: "inline-block"
        },
        mediumAndAbove: {
            [responsive.mediumAndAbove]: {
                display: "none"
            }
        },
        largeAndAbove: {
            [responsive.largeAndAbove]: {
                display: "none"
            }
        }
    })),
    connect(mapStateToProps)
)(HideAt);
