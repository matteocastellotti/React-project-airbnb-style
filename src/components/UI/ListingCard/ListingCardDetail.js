import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Title/Title';

import { css, withStyles } from '../../../config/withStyles';

class ListingCardDetail extends React.Component {
    render() {
        return (
            <div {...css(this.props.styles.container)}>
                <Title
                    {...css(this.props.styles.container_title)}
                    size={2}>
                    {this.props.title}
                </Title>
                <div {...css(this.props.styles.container_price)}>
                    928,12
                </div>
            </div>
        )
    }
}

ListingCardDetail.propTypes = {
    title: PropTypes.string,
    onDeletePress: PropTypes.func
}

ListingCardDetail.defaultProps = {
    title: null,
    onDeletePress: () => {
        return;
    }
}

export default withStyles(({ color, responsive, unit }) => ({
    container: {
        padding: (8 * 3) + "px " + (8 * 3) + "px 0",
        [responsive.mediumAndAbove]: {
            width: "calc(100% - 268px)",
            height: "100%",
            position: "relative",
            float: "left",
            padding: (8 * 1.5) + "px " + (8 * 1.5) + "px 0",
            borderLeft: "1px solid #e6e6e6"
        },
        [responsive.small]: {
            width: "100%",
            height: "auto",
            padding: (8 * 3) + "px " + (8 * 2.5) + "px " + (8 * 4.5) + "px"
        }
    },
    container_title: {
        position: "relative",
        margin: 0,
        overflow: "hidden",
        textTransform: "uppercase"
    },
    container_price: {
        [responsive.mediumAndAbove]: {
            float: "left",
            marginRight: 8 * 1.5,
            marginTop: 8 * 0.5,
            fontSize: 24
        },
        [responsive.small]: {
            fontSize: 20
        }
    },
    container_description: {
        lineHeight: 1.2,
        maxHeight: 34,
        overflow: "hidden",
        [responsive.mediumAndAbove]: {
            clear: "both"
        }
    },
    container_actions: {
        position: "absolute",
        top: "calc(75vw - 10px)",
        right: 12,
        bottom: 20,
        [responsive.mediumAndAbove]: {
            top: "inherit"
        }
    }
}))(ListingCardDetail);