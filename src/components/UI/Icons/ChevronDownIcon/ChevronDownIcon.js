import React from 'react';
import PropTypes from 'prop-types';
    
const ChevronDownIcon = props => (
    <svg x="0px" y="0px" width={props.size} height={props.size} viewBox="0 0 32 32">
        <path fill={props.color} d="M30.142,9.858L16,24L1.858,9.858l1.414-1.414L16,21.172L28.728,8.444L30.142,9.858z"></path>
    </svg>
)

ChevronDownIcon.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string
}

ChevronDownIcon.defaultProps = {
    size: "1em",
    color: "currentColor"
}

export default ChevronDownIcon;