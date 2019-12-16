import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../Label/Label';
import StatusLabel from '../../StatusLabel/StatusLabel';
import CheckBox from '../../CheckBox/CheckBox';
import { css, withStyles } from '../../../../config/withStyles';

class CheckBoxForm extends React.Component {
    render() {
        let statusLabel = null;
        if (this.props.statusLabel) {
            statusLabel = (
                <span> 
                    <StatusLabel
                        secondary={false}
                        book={false}>
                        {this.props.statusLabel}
                    </StatusLabel>
                </span>
            )
        }

        let subtitle = null;
        if (!!this.props.subtitle) {
            subtitle = (
                <span
                    {...css(
                        this.props.styles.text,
                        this.props.styles.subtitle,
                        !this.props.pullRight && this.props.styles.textSpacing,
                        this.props.disabled && this.props.styles.text_disabled
                    )}>
                    {this.props.subtitle}
                </span>
            )
        }

        return (
            <Label
                table={!this.props.pullRight}
                htmlFor={this.props.id}>
                <div 
                    {...css(
                        this.props.styles.column,
                        this.props.pullRight && this.props.styles.checkboxPullRight
                    )}>
                    <CheckBox
                        checked={this.props.checked}
                        describedById={this.props.describedById}
                        disabled={this.props.disabled}
                        id={this.props.id}
                        name={this.props.name}
                        onBlur={this.props.onBlur}
                        onChange={this.props.onChange}
                        onFocus={this.props.onFocus}
                        value={this.props.value}
                        velouteId={this.props.velouteId}
                        invalid={this.props.invalid}
                        refForFocus={this.props.refForFocus} />
                </div>
                <div 
                    {...css(
                        this.props.styles.column,
                        this.props.pullRight && this.props.styles.pullRightColumn
                    )}>
                    <span
                        {...css(
                            this.props.styles.text,
                            this.props.styles.label,
                            !this.props.pullRight && this.props.styles.textSpacing,
                            this.props.disabled && this.props.styles.text_disabled
                        )}>
                        {this.props.label}
                        {statusLabel}
                        {subtitle}
                    </span>
                </div>
            </Label>
        )
    }
}
  
CheckBoxForm.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.node.isRequired,
    pullRight: PropTypes.bool,
    statusLabel: PropTypes.string,
    subtitle: PropTypes.string,
    onChange: PropTypes.func
}
 
CheckBoxForm.defaultProps = {
    id: null,
    name: null,
    label: null,
    pullRight: false,
    statusLabel: null,
    subtitle: null,
    onChange: () => {
        return;
    }
};
    
export default withStyles(({ font, color, unit }) => ({
    column: {
        display: "table-cell",
        verticalAlign: "top",
        whiteSpace: "normal"
    },
    checkboxPullRight: {
        float: "right"
    },
    text: Object.assign({},
        font.light,
        {
            cursor: "pointer"
        }
    ),
    textSpacing: {
        paddingLeft: unit
    },
    text_disabled: {
        color: color.textDisabled
    },
    label: Object.assign({},
        font.formLabel,
        {
            display: "inline-block",
            position: "relative",
            top: -3,
            verticalAlign: "top"
        }
    ),
    subtitle: Object.assign({},
        font.textSmall,
        {
            display: "block",
            paddingTop: unit / 2
        }
    ),
    pullRightColumn: {
        marginRight: 4 * unit,
        display: "block"
    }
}))(CheckBoxForm);