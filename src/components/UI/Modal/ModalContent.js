import React from 'react';
import PropTypes from 'prop-types';

const modalContent = props => (
    <section>
        {props.children}
    </section>
)

modalContent.propTypes = {
    children: PropTypes.node.isRequired
}

export default modalContent;