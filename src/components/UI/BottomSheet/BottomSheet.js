import React from 'react';

import { withShadow } from '../WithShadow/WithShadow';
import { css, withStyles } from '../../../config/withStyles';

class BottomSheet extends React.Component {
    render() {
        return (
            <div 
                {...css(
                    this.props.styles.container,
                    this.props.styles.shadow
                )}>
                {this.props.children}
            </div>
        )
    }
}

export default withShadow(withStyles(({ color }) => ({
    container: {
        position: 'fixed',
        zIndex: '111',
        left: 0,
        bottom: 0, 
        width: "100%",
        background: color.white
    }
}))(BottomSheet));