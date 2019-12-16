import React from 'react';
import PropTypes from 'prop-types';

const Option = props => (
    <option
        value={props.value}
        disabled={props.disabled}
        label={props.label}>
        {props.children}
    </option>
)
 
Option.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}
    
Option.defaultProps = {
    disabled: !1,
    lang: null
}

export default Option;