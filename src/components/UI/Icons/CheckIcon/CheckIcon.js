import React from 'react';
import PropTypes from 'prop-types';
    
const CheckIcon = props => (
    <svg fill={props.color} height={props.size} viewBox="0 0 32 32" width={props.size}>
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
)

CheckIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string
}

CheckIcon.defaultProps = {
    size: "1em",
    color: "currentColor"
}

export default CheckIcon;
