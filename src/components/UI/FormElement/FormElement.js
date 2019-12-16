import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text/Text';
import Label from '../Label/Label';
import Spacing from '../Spacing/Spacing';
import FlexBar from '../FlexBar/FlexBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { css, withStyles } from '../../../config/withStyles';

class FormElement extends React.Component {
    render() {
        let label = null;
        if (!this.props.hasExternalLabel) {
            if (!this.props.hideLabel) {
                let description = null;
                if (this.props.labelDescription || this.props.actionLink) { 
                    description = (
                        <Text
                            small={!this.props.small && !this.props.large}
                            micro={this.props.small}
                            light={false}
                            inverse={this.props.inverse}
                            inline={this.props.small}>
                            {this.props.labelDescription}
                            {this.props.labelDescription && this.props.actionLink && " "}
                            {this.props.actionLink}
                        </Text>
                    )
                }
            
                label = (
                    <Spacing bottom={1}>
                        <Label htmlFor={this.props.id}>
                            <Text
                                large={this.props.large}
                                small={this.props.small}
                                light={this.props.lightLabel && !this.props.small}
                                inverse={this.props.inverse}>
                                {this.props.label}
                            </Text>
                            {description}
                        </Label>
                    </Spacing>
                )
            } else {
                label = (
                    <label {...css(this.props.styles.label_hidden)}
                        htmlFor={this.props.id}>
                        {this.props.label}
                    </label>
                )
            }
        }

        let errorMessage = null;
        if (this.props.errorMessage && this.props.invalid) {
            errorMessage = (
                <ErrorMessage
                    id={this.props.errorMessageID}>
                    {this.props.errorMessage}
                </ErrorMessage>
            )
        }

        if (this.props.inline) {
            return (
                <div {...css(this.props.styles.container)}> 
                    <FlexBar after={this.props.align === "left" ? this.props.children : label}>
                        {this.props.align === "left" ? label : this.props.children}
                        {errorMessage}
                    </FlexBar>
                </div>
            )
        } else {
            return (
                <div {...css(this.props.styles.container)}> 
                    {label}
                    {this.props.children}
                    {errorMessage}
                </div>
            )
        }
    }
}    

FormElement.propTypes = {
    actionLink: PropTypes.node,
    hideLabel: PropTypes.bool,
    id: PropTypes.string.isRequired,
    inline: PropTypes.bool,
    invalid: PropTypes.bool,
    label: PropTypes.string,
    hasExternalLabel: PropTypes.bool,
    inverse: PropTypes.bool,
    align: PropTypes.oneOf(["left", "right"]),
    labelDescription: PropTypes.string,
    lightLabel: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    errorMessage: PropTypes.string,
    errorMessageID: PropTypes.string,
    children: PropTypes.node
}

FormElement.defaultProps = {
    actionLink: null,
    errorMessage: null,
    hideLabel: false,
    inline: false,
    align: "left",
    invalid: false,
    inverse: false,
    labelDescription: "",
    lightLabel: false,
    small: false,
    large: false,
    children: null
};

export default withStyles(() => ({
    container: {
        display: "block",
        width: "100%"
    },
    label_hidden: {
        border: 0,
        clip: "rect(0, 0, 0, 0)",
        display: "block",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        width: "1px"
    }
}))(FormElement)