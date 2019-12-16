import React from 'react';
import PropTypes from 'prop-types';

const DeleteIcon = props => (
    <svg x="0px" y="0px" width={props.size} height={props.size} viewBox="0 0 32 32">
        <path  fill="#666666" d="M22,2H10v6H4v4h2v20h20V12h2V8h-6V2z M12,30H8V12h4V30z M12,4h8v4h-8V4z M18,30h-4V12h4V30z M24,12v18h-4V12 H24z"></path>
    </svg>
)

DeleteIcon.propTypes = {
    size: PropTypes.number
}

DeleteIcon.defaultProps = {
    size: "1em"
}

export default DeleteIcon;