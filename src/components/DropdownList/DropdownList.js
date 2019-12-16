import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../config/withStyles';

class DropdownList extends React.Component {
    render() {

        const menuItems = (React.Children.toArray(this.props.children).filter(Boolean)).map((menuItem, key) => (
            <li 
                key={key}
                role={this.props.id ? "none presentation" : null}>
                {menuItem}
            </li>
        ))

        return (
            <ul role={this.props.id ? "menu" : null}
                id={this.props.id}
                aria-labelledby={this.props.ariaLabelledById}
                {...css(this.props.styles.list)}>
                {menuItems}
            </ul>
        )
    }
}

DropdownList.propTypes = {
    ariaLabelledById: PropTypes.string,
    children: PropTypes.node,
    id: PropTypes.string
}

DropdownList.defaultProps = {
    ariaLabelledById: null,
    children: null,
    id: null
};

export default withStyles(() => ({
    list: {
        padding: 0,
        listStyleType: "none"
    }
}))(DropdownList);