import React from 'react';
import PropTypes from 'prop-types';

const LockIcon = props => (
    <svg x="0px" y="0px" width={props.size} height={props.size} viewBox="0 0 32 32">
        <path fill="#666666" d="M24,10c0-4.418-3.582-8-8-8s-8,3.582-8,8v4H6v18h20V14h-2V10z M18,26h-4l0.841-4.414 C14.344,21.223,14,20.663,14,20c0-1.104,0.896-2,2-2s2,0.896,2,2c0,0.663-0.344,1.223-0.841,1.586L18,26z M22,14H10v-4 c0-3.309,2.692-6,6-6s6,2.691,6,6V14z"/>
    </svg>
)

LockIcon.propTypes = {
    size: PropTypes.number
}

LockIcon.defaultTypes = {
    size: "1em"
}

export default LockIcon;