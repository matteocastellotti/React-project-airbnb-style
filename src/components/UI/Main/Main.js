import React, { Component } from 'react';

import { css, withStyles } from '../../../config/withStyles';

class Main extends Component {
    render() {
        return (
            <main 
                {...css(
                    this.props.styles.container,
                    this.props.stickyHeader && this.props.styles.container_sticky_header 
                )}>
                {this.props.children}
            </main>
        )
    }
}

export default withStyles(({ responsive, unit }) => ({
    container: {
        position: "relative"
    },
    container_sticky_header: {
        paddingTop: unit * 8,
        [responsive.mediumAndAbove]: {
            paddingTop: unit * 10
        }
    }
}))(Main);