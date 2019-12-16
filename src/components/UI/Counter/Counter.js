import React from 'react';
import PropTypes from 'prop-types';

import FlatButton from '../FlatButton/FlatButton';
import PlusIcon from '../Icons/PlusIcon/PlusIcon';
import MinusIcon from '../Icons/MinusIcon/MinusIcon';
import Text from '../Text/Text';
import { css, withStyles } from '../../../config/withStyles';

class Counter extends React.Component {
    render() {
        return (
            <div
                {...css(
                    this.props.styles.table,
                    this.props.styles.buttons
                )}>
                <div
                    {...css(
                        this.props.styles.middleAlignedCell,
                        this.props.styles.left
                    )}>
                    <FlatButton
                        secondary={true}
                        small={true}
                        light={true}
                        disabled={this.props.disableDecrement}
                        onPress={this.props.onDecrement}
                        //accessibilityControlledIds={x}
                        icon={<MinusIcon size={16} />} />
                </div>
                <div
                    //id={x}
                    role="region"
                    aria-live="polite"
                    aria-label={this.props.accessibilityValueLabel}
                    {...css(
                        this.props.styles.middleAlignedCell,
                        this.props.styles.center
                    )}>
                    <Text
                        small={this.props.small}>
                        {this.props.value}
                    </Text>
                </div>
                <div
                    {...css(
                        this.props.styles.middleAlignedCell,
                        this.props.styles.right
                    )}>
                    <FlatButton
                        secondary={true}
                        small={true}
                        light={true}
                        disabled={this.props.disableIncrement}
                        onPress={this.props.onIncrement}
                        //accessibilityControlledIds={x}
                        icon={<PlusIcon size={16} />} />
                </div>
            </div>
        )
    }
}

Counter.propTypes = {
    accessibilityValueLabel: PropTypes.string.isRequired,
    disableDecrement: PropTypes.bool,
    disableIncrement: PropTypes.bool,
    onDecrement: PropTypes.func.isRequired,
    onIncrement: PropTypes.func.isRequired,
    small: PropTypes.bool,
    value: PropTypes.oneOfType(["number", "string"]).isRequired
}

Counter.defaultProps = {
    accessibilityValueLabel: null,
    disableDecrement: false,
    disableIncrement: false,
    onDecrement: () => {
        return;
    },
    onIncrement: () => {
        return;
    },
    small: false,
    value: null
}

export default withStyles(({ font, unit }) => ({
    container: {
        border: "none",
        margin: 0,
        padding: 0
    },
    visuallyHidden: {
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
    subtitle: Object.assign({},
        font.textSmall,
        {
            display: "block",
            paddingTop: unit / 2
        }
    ),
    title: {
        marginRight: 1.5 * unit
    },
    table: {
        display: "table"
    },
    middleAlignedCell: {
        display: "table-cell",
        verticalAlign: "middle"
    },
    buttons: {
        width: 15 * unit
    },
    left: {
        textAlign: "left"
    },
    center: {
        textAlign: "center"
    },
    right: {
        textAlign: "right"
    }
}))(Counter);