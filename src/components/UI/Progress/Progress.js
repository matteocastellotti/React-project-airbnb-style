import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';

class Progress extends React.Component {
    render() {
        return (
            <div {...css(this.props.styles.container)}>
                <div 
                    {...css(
                        this.props.styles.content,
                        {
                            width: this.props.width + "%"
                        }
                    )} />
            </div>
        )
    }
}

Progress.propTypes = {
    width: PropTypes.number
}

Progress.defaultProp = {
    width: 0
}

export default withStyles(() => ({
    container: {
        position: "relative",
        height: 8,
        display: "block",
        width: "100%",
        backgroundColor: "#acece6",
        borderRadius: 2,
        margin: ".5rem 0 1rem 0",
        overflow: "hidden"
    },
    content: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        backgroundColor: "#26a69a",
        transition: "width .3s linear"
    }
}))(Progress);