import React from 'react';

import { css, withStyles } from '../../../config/withStyles';

export const withShadow = Component => {
    class WithShadow extends React.Component {
        render() {
            return React.createElement(Component, Object.assign({}, this.props, {...css(this.props.styles.shadow)}));
        }
    }

    return withStyles(() => ({
        shadow: {
            boxShadow: "0 -15px 30px -13px rgba(0,0,0,0.09)"
        }
    }))(WithShadow);
}