import React from 'react';
import PropTypes from 'prop-types';

const PlusIcon = props => (
    <svg x="0px" y="0px" width={props.size} height={props.size} viewBox="0 0 32 32">
        <path fill={props.color} d="M16,16h12v2H16v12h-2V18H2v-2h12V4h2V16z"></path>
    </svg>
)

PlusIcon.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string
}

PlusIcon.defaultProps = {
    size: "1em",
    color: "currentColor"
}

export default PlusIcon;