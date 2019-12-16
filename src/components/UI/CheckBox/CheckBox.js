import React from 'react';
import PropTypes from 'prop-types';
import PropTypes2 from 'airbnb-prop-types';

import { css, withStyles } from '../../../config/withStyles';

class CheckBox extends React.Component {
    render() {
        return (
            <span
                {...css(
                    this.props.styles.container
                )}>
                <input
                    {...css(
                        this.props.styles.checkboxInput
                    )}
                    aria-describedby={this.props.describedById}
                    aria-label={this.props.accessibilityLabel}
                    aria-labelledby={this.props.labelId}
                    checked={this.props.checked}
                    disabled={this.props.disabled}
                    data-veloute={this.props.velouteId}
                    id={this.props.id}
                    name={this.props.name}
                    onBlur={this.props.onBlur}
                    onChange={() => this.props.onChange(!this.props.checked)}
                    onFocus={this.props.onFocus}
                    ref={this.props.refForFocus}
                    type="checkbox"
                    value={this.props.value} />
                <span
                    data-fake-checkbox={true}
                    {...css(
                        this.props.styles.checkbox,
                        this.props.checked && this.props.styles.checked,
                        this.props.disabled && this.props.styles.checkboxDisabled,
                        this.props.invalid && this.props.styles.checkboxInvalid
                    )}>
                </span>
            </span>
        )          
    }
}

CheckBox.propTypes = {
    id: PropTypes.string.isRequired,
    checked: PropTypes2.mutuallyExclusiveTrueProps("checked", "invalid"),
    describedById: PropTypes.string,
    disabled: PropTypes.bool,
    invalid: PropTypes2.mutuallyExclusiveTrueProps("checked", "invalid"),
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    refForFocus: PropTypes.func,
    value: PropTypes.bool,
    velouteId: PropTypes.string,
    accessibilityLabel: PropTypes.string,
    labelId: PropTypes.string
}

CheckBox.defaultProps = {
    accessibilityLabel: null,
    checked: false,
    describedById: null,
    disabled: false,
    invalid: false,
    labelId: null,
    name: null,
    onBlur: () => {
        return;
    },
    onChange: () => {
        return;
    },
    onFocus: () => {
        return;
    },
    refForFocus: () => {
        return;
    },
    value: null,
    velouteId: null
}

export default withStyles(({ unit, color }) => ({
    container: {
        display: "inline-block",
        cursor: "pointer",
        padding: 0
    },
    checkboxInput: {
        position: "absolute",
        width: 0,
        opacity: 0,
        ":focus + [data-fake-checkbox]": {
            zIndex: 1
        },
        ":focus + [data-style-default=true]": {
            borderColor: color.checked,
            boxShadow: "0 0 " + unit + "px " + color.checkBoxShadow
        },
        ":focus + [data-style-select=true]": {
            borderColor: color.core.hackberry,
            boxShadow: "0 0 " + unit + "px " + color.core.hackberry
        }
    },
    checkbox: {
        position: "relative",
        paddingLeft: 4 * unit,
        cursor: "pointer",
        display: "inline-block",
        height: 3 * unit,
        lineHeight: 3 * unit,
        fontSize: "1rem",
        userSelect: "none",
        background: color.white,
        "::before" : {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: 18,
            height: 18,
            zIndex: 0,
            border: "2px solid " + color.accent.hrGray,
            borderRadius: unit / 4,
            transition: ".2s"
        },
        "::after" : {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: 2.25 * unit,
            height: 2.25 * unit,
            zIndex: 0,
            border: "2px solid " + color.accent.hrGray,
            borderRadius: unit / 4,
            transition: ".2s"
        }
    },
    checked: {
        "::before": {
            top: -4,
            left: -5,
            width: 12,
            height: 22,
            borderTop: "2px solid transparent",
            borderLeft: "2px solid transparent",
            borderRight: "2px solid " + color.checked,
            borderBottom: "2px solid " + color.checked,
            transform: "rotate(40deg)",
            backfaceVisibility: "hidden",
            transformOrigin: "100% 100%"
        },
        "::after": {
            border: 0,
            transform: "scale(0)"
        }
    },
    checkboxDisabled: {
        backgroundColor: color.checkedDisabled,
        borderColor: color.accent.lightGray
    },
    checkboxInvalid: {
        backgroundColor: color.inputInvalidBackground,
        borderColor: color.inputInvalidBorder
    }
}))(CheckBox);