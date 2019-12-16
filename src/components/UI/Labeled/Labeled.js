import React from 'react';
import PropTypes from 'prop-types';

import Spacing from '../Spacing/Spacing';
import { css, withStyles } from '../../../config/withStyles';

class Labeled extends React.Component {
    render() {
        let before = null;
        if (this.props.before) {
            before = (
                <div 
                    {...css(
                        this.props.styles.child,
                        this.props.inline && this.props.styles.child_inline,
                        !this.props.inline && this.props.verticalAlign === "middle" && this.props.styles.child_vaMiddle,
                        !this.props.inline && this.props.verticalAlign === "top" && this.props.styles.child_vaTop
                    )}>
                    <Spacing
                        right={this.props.spaceBetween}>
                        {this.props.before}
                    </Spacing>
                </div>
            )
        }

        let after = null;
        if (this.props.after) {
            after = (
                <div
                    {...css(
                        this.props.styles.child,
                        this.props.inline && this.props.styles.child_inline,
                        !this.props.inline && this.props.verticalAlign === "middle" && this.props.styles.child_vaMiddle,
                        !this.props.inline && this.props.verticalAlign === "top" && this.props.styles.child_vaTop
                    )}>
                    <Spacing
                        left={this.props.spaceBetween}>
                        {this.props.after}
                    </Spacing>
                </div>
            )
        }
        return (
            <div 
                {...css(
                    this.props.inline ? this.props.styles.container_inline : this.props.styles.container,
                    { margin: this.props.centered ? "0 auto" : null}
                )}>
                {before}
                <div 
                    {...css(
                        this.props.styles.child,
                        this.props.inline && this.props.styles.child_inline,
                        !this.props.inline && this.props.verticalAlign === "middle" && this.props.styles.child_vaMiddle,
                        !this.props.inline && this.props.verticalAlign === "top" && this.props.styles.child_vaTop
                    )}>
                    {this.props.children}
                </div>
                {after}
            </div>
        )
    }
}
 
Labeled.propTypes = {
    after: PropTypes.node,
    before: PropTypes.node,
    centered: PropTypes.bool,
    inline: PropTypes.bool,
    spaceBetween: PropTypes.number,
    verticalAlign: PropTypes.oneOf(["middle", "top"])
}

Labeled.defaultProps = {
    after: null,
    before: null,
    centered: false,
    inline: false,
    spaceBetween: 1,
    verticalAlign: "middle"
}

export default withStyles(() => ({
    container: {
        display: "table"
    },
    container_inline: {
        display: "inline-block"
    },
    child: {
        display: "table-cell"
    },
    child_inline: {
        display: "inline-block"
    },
    child_vaMiddle: {
        verticalAlign: "middle"
    },
    child_vaTop: {
        verticalAlign: "top"
    }
}))(Labeled);