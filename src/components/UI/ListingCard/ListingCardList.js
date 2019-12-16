import React from 'react';

import { css, withStyles } from '../../../config/withStyles';

class ListingCardList extends React.Component {

    render() {
        return (
            <ul {...css(this.props.styles.container)}>
                {this.props.children}
            </ul>
        )
    }
}

export default withStyles(({ color, responsive }) => ({
    container: {
        paddingLeft: 0,
        marginBottom: 0
    },
    item: {
        position: "relative",
        display: "block",
        listStyle: "none",
        background: color.white,
        transformOrigin: "top",
        cursor: "pointer",
        maxHeight: "700",
        opacity: 1,
        filter: "alpha(opacity=100)",
        [responsive.mediumAndAbove]: {
            margin: "0 0 12"
        }
    }
}))(ListingCardList);