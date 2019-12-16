import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';

class Input extends React.Component {
   
    state = {
        isFocused: false,
        measuredContentWidth: false
    }
            
    componentDidMount() {
        var e = this;
        if(this.props.suffixText) {
            this.updateMeasuredContentWidth();
            this.updateMeasuredContentTimeout = setTimeout(function() {
                e.updateMeasuredContentWidth()
            }, 0);
        }
    }
    
    componentDidUpdate(nextProps) {
        this.props.suffixText && nextProps.value !== this.props.value && this.updateMeasuredContentWidth();
    }
    
    componentWillUnmount() {
        clearTimeout(this.updateMeasuredContentTimeout);
    }
    
    onBlur = event => {
        this.setState({isFocused: !1});
        this.props.onBlur(event);
    }
    
    onFocus = event => {
        this.setState({isFocused: !0});
        this.props.onFocus(event);
    }
    
    onClear = event => {
        this.inputRef.focus();
        this.props.onClear(event);
    }
    
    setInputRef = event => {
        this.inputRef = event;
        this.props.inputRef(event);
        this.props.refForFocus(event);
    }
    
    updateMeasuredContentWidth() {  
        if (this.contentMeasurer) {
            var e = this.contentMeasurer.getBoundingClientRect().width;
            this.setState({measuredContentWidth: e})
        }
    }
    
    suffixTextStyles() {
        return {
            left: this.state.measuredContentWidth,
            visibility: this.state.measuredContentWidth >= 0 ? "visible" : "hidden"
        }
    }
    
    render() {
        let prefix = null;
        if (!!this.props.prefix) {
            prefix = (
                <div  {...css(this.props.styles.prefixContainer)}>
                    <div 
                        {...css(
                            this.props.styles.prefix,
                            this.props.large && this.props.styles.prefix_large,
                            this.props.small && this.props.styles.prefix_small
                        )}>
                        {this.props.prefix}
                    </div>
                </div>
            )
        }

        let suffix = null;
        if (!!this.props.suffix) {
            suffix = (
                <div {...css(this.props.styles.suffixContainer)}>
                    <div 
                        {...css(
                            this.props.styles.suffix,
                            this.props.large && this.props.styles.suffix_large,
                            this.props.small && this.props.styles.suffix_small
                        )}>
                        {this.props.suffix}
                    </div>
                </div>
            )
        }

        let suffixText = null;
        if (this.props.suffixText) {
            suffixText = ( 
                <div {...css(this.props.styles.suffixTextContainer)}> 
                    <span
                        {...css(
                            this.props.styles.input,
                            this.props.small && this.props.styles.input_small,
                            this.props.large && this.props.styles.input_large,
                            this.props.styles.suffixText,
                            this.suffixTextStyles(),
                            this.props.inverse && this.props.styles.textInverse
                        )}>
                        {this.props.suffixText}
                    </span>
                    <span
                        ref={function t(t) {
                                this.contentMeasurer = t
                            }
                        }
                        {...css(
                            this.props.styles.input,
                            this.props.small && this.props.styles.input_small,
                            this.props.styles.contentMeasurer
                        )}>
                        {this.props.value || this.props.placeholder}
                    </span>
                </div>
            )
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
                    {prefix}
                    {suffix}
                    <div {...css(this.props.styles.inputContainer)}>
                        <input
                            aria-invalid={this.props.invalid && "true"}
                            autoComplete={this.props.autoComplete && [].concat(this.props.autoComplete).join(" ")}
                            autoFocus={this.props.autoFocus}
                            aria-describedby={this.props.invalid ? this.props.errorMessageID : null}
                            aria-owns={this.props["aria-owns"]}
                            {...css(
                                this.props.styles.input,
                                this.props.small && this.props.styles.input_small,
                                this.props.book && this.props.styles.input_book,
                                this.props.large && this.props.styles.input_large,
                                this.props.showOverflowEllipsis && this.props.styles.input_ellipsis,
                                this.props.showFakeValuePlaceholder ? this.props.styles.input_fakeValuePlaceholder : this.props.styles.input_defaultPlaceholder,
                                this.props.inverse && this.props.styles.textInverse,
                                this.props.inverse && this.props.styles.placeholderInverse
                            )}
                            data-veloute={this.props.velouteId}
                            disabled={this.props.disabled}
                            readOnly={this.props.readOnly}
                            ref={this.setInputRef}
                            id={this.props.id}
                            maxLength={this.props.maxLength}
                            name={this.props.name}
                            onChange={event => {
                                this.props.onChange(event);
                            }}
                            onKeyDown={this.props.onKeyDown}
                            placeholder={this.props.placeholder}
                            role={this.props.role}
                            value={this.props.value}
                            type={this.props.type}
                            autoCapitalize={this.props.autoCapitalize}
                            autoCorrect={this.props.autoCorrect ? "on" : "off"}
                            spellCheck={this.props.spellCheck ? "true" : "false"} />
                            {suffixText}
                            {/*this.props.onClear && this.props.value.length > 0 && 
                                <div
                                    data-veloute={this.props.velouteId + "__clearButton"}
                                    {...css(
                                        this.props.styles.clearInputBtnWrapper,
                                        !this.state.isFocused && this.props.styles.clearInputBtnWrapper_hidden
                                    )}>
                                    <div {...css(this.props.styles.vertMiddle)}>
                                        <button {...css(
                                            this.props.styles.clearInputBtn,
                                            this.props.small && this.props.styles.clearInputBtn_small,
                                            this.props.large && this.props.styles.clearInputBtn_large,
                                            this.props.inverse && this.props.styles.textInverse
                                        )}
                                        onClick={this.onClear}
                                        type={"button"} />
                                        <IconClose
                                            size={12} />
                                    </div>
                                </div>
                                    */}
                    </div>
                </div>
                {/*this.props.underlineFocus && this.state.isFocused && 
                    <div 
                        {...css(
                            this.props.styles.focusUnderline,
                            K && this.props.styles.focusUnderlineColor_select
                        )} />
                    */}
            </div>
        )
    }
}
    
Input.propTypes = {
    autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
    autoComplete: PropTypes.string,//Object(l.or)([PropTypes.oneOf(["on", "off"]), PropTypes.arrayOf(Object(l.or)([PropTypes.oneOf(g.a), Object(_.a)("section-")], "list of (valid categories or section-*)"))], "on/off, or list of (valid categories or section-*)"),
    autoCorrect: PropTypes.bool,
    autoFocus: PropTypes.bool,
    book: PropTypes.bool,
    borderless: PropTypes.bool,
    disabled: PropTypes.bool,
    errorMessageID: PropTypes.string,
    focusBorderless: PropTypes.bool,
    inputRef: PropTypes.func,
    invalid: PropTypes.bool,
    inverse: PropTypes.bool,
    large: PropTypes.bool,
    maxLength: PropTypes.number,
    id: PropTypes.string.isRequired,
    inline: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    prefix: PropTypes.node,
    readOnly: PropTypes.bool,
    refForFocus: PropTypes.func,
    removeMargins: PropTypes.bool,
    role: PropTypes.string,
    showFakeValuePlaceholder: PropTypes.bool,
    showOverflowEllipsis: PropTypes.bool,
    small: PropTypes.bool,
    spellCheck: PropTypes.bool,
    suffix: PropTypes.node,
    suffixText: PropTypes.node,
    type: PropTypes.oneOf(["date", "datetime-local", "email", "password", "tel", "text", "number"]),
    underlineFocus: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    velouteId: PropTypes.string,
    "aria-owns": PropTypes.string
}

Input.defaultProps = {
    autoCapitalize: null,
    autoComplete: null,
    autoCorrect: null,
    autoFocus: false,
    book: false,
    borderless: false,
    disabled: false,
    errorMessageID: null,
    focusBorderless: false,
    inputRef: () => {
        return;
    },
    invalid: false,
    inverse: false,
    inline: false,
    large: false,
    maxLength: null,
    onBlur: () => {
        return;
    },
    onChange: () => {
        return;
    },
    onClear: null,
    onFocus: () => {
        return;
    },
    onKeyDown: () => {
        return;
    },
    prefix: null,
    readOnly: false,
    refForFocus: () => {
        return;
    },
    removeMargins: false,
    showFakeValuePlaceholder: false,
    showOverflowEllipsis: false,
    small: false,
    spellCheck: null,
    suffix: null,
    suffixText: null,
    type: "text",
    underlineFocus: false,
    value: "",
    velouteId: null
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
    textInverse: {
        color: color.white
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
    prefixContainer: {
        float: "left"
    },
    prefix: {
        paddingLeft: unit,
        paddingTop: unit - 1
    },
    prefix_large: Object.assign({},
        font.textLarge,
        {
            paddingLeft: large,
            paddingTop: large - 1
        }
    ),
    prefix_small: Object.assign({}, 
        font.textSmall,
        {
            paddingLeft: unit,
            paddingTop: unit - 1
        }
    ),
    suffixContainer: {
        float: "right"
    },
    suffix: {
        paddingRight: unit,
        paddingTop: unit + 2
    },
    suffix_large: Object.assign({}, 
        font.textLarge,
        {
            paddingRight: large,
            paddingTop: large - 1
        }
    ),
    suffix_small: Object.assign({}, 
        font.textSmall,
        {
            paddingRight: unit,
            paddingTop: unit - 1
        }
    ),
    suffixTextContainer: {
        bottom: 0,
        left: 0,
        pointerEvents: "none",
        position: "absolute",
        right: 0,
        top: 0,
        zIndex: -1
    },
    suffixText: {
        color: color.placeholder,
        position: "absolute",
        whiteSpace: "nowrap",
        transform: "translateX(" + -1.5 * unit + "px)"
    },
    contentMeasurer: {
        border: 0,
        display: "inline",
        position: "absolute",
        top: 0,
        transform: "translateY(-100px)",
        whiteSpace: "pre",
        width: "auto"
    },
    inputContainer: {
        overflow: "hidden",
        position: "relative"
    },
    input: Object.assign({},
        font.formInput,
        font.light,
        {
            backgroundColor: color.clear,
            border: 0,
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
    input_defaultPlaceholder: {
        ":-moz-placeholder": {color: color.placeholder, opacity: 1},
        ":-ms-input-placeholder": {color: color.placeholder, opacity: 1},
        "::-moz-placeholder": {color: color.placeholder, opacity: 1},
        "::-webkit-input-placeholder": {color: color.placeholder, opacity: 1},
        "::placeholder": {color: color.placeholder, opacity: 1}
    },
    input_small: Object.assign({},
        font.textSmall,
        font.book, {
        padding: unit - 1
    }),
    input_large: Object.assign({},
        font.textLarge, {
        padding: large - 1
    }),
    input_book: Object.assign({}, font.book),
    input_ellipsis: {
        textOverflow: "ellipsis"
    },
    input_fakeValuePlaceholder: {
        color: font.formInput.color,
        opacity: 1
    },
    placeholderInverse: {
        ":-moz-placeholder": {color: color.white},
        ":-ms-input-placeholder": {color: color.white},
        "::-moz-placeholder": {color: color.white},
        "::-webkit-input-placeholder": {color: color.white},
        "::placeholder": {color: color.white}
    },
    invalid: {
        backgroundColor: color.inputInvalidBackground,
        border: "1px solid " + color.inputInvalidBorder,
        ":focus": {
            border: "1px solid " + color.inputInvalidBorder
        }
    },
    clearInputBtnWrapper: {
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        height: "100%",
        ":before": {
            content: '""',
            display: "inline-block",
            verticalAlign: "middle",
            height: "100%"
        }
    },
    clearInputBtnWrapper_hidden: {
        border: 0,
        clip: "rect(0, 0, 0, 0)",
        display: "block",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        width: "1px"
    },
    vertMiddle: {
        verticalAlign: "middle",
        display: "inline-block"
    },
    clearInputBtn: {
        color: color.placeholder,
        cursor: "pointer",
        background: "transparent",
        border: 0,
        padding: normal,
        ":active": {
            outline: 0
        }
    },
    clearInputBtn_small: {
        padding: unit
    },
    clearInputBtn_large: {
        padding: large
    }
}))(Input)