import React from 'react';
import PropTypes from 'prop-types';

const MessageIcon = props => (
    <svg x="0px" y="0px" width={props.size} height={props.size} viewBox="0 0 32 32">
        <path fill="#666666" d="M0,6v22h32V6H0z M28.047,8L16,17.465L3.953,8H28.047z M2,9.008L12.18,17L2,24.992V9.008z M3.953,26 l9.836-7.723l0.01-0.006L16,20l2.199-1.729l0.012,0.006L28.047,26H3.953z M30,24.992L19.82,17L30,9.008V24.992z"></path>
    </svg>
);

MessageIcon.propTypes = {
    size: PropTypes.number
}

MessageIcon.defaultProps = {
    size: "1em"
}

export default MessageIcon;