import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';

class ListingCardPhoto extends React.Component {
    render() {
        return (
            <div {...css(this.props.styles.container)}>
                <img 
                    src={this.props.src}
                    alt="alt"
                    {...css(this.props.styles.image)} />
            </div>
        )
    }
}

ListingCardPhoto.propTypes = {
    src: PropTypes.string
}

ListingCardPhoto.defaultProps = {
    src: null
}

export default withStyles(({ responsive }) => ({
    container: {
        width: 268,
        height: "100%",
        float: "left",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#bbb",
        [responsive.small]: {
            width: "100%",
            height: "75vw"        
        }
    },
    image: {
        position: "absolute",
        top: 0,
        right: 0,
        objectFit: "cover",
        fontFamily: "object-fit: cover",
        width: "100%",
        height: "100%",
        transition: "opacity .2s linear",
        opacity: 1
    }
}))(ListingCardPhoto);