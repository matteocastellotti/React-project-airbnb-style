import React, { Component } from 'react';

import { css, withStyles } from '../../../config/withStyles';

class Bounce extends Component {
    render() {
        return (
            <div {...css(this.props.styles.container)}>
                <div {...css(this.props.styles.child, this.props.styles.first_child)} />
                <div {...css(this.props.styles.child, this.props.styles.second_child)} />
                <div {...css(this.props.styles.child)} />
            </div>
        )
    }
}

export default withStyles(({
    color,
    animation = {
        "0%": { 
            transform: "scale(0)"
        }, 
        "40%": { 
            transform: "scale(1.0)"
        },
        "80%": { 
            transform: "scale(0)"
        }, 
        "100%": { 
            transform: "scale(0)"
        }
    }}) => ({
    container: {
        margin: "100px auto 0",
        width: 70,
        textAlign: "center"
    },
    child: {
        width: 18,
        height: 18,
        backgroundColor: color.core.babu,
        display: "inline-block",
        animation: [animation],
        animationName: [animation],
        animationDuration: '1.4s',
        animationFillMode: "both",
        animationIterationCount: 'ease-in-out'
    },
    first_child: {
        animationDelay: "-0.32s"
    },
    second_child: {  
        animationDelay: "-0.16s"
    }
}))(Bounce);