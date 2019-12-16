import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { breakpointAbove, isLarge } from '../../../config/themes/responsive';
import { css, withStyles } from '../../../config/withStyles';

class ShowAt extends React.Component {
    render() {
        let element = null;
        if (this.props.currentBreakpoint) {
            if (isLarge(this.props.currentBreakpoint, this.props.breakpoint)) {
                element = (
                    <div {...css(this.props.inline && this.props.styles.inlineBlock)}>
                        {this.props.children}
                    </div>
                )
            } else {
                element = null;
            }
        } else {
            const styles = this.props.inline && this.props.breakpoint === breakpointAbove.MEDIUM_AND_ABOVE ? 
                    this.props.styles.mediumAndAbove_inline : 
                    this.props.inline && this.props.breakpoint === breakpointAbove.LARGE_AND_ABOVE ? 
                        this.props.styles.largeAndAbove_inline : 
                        this.props.breakpoint === breakpointAbove.MEDIUM_AND_ABOVE ? 
                            this.props.styles.mediumAndAbove : 
                            this.props.breakpoint === breakpointAbove.LARGE_AND_ABOVE && this.props.styles.largeAndAbove;

            element = (
                <div {...css(
                    this.props.styles.container,
                    styles
                    )}>
                    {this.props.children}
                </div>
            )
        }
        return element;
    }
}

ShowAt.propTypes = {
    breakpoint: PropTypes.string.isRequired,
    children: PropTypes.node,
    inline: PropTypes.bool
}

ShowAt.defaultProps = {
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
        container: {
            display: "none"
        },
        mediumAndAbove: {
            [responsive.mediumAndAbove]: {
                display: "block"
            }
        },
        largeAndAbove: {
            [responsive.largeAndAbove]: {
                display: "block"
            }
        },
        mediumAndAbove_inline: {
            [responsive.mediumAndAbove]: {
                display: "inline-block"
            }
        },
        largeAndAbove_inline: {
            [responsive.largeAndAbove]: {
                display: "inline-block"
            }
        }
    })),
    connect(mapStateToProps)
)(ShowAt);