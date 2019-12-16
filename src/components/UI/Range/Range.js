import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WrappedComponent from '../../WrappedComponent/WrappedComponent';
import InputForm from '../FormElement/InputForm/InputForm';

import { withStyles, css } from '../../../config/withStyles';
import polyglot from '../../../languageProvider';
import FlexBar from '../FlexBar/FlexBar';
import Labeled from '../Labeled/Labeled';

class Range extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false
        };
        this.setTriggerButtonRef = this.setTriggerButtonRef.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    setTriggerButtonRef(ref) {
        this.triggerButton = ref;
    }

    handleClick(event) {
        event.preventDefault();
        if(this.state.isFocused) {
            this.handleBlur();
        } else {
            this.handleFocus();
        }
    }

    handleBlur()  {
        this.setState({ isFocused: false });
    }

    handleFocus() {
        this.setState({ isFocused: true });
        this.props.onFocus();
    }

    handleOutsideClick(event) {
        if(this.state.isFocused && !this.triggerButton.contains(event.target)) {
            this.handleBlur();
        }
    }

    render() {

        let placeholder = this.props.placeholder;
        if(this.props.fromValue) {
            placeholder = polyglot.phrases["FROM"] + " " + this.props.fromValue + " " + this.props.suffix;
            if(this.props.toValue) {
                placeholder += " " + polyglot.phrases["TO"] + " " + this.props.toValue + " " + this.props.suffix;
            }
        } else if(this.props.toValue) {
            placeholder = polyglot.phrases["UNTIL"]  + " " + this.props.toValue + " " + this.props.suffix;
        }

        return (
            <div>
                <div 
                    onBlur={this.onBlur}
                    onFocus={this.onFocus}
                    {...css(
                        this.props.styles.container,
                        this.props.removeMargins && this.props.styles.container_noMargins,
                        this.props.small && this.props.styles.container_small,
                        this.props.inverse && this.props.styles.container_inverse,
                        this.props.borderless && !this.state.isFocused && this.props.styles.borderless,
                        this.props.inverse && this.props.borderless && this.props.styles.container_inverseBorderless,
                        !this.props.inline && this.props.styles.block,
                        this.state.isFocused && this.props.styles.focus,
                        this.state.isFocused && this.props.underlineFocus && !this.props.focusBorderless && this.props.styles.focus_underline,
                        this.state.isFocused && this.props.focusBorderless && this.props.styles.focus_borderless,
                        this.props.invalid && this.props.styles.invalid,
                        this.props.disabled && this.props.styles.container_disabled
                    )}> 
                    <button 
                        {...css(
                            this.props.styles.button,
                            this.props.styles.input_defaultPlaceholder,
                            this.props.small && this.props.styles.button_small,
                            this.props.large && this.props.styles.button_large,
                            this.props.showOverflowEllipsis && this.props.styles.button_ellipsis,
                            this.props.inverse && this.props.styles.textInverse,
                            this.props.inverse && this.props.styles.placeholderInverse
                        )}
                        onClick={this.handleClick}
                        ref={this.setTriggerButtonRef}>
                        <div {...css(this.props.styles.label)}>
                            {placeholder}
                        </div>
                    </button>
                    {this.state.isFocused &&
                        <WrappedComponent
                            onOutsideClick={this.handleOutsideClick}>
                            <div {...css(this.props.styles.ranges)}>
                                <InputForm
                                    id={this.props.fromId}
                                    name={this.props.fromName}
                                    onChange={this.props.onChange}
                                    suffix={this.props.suffix}
                                    type="number"
                                    placeholder={polyglot.phrases["FROM"]}
                                    small={this.props.small}
                                    large={this.props.large}
                                    value={this.props.fromValue} />
                                <InputForm 
                                    id={this.props.toId}
                                    name={this.props.toName}
                                    suffix={this.props.suffix}
                                    onChange={this.props.onChange}
                                    type="number"
                                    placeholder={polyglot.phrases["TO"]}
                                    small={this.props.small}
                                    large={this.props.large}
                                    value={this.props.toValue} />
                            </div>
                        </WrappedComponent>
                    }
                </div>
            </div>
        )
    }
}

Range.propTypes = {
    fromId: PropTypes.string.isRequired,
    fromName: PropTypes.string.isRequired,
    fromValue: PropTypes.number,
    toId: PropTypes.string.isRequired,
    toName: PropTypes.string.isRequired,
    toValue: PropTypes.number,
    fromList: PropTypes.array,
    toList: PropTypes.array,
    onFocus: PropTypes.func,
    removeMargins: PropTypes.bool,
    small: PropTypes.bool,
    inverse: PropTypes.bool,
    borderless: PropTypes.bool,      
    inline: PropTypes.bool,
    underlineFocus: PropTypes.bool,
    focusBorderless: PropTypes.bool,
    invalid: PropTypes.bool,
    disabled: PropTypes.bool,
    suffix: PropTypes.node
}

Range.defaultProps = {
    onFocus: () => {
        return;
    },
    removeMargins: false,
    small: false,
    inverse: false,
    borderless: false,
    inline: false,
    underlineFocus: false,
    focusBorderless: false,
    invalid: false,
    disabled: false
}

export default withStyles(({
    color,
    unit,
    font,
    normal = 1.5 * unit,
    large = 2 * unit  }) => ({
    container: Object.assign({},
        font.formInput, 
        {
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: color.inputBorder,
            borderRadius: unit / 4,
            backgroundColor: color.inputBackground,
            marginBottom: 1 * unit,
            position: "relative",
            zIndex: 0
        }
    ),
    container_disabled: {
        backgroundColor: color.inputDisabled
    },
    container_noMargins: {
        marginBottom: 0,
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0
    },
    container_small: Object.assign({}, font.textSmall),
    container_inverse: {
        backgroundColor: "transparent"
    },
    container_inverseBorderless: {
        borderColor: "transparent"
    },
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
    focusUnderlineColor_select: {
        background: color.core.hackberry
    },
    invalid: {
        backgroundColor: color.inputInvalidBackground,
        border: "1px solid " + color.inputInvalidBorder,
        ":focus": {
            border: "1px solid " + color.inputInvalidBorder
        }
    },
    button: Object.assign({},
        font.formInput,
        font.light,
        {
            backgroundColor: color.clear,
            border: 0,
            textAlign: "left",
            padding: normal - 1,
            width: "100%",
            ":focus": {
                outline: "none"
            },
            "::-ms-clear": {
                display: "none"
            }
        }
    ),
    button_small: Object.assign({},
        font.textSmall,
        font.book, {
        padding: unit - 1
    }),
    button_large: Object.assign({},
        font.textLarge, {
        padding: large - 1
    }),
    button_ellipsis: {
        textOverflow: "ellipsis"
    },
    textInverse: {
        color: color.white
    },
    placeholderInverse: {
        ":-moz-placeholder": {color: color.white},
        ":-ms-input-placeholder": {color: color.white},
        "::-moz-placeholder": {color: color.white},
        "::-webkit-input-placeholder": {color: color.white},
        "::placeholder": {color: color.white}
    },
    ranges: {
        padding: unit * 2 + "px " + unit * 3 + "px " + unit + "px",
        border: "1px solid " + color.inputBorder,
        borderRadius: 3,
        position: "absolute",
        background: color.white,
        zindex: 3000,
        width: "100%",
        left: 0,
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)", //0 2px 6px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.07);
        fontSize: 16,
        textAlign: "left",
        lineHeight: "1em",
        marginBottom: 15
    }
}))(Range);