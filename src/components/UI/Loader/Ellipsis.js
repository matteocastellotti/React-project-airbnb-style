import React, { Component } from 'react';

import { css, withStyles } from '../../../config/withStyles';

class Ellipsis extends Component {
    render() {
        return (
            <div {...css(this.props.styles.container)}>
                <div {...css(this.props.styles.child, this.props.styles.first_child)} />
                <div {...css(this.props.styles.child, this.props.styles.second_child)} />
                <div {...css(this.props.styles.child, this.props.styles.third_child)} />
                <div {...css(this.props.styles.child, this.props.styles.fourth_child)} />
            </div>
        )
    }
}

export default withStyles(({
    color,
    ellipsis1 = {
        "0%": {
            transform: "scale(0)"
        },
        "100%": {
            transform: "scale(1)"
        }
    },
    ellipsis2 = {
        "0%": {
            transform: "translate(0, 0)"
        },
        "100%": {
            transform: "translate(19px, 0)"
        }
    },
    ellipsis3 = {
        "0%": {
            transform: "scale(1)"
        },
        "100%": {
            transform: "scale(0)"
        }
    }}) => ({
    container: {
        display: "inline-block",
        position: "relative",
        width: 64,
        height: 64
    },
    child: {
        position: "absolute",
        top: 27,
        width: 11,
        height: 11,
        borderRadius: "50%",
        background: color.black,
        animationTimingFunction: "cubic-bezier(0, 1, 1, 0)"
      },
    first_child: {
        left: 6,
        animationName: [ellipsis1],
        animationDuration: '0.6s',
        animationIterationCount: 'infinite'
    },
    second_child: {
        left: 6,
        animationName: [ellipsis2],
        animationDuration: '0.6s',
        animationIterationCount: 'infinite'
    },
    third_child: {
        left: 26,
        animationName: [ellipsis2],
        animationDuration: '0.6s',
        animationIterationCount: 'infinite'
    },
    fourth_child: {
        left: 45,
        animationName: [ellipsis3],
        animationDuration: '0.6s',
        animationIterationCount: 'infinite'
    }
}))(Ellipsis);