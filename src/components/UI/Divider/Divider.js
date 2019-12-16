import React from 'react';

import { css, withStyles } from '../../../config/withStyles';

const divider = props => (
    <hr {...css(props.styles.divider)} />
)

export default withStyles(({ color, unit }) => ({
    divider: {
        border: 0,
        borderTop: "1px solid " + color.accent.hrGray,
        margin: 2 * unit + "px 0",
        height: 0
    }
}))(divider);