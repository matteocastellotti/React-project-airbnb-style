import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';

class Title extends React.Component {
    render() {
        return React.createElement(
                "h" + this.props.size,
                {...css(
                    this.props.styles.container,
                    this.props.styles["container_" + this.props.size],
                    this.props.small && this.props.styles["container_" + this.props.size + "_small"]
                )},
                this.props.children);
    }
}

Title.propTypes = {
    size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    small: PropTypes.bool
}

Title.defaultProps = {
    size: 6,
    small: false
}

export default withStyles(({ font, color, responsive }) => ({
    container: {
        lineHeight: 1.1,
        textRendering: "optimizelegibility",
        margin: 0,
        ":first-child": {
            marginTop: 0
        }
    },
    container_small: Object.assign({},
        font.book,
        {
            lineHeight: 1,
            textTransform: "none",
            color: color.core.foggy
        }
    ),
    container_1: Object.assign({},
        font.title1,
        [responsive.small]: {
            fontSize: 41
        }
    ),
    container_2: Object.assign({},
        font.title2,
        [responsive.small]: {
            fontSize: 30
        }
    ),
    container_3: Object.assign({},
        font.title3,
        [responsive.small]: {
            fontSize: 22
        }
    ),
    container_4: Object.assign({},
        font.title4,
        [responsive.small]: {
            fontSize: 17
        }
    ),
    container_5: Object.assign({},
        font.title5,
        [responsive.small]: {
            fontSize: 15
        }
    ),
    container_6: Object.assign({},
        font.title6,
        [responsive.small]: {
            fontSize: 13
        }
    ),
    container_1_small: {
        fontSize: 28,
        [responsive.small]: {
            fontSize: 26
        }
    },
    container_2_small: {
        fontSize: 20,
        [responsive.small]: {
            fontSize: 20
        }
    },
    container_3_small: {
        fontSize: 17,
        [responsive.small]: {
            fontSize: 15
        }
    },
    container_4_small: {
        fontSize: 14,
        [responsive.small]: {
            fontSize: 14
        }
    }
}))(Title);