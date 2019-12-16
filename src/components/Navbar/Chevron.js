import React from 'react';
import PropTypes from 'prop-types';

import Rotate from '../UI/Rotate/Rotate';
import ChevronDownIcon from '../UI/Icons/ChevronDownIcon/ChevronDownIcon';

const chevron = props => (
    <Rotate degrees={props.isActive ? 180 : 0}>
        <ChevronDownIcon
            decorative={false}
            color={props.color}
            size={props.size} />
    </Rotate>
)
  
chevron.propTypes = {
    color: PropTypes.string,
    isActive: PropTypes.bool,
    size: PropTypes.string
}

chevron.defaultProps = {
    color: "currentColor",
    isActive: !1,
    size: "1em"
}

export default chevron;