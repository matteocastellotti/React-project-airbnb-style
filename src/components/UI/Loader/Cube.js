import React, { Component } from 'react';

import { css, withStyles } from '../../../config/withStyles';

class Cube extends Component {
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
    animation = {
        "0%": {
            transform: "perspective(140px) rotateX(-180deg)",
        },
        "10%": {
            transform: "perspective(140px) rotateX(-180deg)",
        },
        "25%": {
            transform: "perspective(140px) rotateX(0deg)",
        },
        "75%": {
            transform: "perspective(140px) rotateX(0deg)",
        },
        "90%": {
            transform: "perspective(140px) rotateY(180deg)",
        },
        "100%": {
            transform: "perspective(140px) rotateY(180deg)",
        }
    },
    opacity = {
        "0%": {
            opacity: 0 
        },
        "10%": {
            opacity: 0 
        },
        "25%": {
            opacity: 1 
        },
        "75%": {
            opacity: 1 
        },
        "90%": {
            opacity: 0 
        },
        "100%": {
            opacity: 0
        }
    }}) => ({
    container: {
        margin: "20px auto",
        width: 40,
        height: 40,
        position: "relative",
        transform: "rotateZ(45deg)"
    },
    child: {
        float: "left",
        width: "50%",
        height: "50%",
        position: "relative",
        transform: "scale(1.1)",
        ":before": {
            content: "' '",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: color.core.babu,
            animationName: [animation, opacity],
            animationDuration: '2.4s',
            animationTimingFunction: 'linear',
            animationFillMode: "both",
            animationIterationCount: 'infinite',
            transformOrigin: "100% 100%"
        }
    },
    second_child: {
        transform: "scale(1.1) rotateZ(90deg)",
        ":before": {
            animationDelay: "0.3s"
        }
    },
    third_child: {
        transform: "scale(1.1) rotateZ(270deg)",
        ":before": {
            animationDelay: "0.9s"
        }
    },
    fourth_child: {
        
        transform: "scale(1.1) rotateZ(180deg)",
        ":before": {
            animationDelay: "0.6s"
        }
    }
}))(Cube);