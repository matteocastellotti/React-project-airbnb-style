import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import { css, withStyles } from '../../../config/withStyles';

class Panel extends React.Component {
    render() {
        let header = null;
        if (this.props.title) {
            header = (
                <Header>
                    {this.props.title}
                </Header>
            )
        }

        return (
            <div
                {...css(
                    this.props.styles.container
                )}>
                {header}
                <div 
                    {...css(
                        this.props.styles.content,
                        !this.props.title && this.props.styles.content_noborder
                    )}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Panel.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

Panel.defaultProps = {
    title: null,
    children: null
}

export default withStyles(({ color, unit }) => ({
    container: {
        border: "1px solid #dce0e0",
        backgroundColor: color.white,
        borderRadius: 0
    },
    content: {
        position: "relative",
        margin: "0",
        padding: 3.5 * unit,
        borderTop: "1px solid " + color.panelBorder
    },
    content_noborder: {
        borderTop: "none"
    }
}))(Panel);