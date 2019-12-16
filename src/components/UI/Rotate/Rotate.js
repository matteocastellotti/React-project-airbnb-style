import React from 'react';
import PropTypes from 'prop-types';
    
import { css, withStyles } from '../../../config/withStyles';

const rotate = props => (
    <div
        {...css(
            props.styles.iconWrapper, 
            {transform: "rotate(" + String(props.degrees) + "deg)"}
        )}>
        {props.children}
    </div>
)
    
rotate.propTypes =  {
    children: PropTypes.node.isRequired,
    degrees: PropTypes.number
}

rotate.defaultProps = {
    degrees: 0
}
 
export default withStyles(() => ({   
    iconWrapper: {
        display: "table-cell",
        verticalAlign: "middle",
        transitionProperty: "transform",
        transitionDuration: "250ms",
        transitionTimingFunction: "ease-in-out"
    }
}))(rotate);