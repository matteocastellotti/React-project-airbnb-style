import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FlexBar from '../UI/FlexBar/FlexBar';
import Spacing from '../UI/Spacing/Spacing';
import Text from '../UI/Text/Text';
import { css, withStyles } from '../../config/withStyles';

class DropdownRow extends React.Component {
    state = {
        hovered: !1,
        focused: !1
    }

    onMouseEnter = () => {
        this.setState({hovered: !0})
    }
    
    onMouseLeave = () => {
        this.setState({hovered: !1});
    }

    onFocus = () => {
        this.setState({focused: !0});
    }
    
    onBlur = () => {
        this.setState({focused: !1});
    }
     
    render() {        

        var before = (
            <Spacing right={2}>
                {this.props.accessoryBefore}
            </Spacing>
        )

        var after = (
            <Spacing left={2}>
                {this.props.accessoryAfter}
            </Spacing>
        )

        var children = (
            <div 
                {...css(
                    this.props.styles.content,
                    this.props.baseline && this.props.styles.content_baseline,
                    this.state.hovered && this.props.styles.content_active,
                    this.state.focused && this.props.styles.content_active
                )}>
                <FlexBar 
                    align={this.props.verticalAlign}
                    before={this.props.accessoryBefore && before}
                    after={this.props.accessoryAfter && after}>
                    {this.props.title ?
                        <Spacing bottom={this.props.children ? .5 : 0}> 
                            <Text small={true} bold={true}> 
                                {this.props.title}
                            </Text>
                        </Spacing> :
                        <Text
                            small={true}>
                            {this.props.children}
                        </Text>
                    }
                </FlexBar>
            </div>
        )

        var element = null;
        if (this.props.submit) {
            element = (
                <button
                    type="submit"
                    {...css(
                        this.props.styles.container,
                        this.props.styles.container_link,
                        this.props.styles.container_button
                    )}
                    role={this.props.role}
                    onClick={this.props.onPress}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}>
                    {children}
                </button>            
            )
        } else if (this.props.href) {
            element = (
                <Link
                    to={this.props.href}
                    {...css(
                        this.props.styles.container,
                        this.props.styles.container_link,
                        this.props.styles.container_button
                    )}
                    role={this.props.role}
                    onClick={this.props.onPress}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}>
                    {children}
                </Link>
            )
        } else {
            element = (
                <div
                    {...css(
                        this.props.styles.container
                    )}
                    role={this.props.role}
                    onClick={this.props.onPress}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}>
                    {children}
                </div>
            )
        }
        return this.props.wrapper ? React.cloneElement(this.props.wrapper, void 0, element) : element;
    }
}

DropdownRow.propTypes = {
    accessoryAfter: PropTypes.node,
    accessoryBefore: PropTypes.node,
    baseline: PropTypes.bool,
    children: PropTypes.node,
    href: PropTypes.string,
    onPress: PropTypes.func,
    role: PropTypes.string,
    title: PropTypes.string,
    verticalAlign: PropTypes.oneOf(["top", "middle", "bottom"]),
    submit: PropTypes.bool,
    wrapper: PropTypes.node
}

DropdownRow.defaultProps = {
    accessoryAfter: null,
    accessoryBefore: null,
    baseline: !0,
    children: null,
    href: null,
    onPress: () => {
        return;
    },
    role: null,
    title: null,
    verticalAlign: "middle",
    submit: !1,
    wrapper: null
}

export default withStyles(({color, unit }) => ({
    container: {
        display: "block",
        padding: "0 " + 2 * unit + "px",
        textDecoration: "none"
    },
    container_link: {
        ":hover": {
            backgroundColor: color.accent.bgGray
        },
        ":active": {
            backgroundColor: color.accent.bgGray
        }
    },
    container_button: {
        width: "100%",
        appearance: "none",
        background: "transparent",
        border: 0,
        cursor: "pointer",
        margin: 0,
        textAlign: "left",
        userSelect: "auto"
    },
    content: {
        display: "table",
        padding: 2 * unit + "px 0",
        color: color.core.hof,
        width: "100%"
    },
    content_baseline: {
    },
    content_active: {
    }
}))(DropdownRow)