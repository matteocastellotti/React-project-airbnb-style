import React from 'react';
import PropTypes from 'prop-types';

const FacebookIcon = props => (
    <svg x="0px" y="0px" width={props.size} height={props.size} viewBox="0 0 32 32">
        <path fill={props.color} d="M20,2c0.947,0,1.903,0.035,2.686,0.077V4H22c-2.617,0-4,1.412-4,4.083v5.346h4.765L22.318,16H18 v14h-4V16h-4v-2.571h4V7.519C14,3.707,17.013,2,20,2 M20,0c-4.182,0-8,2.651-8,7.519v3.909H8V18h4v14h8V18h4l1.143-6.571H20V8.083 C20,6.436,20.567,6,22,6h2.686V0.224C24.184,0.155,22.003,0,20,0L20,0z" />
    </svg>
)

FacebookIcon.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string
}

FacebookIcon.defaultTypes = {
    size: "1em",
    color: "currentColor"
}

export default FacebookIcon;