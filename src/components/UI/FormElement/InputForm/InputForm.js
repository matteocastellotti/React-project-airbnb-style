import React from 'react';
import PropTypes from 'prop-types';

import FormElement from '../FormElement';
import Input from '../../Input/Input';

class InputForm extends React.Component {
    render() {
        return (
            <FormElement 
                errorMessage={this.props.invalid ? this.props.errorMessage : null}
                errorMessageID={this.props.invalid && this.props.errorMessage ? this.props.id + "_error" : null}
                hasExternalLabel={this.props.hasExternalLabel}
                label={!this.props.hasExternalLabel ? this.props.label : null}
                labelDescription={!this.props.hasExternalLabel ? this.props.labelDescription : null}
                lightLabel={!this.props.hasExternalLabel && this.props.lightLabel}
                hideLabel={!this.props.hasExternalLabel && this.props.hideLabel}
                actionLink={this.props.actionLink}
                id={this.props.id}
                inline={this.props.inline}
                invalid={this.props.invalid}
                inverse={this.props.inverse}
                large={this.props.large}
                small={this.props.small}>
                <Input
                    errorMessageID={this.props.invalid && this.props.errorMessage ? this.props.id + "_error" : null}
                    autoCapitalize={this.props.autoCapitalize}
                    autoComplete={this.props.autoComplete}
                    autoCorrect={this.props.autoCorrect}
                    autoFocus={this.props.autoFocus}
                    spellCheck={this.props.spellCheck}
                    book={this.props.book}
                    borderless={this.props.borderless}
                    focusBorderless={this.props.focusBorderless}
                    disabled={this.props.disabled}
                    id={this.props.id}
                    inline={this.props.inline}
                    inverse={this.props.inverse}
                    inputRef={this.props.inputRef}
                    invalid={this.props.invalid}
                    maxLength={this.props.maxLength}
                    name={this.props.name}
                    onBlur={this.props.onBlur}
                    onChange={this.props.onChange}
                    onClear={this.props.onClear}
                    onFocus={this.props.onFocus}
                    onKeyDown={this.props.onKeyDown}
                    placeholder={this.props.placeholder}
                    showFakeValuePlaceholder={this.props.showFakeValuePlaceholder}
                    prefix={this.props.prefix}
                    readOnly={this.props.readOnly}
                    refForFocus={this.props.refForFocus}
                    role={this.props.role}
                    value={this.props.value}
                    small={this.props.small}
                    large={this.props.large}
                    type={this.props.type}
                    underlineFocus={this.props.underlineFocus}
                    removeMargins={this.props.removeMargins}
                    showOverflowEllipsis={this.props.showOverflowEllipsis}
                    suffixText={this.props.suffixText}
                    suffix={this.props.suffix}
                    velouteId={this.props.velouteId} />
            </FormElement>
        )
    }
}
 
InputForm.propTypes = {
    actionLink: PropTypes.node,
    "aria-owns": PropTypes.string,
    autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
    autoComplete: PropTypes.string,//Object(l.or)([PropTypes.oneOf(["on", "off"]), PropTypes.arrayOf(Object(l.or)([PropTypes.oneOf(g.a), Object(_.a)("section-")], "list of (valid categories or section-*)"))], "on/off, or list of (valid categories or section-*)"),
    autoCorrect: PropTypes.bool,
    autoFocus: PropTypes.bool,
    book: PropTypes.bool,
    borderless: PropTypes.bool,
    disabled: PropTypes.bool,
    errorMessage: PropTypes.string,
    errorMessageID: PropTypes.string,
    focusBorderless: PropTypes.bool,
    hasExternalLabel: PropTypes.bool,
    hideLabel: PropTypes.bool,
    id: PropTypes.string.isRequired,
    inline: PropTypes.bool,
    inputRef: PropTypes.func,
    invalid: PropTypes.bool,
    inverse: PropTypes.bool,
    label: PropTypes.string,
    labelDescription: PropTypes.string,
    large: PropTypes.bool,
    lightLabel: PropTypes.bool,
    maxLength: PropTypes.number,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
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
    prefix: PropTypes.node,
    prefixText: PropTypes.node,
    type: PropTypes.oneOf(["date", "datetime-local", "email", "password", "tel", "text", "number"]),
    underlineFocus: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    velouteId: PropTypes.string,
}

InputForm.defaultProps = {
    actionLink: null,
    autoCapitalize: null,
    autoComplete: null,
    autoCorrect: null,
    autoFocus: false,
    book: false,
    borderless: false,
    disabled: false,
    errorMessage: null,
    errorMessageID: undefined,
    focusBorderless: false,
    hideLabel: false,
    inline: false,
    inputRef: () => {
        return;
    },
    invalid: false,
    inverse: false,
    labelDescription: "",
    large: false,
    lightLabel: false,
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
    velouteId: undefined
}

export default InputForm;