import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';
import FlexBar from '../FlexBar/FlexBar';

class CardContent extends React.Component {
    render() {
        return (
            <div {...css(this.props.styles.container)}>
                <FlexBar
                    responsive={true}
                    before={
                        this.props.image
                    }>
                    {this.props.children}
                </FlexBar>
            </div>
        )
    }
}

CardContent.propTypes = {
    image: PropTypes.node
}

CardContent.defaultProps = {
    image: null
}

export default withStyles(({ responsive }) => ({
    container: {
        borderBottom: "1px solid #e4e4e4",
        //padding: 8 * 2,
        [responsive.mediumAndAbove]: {
          //  padding: 8 * 3
        }
    }
}))(CardContent);