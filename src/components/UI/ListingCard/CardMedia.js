import React from 'react';

import { css, withStyles } from '../../../config/withStyles';

class CardMedia extends React.Component {
    render() {
        return (
            <div {...css(this.props.styles.container)}>
                {this.props.children}
            </div>
        )
    }
}

export default withStyles(({ responsive }) =>({
    container: {
        //background: #767676,
        borderRadius: 2,
        height: 232,
        width: 347,
        [responsive.mediumAndAbove] : {
            height: 159,
            width: 238,
        }
    }
}))(CardMedia);