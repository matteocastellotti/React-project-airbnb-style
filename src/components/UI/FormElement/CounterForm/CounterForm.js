import React from 'react';
import PropTypes from 'prop-types';

import FormElement from '../FormElement';
import Counter from '../../Counter/Counter';

class CounterForm extends React.Component {
    render() {
        return (
            <FormElement 
                errorMessage={this.props.invalid && this.props.errorMessage}
                errorMessageID={this.props.invalid && this.props.errorMessage ? this.props.id + "_error" : null}
                hasExternalLabel={this.props.hasExternalLabel}
                label={!this.props.hasExternalLabel && this.props.label}
                labelDescription={!this.props.hasExternalLabel && this.props.labelDescription}
                lightLabel={!this.props.hasExternalLabel && this.props.lightLabel}
                hideLabel={!this.props.hasExternalLabel && this.props.hideLabel}
                actionLink={this.props.actionLink}
                id={this.props.id}
                inline={this.props.inline}
                invalid={this.props.invalid}
                inverse={this.props.inverse}
                large={this.props.large}
                small={this.props.small}>
                <Counter 
                    accessibilityValueLabel={this.props.accessibilityValueLabel}
                    disableDecrement={this.props.disableDecrement}
                    disableIncrement={this.props.disableIncrement}
                    onDecrement={this.props.onDecrement}
                    onIncrement={this.props.onIncrement}
                    small={this.props.small}
                    value={this.props.value} />
            </FormElement>
        )
    }
}

CounterForm.propTypes = {
    accessibilityValueLabel: PropTypes.string.isRequired,
    align: PropTypes.oneOf(["top", "middle", "bottom"]),
    disableDecrement: PropTypes.bool,
    disableIncrement: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    lightTitle: PropTypes.bool,
    onDecrement: PropTypes.func.isRequired,
    onIncrement: PropTypes.func.isRequired,
    small: PropTypes.bool,
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType(["number", "string"]).isRequired
}

CounterForm.defaultProps = {
    align: "middle",
    vertical: "none",
    disableDecrement: false,
    disableIncrement: false,
    lightTitle: false,
    small: false,
    subtitle: ""
}

export default CounterForm;