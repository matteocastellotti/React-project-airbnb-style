import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';

class Sidenav extends React.Component {
    render() {

        const sidenavItems = (React.Children.toArray(this.props.children).filter(Boolean)).map((sidenavItem, key) => (
            <li key={key}>
                {sidenavItem}
            </li>
        ))

        return (
            <div {...css(this.props.styles.container)}>
                <div {...css(this.props.styles.content)}>
                    {sidenavItems}
                </div>
            </div>
        )
    }
}

Sidenav.propTypes = {
    children: PropTypes.array
}

Sidenav.defaultProps = {
    children: null
}

export default withStyles(() => ({
    container: {
        userSelect: "none",
        "::before": {
            content: " ",
            display: "table"
        },
        "::after": {
            content: " ",
            display: "table"
        }
    },
    content: {
        paddingLeft: 0,
        listStyle: "none"
    }
}))(Sidenav);