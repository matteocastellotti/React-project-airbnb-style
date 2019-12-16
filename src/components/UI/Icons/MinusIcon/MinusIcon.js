import React from 'react';
import PropTypes from 'prop-types';

const MinusIcon = props => (
    <svg x="0px" y="0px" width={props.size} height={props.size} viewBox="0 0 32 32">
        <path fill={props.color} d="M28,14v2H4v-2H28z"></path>
    </svg>
)

MinusIcon.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string
}

MinusIcon.defaultProps = {
    size: "1em",
    color: "currentColor"
}

export default MinusIcon;