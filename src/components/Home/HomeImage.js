import React, { Component } from 'react';

import { css, withStyles } from '../../config/withStyles';

class HomeImage extends Component {
    render() {
        return (
            <div {...css(this.props.styles.container)}>
                <div {...css(this.props.styles.content)}>
                    <img
                        alt="Scopri case su Airbnb"
                        sizes="100vw" 
                        src="https://a0.muscache.com/airbnb/growth/magic_carpet/hero4_medium.jpg"
                        srcSet="https://a0.muscache.com/airbnb/growth/magic_carpet/hero4_medium.jpg 775w,https://a0.muscache.com/airbnb/growth/magic_carpet/hero4_large.jpg 1550w,https://a0.muscache.com/airbnb/growth/magic_carpet/hero4_large@2x.jpg 3100w"
                        {...css(this.props.styles.image)} />
                </div>
            </div>
        )
    }
}

export default withStyles(() => ({
    container: {
        position: "absolute",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "#D8D8D8",
        zIndex: -2
    },
    content: {
        zIndex: -1,
        height: "100%",
        width: "100%",
        position: "absolute"
    },
    image: {
        height: "auto",
        width: "auto",
        minHeight: "100%",
        minWidth: "100%",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        opacity: 1,
        transition: "opacity 0.5s"
    }
}))(HomeImage);