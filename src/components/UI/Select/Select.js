import React from 'react';
import PropTypes from 'prop-types';

import ChevronDownIcon from '../Icons/ChevronDownIcon/ChevronDownIcon';
import { css, withStyles } from '../../../config/withStyles';

class Select extends React.Component {
    
    state = {
        isFocused: false
    }
            
    onBlur = event => {
        this.setState({isFocused: false});
        this.props.onBlur(event);
    }
    
    onFocus = event => {
        this.setState({isFocused: true});
        this.props.onFocus(event);
    }
    
    render() {

        let prefix = null;
        if (this.props.prefix) {
            prefix = (
                <div 
                    {...css(
                        this.props.styles.prefix,
                        this.props.small && this.props.styles.prefix_small,
                        this.props.large && this.props.styles.prefix_large
                    )}>
                    {this.props.prefix}
                </div>
            )
        }

        return (
            <div 
                {...css(
                    this.props.styles.container,
                    !this.props.inline && this.props.styles.block,
                    this.state.isFocused && this.props.styles.focus,
                    this.props.invalid && this.props.styles.invalid,
                    this.props.removeMargins && this.props.styles.container_noMargins,
                    this.props.borderless && !this.state.isFocused && this.props.styles.borderless,
                    this.state.isFocused && this.props.underlineFocus && !this.props.focusBorderless && this.props.styles.focus_underline,
                    this.state.isFocused && this.props.focusBorderless && this.props.styles.focus_borderless
                )}> 
                {prefix}
                <div {...css(this.props.styles.selectContainer)}>
                    <select 
                        aria-describedby={this.props.invalid && this.props.errorMessage ? this.props.id + "_error" : null}
                        aria-invalid={this.props.invalid && "true"}
                        id={this.props.id}
                        name={this.props.name}
                        {...css(
                            this.props.styles.select,
                            !this.props.inline && this.props.styles.block,
                            this.props.disabled && this.props.styles.select_disabled,
                            this.props.small && this.props.styles.select_small,
                            this.props.large && this.props.styles.select_large
                        )}
                        onBlur={this.onBlur}
                        onChange={event => {
                            this.props.onChange(event)
                        }}
                        onFocus={this.onFocus}
                        value={this.props.value}
                        disabled={this.props.disabled}
                        ref={this.props.refForFocus}>
                        {(!this.props.value || !!this.props.placeholder) && 
                            <option
                                disabled={true}
                                value={""}>
                                {this.props.placeholder}    
                            </option>
                        }
                        {this.props.children}
                    </select>
                </div>
                <span 
                    {...css(
                        this.props.styles.arrow,
                        this.props.small && this.props.styles.arrow_small,
                        this.props.large && this.props.styles.arrow_large,
                        this.props.invalid && this.props.styles.arrow_invalid
                    )}>
                    <ChevronDownIcon
                        color={this.props.disabled ? this.props.theme.color.textDisabled : this.props.invalid ? this.props.theme.color.inputInvalidBorder : ""}
                        size="16" />
                </span>
                {this.props.underlineFocus && this.state.isFocused && 
                    <div {...css(this.props.styles.focusUnderline)} />
                }
            </div>
        )
    }
}

Select.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    prefix: PropTypes.node,
    large: PropTypes.bool,
    small: PropTypes.bool,
    inline: PropTypes.bool,
    invalid: PropTypes.bool,
    disabled: PropTypes.bool,
    errorMessage: PropTypes.string,
    removeMargins: PropTypes.bool,
    borderless: PropTypes.bool,
    focusBorderless: PropTypes.bool,
    underlineFocus: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
    refForFocus: PropTypes.func,
    placeholder: PropTypes.string,
    children: PropTypes.node,
}

Select.defaultProps = {
    id: null,
    name: null,
    prefix: null,
    large: false,
    small: false,
    inline: false,
    invalid: false,
    disabled: false,
    errorMessage: null,
    removeMargins: false,
    borderless: false,
    focusBorderless: false,
    underlineFocus: false,
    onBlur: () => {
        return;
    },
    onChange: () => {
        return;
    },
    onFocus: () => {
        return;
    },
    value: null,
    refForFocus: () => {
        return;
    },
    placeholder: null,
    children: null
}

export default withStyles(({
    font,
    color,
    unit,
    normal = 1.5 * unit,
    large = 2 * unit }) => ({
    container: Object.assign({},
        font.formInput,
        {
            position: "relative",
            display: "inline-block",
            background: color.white,
            border: "1px solid " + color.accent.hrGray,
            borderRadius: unit / 4,
            marginBottom: unit
        }
    ),
    block: {
        display: "block",
        width: "100%"
    },
    borderless: {
        borderColor: color.inputBackground
    },
    focus: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: color.inputFocusedBorder
    },
    focus_selectBrand: {
        borderColor: color.core.hackberry
    },
    focus_underline: {
        borderColor: color.inputBorder
    },
    focus_borderless: {
        borderColor: color.inputBackground
    },
    focusUnderline: {
        left: -1,
        right: -1,
        bottom: -1,
        position: "absolute",
        height: 2,
        background: color.inputFocusedUnderlineBorder
    },
    focusUnderline_selectBrand: {
        background: color.core.hackberry
    },
    prefix: {
        padding: normal - 1,
        float: "left"
    },
    prefix_small: {
        padding: unit - 1
    },
    prefix_large: {
        padding: unit - 1
    },
    select: Object.assign({},
        font.formInput,
        font.light,
        {
            appearance: "none",
            backgroundColor: color.clear,
            border: "none",
            borderRadius: 0,
            paddingLeft: normal - 1,
            paddingTop: normal - 1,
            paddingRight: 5 * unit,
            paddingBottom: normal - 1,
            height: parseInt(font.formInput.lineHeight, 10) + 2 * (normal - 1),
            "::-ms-expand": {
                display: "none"
            },
            ":focus": {
                outline: "none"
            }
        }
    ),
    select_large: Object.assign({},
        font.textLarge,
        {
            paddingRight: 6 * unit,
            height: parseInt(font.textLarge.lineHeight, 10) + 2 * (large - 1)
        }
    ),
    selectContainer: {
        overflow: "hidden"
    },
    select_disabled: {
        color: color.textDisabled,
        backgroundColor: color.selectDisabled
    },
    select_small: Object.assign({},
        font.textSmall,
        {
            height: parseInt(font.textSmall.lineHeight, 10) + 2 * (unit - 1),
            paddingLeft: unit - 1,
            paddingTop: unit - 1,
            paddingBottom: unit - 1
        }
    ),
    arrow: {
        position: "absolute",
        top: 2 * unit,
        right: 2 * unit,
        lineHeight: 0,
        pointerEvents: "none"
    },
    arrow_small: {
        top: 1.25 * unit,
        right: 1.75 * unit
    },
    arrow_large: {
        top: 2.5 * unit
    },
    arrow_invalid: {
        color: color.inputInvalidBorder
    },
    invalid: {
        backgroundColor: color.inputInvalidBackground,
        border: "1px solid " + color.inputInvalidBorder,
        ":focus": {
            border: "1px solid " + color.inputInvalidBorder
        }
    },
    container_noMargins: {
        marginBottom: 0,
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0
    }
}))(Select);