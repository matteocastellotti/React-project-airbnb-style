import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';

class AccessibleText extends React.Component {
    render() {
        return (
            <span
                id={this.props.id}
                aria-hidden={!!this.props.ariaHidden || null}
                {...css(this.props.styles.accessible)}>
                {this.props.children}
            </span>
        )
    }
}
    
AccessibleText.propTypes = {
    ariaHidden: PropTypes.bool,
    id: PropTypes.string
}

AccessibleText.defaultProps = {
    ariaHidden: null,
    id: null
};

export default withStyles(() => ({
    accessible: {
        border: 0,
        clip: "rect(0, 0, 0, 0)",
        display: "block",
        height:"1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        width: "1px"
    }
}))(AccessibleText);