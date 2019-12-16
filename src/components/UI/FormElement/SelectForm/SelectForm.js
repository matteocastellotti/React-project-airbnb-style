import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormElement from '../FormElement';
import Select from '../../Select/Select';

class SelectForm extends Component {
    
    render() {
        /*var e = this.props
            , t = e.css
            , n = e.actionLink
            , a = e.borderless
            , r = e.brand
            , o = e.children
            , i = e.focusBorderless
            , l = e.hasExternalLabel
            , s = e.hideLabel
            , u = e.lightLabel
            , p = e.id
            , f = e.inline
            , g = e.label
            , v = e.labelDescription
            , y = e.name
            , _ = e.onChange
            , w = e.prefix
            , E = e.styles
            , k = e.theme
            , C = e.value
            , O = e.disabled
            , S = e.invalid
            , P = e.errorMessage
            , x = e.small
            , R = e.placeholder
            , T = e.removeMargins
            , j = e.underlineFocus
            , F = e.large
            , B = e.refForFocus
            , N = this.state.isFocused
            , I = this.props.errorMessage ? this.props.id + "_error" : null
            , M = k.color.core.hof;
        this.props.disabled ? M = this.props.theme.color.textDisabled : this.props.invalid && (M = this.props.theme.color.inputInvalidBorder);*/
        /*var A = r === m.c;*/

        return (
            <FormElement 
                errorMessage={this.props.invalid ? this.props.errorMessage : ""}
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
                small={this.props.small}
                large={this.props.large}>
                <Select
                    id={this.props.id}
                    name={this.props.name}
                    prefix={this.props.prefix}
                    small={this.props.small}
                    large={this.props.large}
                    inline={this.props.inline}
                    invalid={this.props.invalid}
                    errorMessage={this.props.errorMessage}
                    removeMargins={this.props.removeMargins}
                    borderless={this.props.borderless}
                    focusBorderless={this.props.focusBorderless}
                    underlineFocus={this.props.underlineFocus}
                    disabled={this.props.disabled}
                    onBlur={this.props.onBlur}
                    onChange={this.props.onChange}
                    onFocus={this.props.onFocus}
                    value={this.props.value}
                    refForFocus={this.props.refForFocus}
                    placeholder={this.props.placeholder}>
                    {this.props.children}
                </Select>
            </FormElement>
        )
    }
}
 
SelectForm.propTypes = {
    id: PropTypes.string,
    borderless: PropTypes.bool,
    inline: PropTypes.bool,
    focusBorderless: PropTypes.bool,
    name: PropTypes.string.isRequired,
    children: PropTypes.node,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    prefix: PropTypes.node,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
    invalid: PropTypes.bool,
    errorMessage: PropTypes.string,
    removeMargins: PropTypes.bool,
    underlineFocus: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool,
    refForFocus: PropTypes.func,
    label: PropTypes.string,
    labelDescription: PropTypes.string
}

SelectForm.defaultProps = {
    borderless: false,
    focusBorderless: false,
    children: null,
    onBlur: () => {
        return;
    },
    onChange: () => {
        return;
    },
    onFocus: () => {
        return;
    },
    value: "",
    disabled: false,
    errorMessage: null,
    invalid: false,
    placeholder: null,
    removeMargins: false,
    underlineFocus: false,
    large: false,
    refForFocus: () => {
        return;
    },
    label: null,
    labelDescription: null
}

export default SelectForm;