import React from 'react';

import { css, withStyles } from '../../config/withStyles';
import userpic from '../../image/a0.jpg';

const profileItem = props => (
    <div {...css(props.styles.avatar)}>
        <img alt="''" height="28" width="28" src={userpic} {...css(props.styles.image)} />
    </div>
);

export default withStyles(({ responsive, unit }) => ({
    avatar: {
        backgroundColor: "#F2F2F2",
        borderRadius: "50%",
        boxShadow: "0 0 0 2px #DBDBDB",
        display: "inline-block",
        height: 28,
        overflow: "hidden",
        verticalAlign: "middle",
        width: 28
    },
    image: {
        verticalAlign: "top"
    }
}))(profileItem);;