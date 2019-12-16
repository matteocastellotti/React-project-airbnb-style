import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormElement from '../FormElement';
import Range from '../../Range/Range';

class RangeForm extends Component {
    
    render() {
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
                id={this.props.fromId + "-" + this.props.toId}
                inline={this.props.inline}
                invalid={this.props.invalid}
                small={this.props.small}
                large={this.props.large}>
                <Range
                    fromId={this.props.fromId}
                    fromName={this.props.fromName}
                    fromValue={this.props.fromValue}
                    toId={this.props.toId}
                    toName={this.props.toName}
                    toValue={this.props.toValue}
                    prefix={this.props.prefix}
                    suffix={this.props.suffix}
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
                    refForFocus={this.props.refForFocus}
                    placeholder={this.props.placeholder}>
                    {this.props.children}
                </Range>
            </FormElement>
        )
    }
}
 
RangeForm.propTypes = {
    id: PropTypes.string,
    fromId: PropTypes.string,
    fromName: PropTypes.string.isRequired,
    fromValue: PropTypes.string,
    toId: PropTypes.string,
    toName: PropTypes.string.isRequired,
    toValue: PropTypes.string,
    borderless: PropTypes.bool,
    inline: PropTypes.bool,
    focusBorderless: PropTypes.bool,
    children: PropTypes.node,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    prefix: PropTypes.node,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    invalid: PropTypes.bool,
    errorMessage: PropTypes.string,
    removeMargins: PropTypes.bool,
    underlineFocus: PropTypes.bool,
    large: PropTypes.bool,
    small: PropTypes.bool,
    refForFocus: PropTypes.func,
    label: PropTypes.string,
    labelDescription: PropTypes.string,
    suffix: PropTypes.node
}

RangeForm.defaultProps = {
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

export default RangeForm;