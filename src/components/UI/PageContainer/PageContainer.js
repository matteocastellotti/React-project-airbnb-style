import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';

class PageContainer extends React.Component {
    render() {
        return (
            <div
                {...css(
                    this.props.styles.container,
                    this.props.full && this.props.styles.container_full,
                    this.props.responsive && this.props.styles.container_responsive
                )}>
                {this.props.children}
            </div>
        )
    }
}

PageContainer.propTypes = {
    full: PropTypes.bool,
    responsive: PropTypes.bool
}

PageContainer.defaultProps = {
    full: false,
    responsive: true
}

export default withStyles(({ unit, responsive }) => ({
    container: {
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: 1.5 * unit,
        paddingRight: 1.5 * unit,
        width: 1080,
        "::before": {
            content: "''",
            display: "table"
        },
        "::after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [responsive.mediumAndAbove]: {
            paddingLeft: 3 * unit,
            paddingRight: 3 * unit
        }
    },
    container_full: {
        width: "auto"
    },
    container_responsive: {
        width: "auto",
        [responsive.mediumAndAbove]: {
            width: "696px"
        },
        [responsive.largeAndAbove]: {
            width: "1080px"
        }
    }
}))(PageContainer);