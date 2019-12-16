import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Title/Title';

const modalHeader = props => (
    <header> 
         <Title
            size={props.jumbo ? 1 : 3}>
            {props.title}
            {props.children}
        </Title>
    </header>
)

modalHeader.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    jumbo: PropTypes.bool
}

modalHeader.defaulProps = {
    title: null,
    children: null,
    jumbo: false
}

export default modalHeader;
