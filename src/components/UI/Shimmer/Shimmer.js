import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';

class Shimmer extends React.Component {
    render() {
        return (
            <span
                aria-busy="true"
                {...css(
                    this.props.styles.shimmer,
                    {
                        width: this.props.width,
                        height: this.props.height
                    }
                )} />
        )
    }
}

Shimmer.propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Shimmer.defaultProps = {
    height: "1ex",
    width: "60%"
}

export default withStyles(() => ({
    shimmer: {
        animationDirection: "alternate",
        animationDuration: "1s",
        animationFillMode: "forwards",
        animationIterationCount: "infinite",
        animationName: {
            from: {
                opacity: .1
            },
            to: {
                opacity: .3
            }
        },
        animationTimingFunction: "ease-in-out",
        backgroundColor: "currentColor",
        display: "inline-block",
        position: "relative"
    }
}))(Shimmer);