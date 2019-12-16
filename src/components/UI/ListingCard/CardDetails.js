import React from 'react';

import { css, withStyles } from '../../../config/withStyles';

class CardDetails extends React.Component {
    render() {
        return (
            <div {...css(this.props.styles.container)}>
            ciao ciao ciao
            </div>
        )
    }
}

export default withStyles(({ color, responsive }) => ({
    container: {
        padding: (8 * 3) + "px" + (8 * 3) + "px 0",
        width: "100%",
        height: "auto",
        padding: "24px 20px 36px",
        color: color.white,
        [responsive.mediumAndAbove]: {
            //width: calc(100% - 268px)
            height: "100%",
            position: "relative",
            float: "left",
            padding: "12px 12px 0",
            borderLeft: "1px solid #e6e6e6"
        }
    }
}))(CardDetails);