import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../../IconButton/IconButton';
import DeleteIcon from '../Icons/DeleteIcon/DeleteIcon';

import { css, withStyles } from '../../../config/withStyles';

class ListingCardAction extends React.Component {
    render() {
        return (
            <div {...css(this.props.styles.container)}>
                <IconButton
                    roundFocus={true}
                    icon={
                        <DeleteIcon
                            size={2 * this.props.theme.unit} />
                    }
                    color={this.props.theme.color.core.foggy}
                    onPress={this.props.onDeletePress} />
            </div>
        )
    }
}

ListingCardAction.propTypes = {
    onDeletePress: PropTypes.func
}

ListingCardAction.defaultProps = {
    onDeletePress: () => {
        return;
    }
}

export default withStyles(({ color, responsive, unit }) => ({
    container: {
        position: "absolute",
        top: "calc(75vw - 10px)",
        right: 12,
        bottom: 20,
        [responsive.mediumAndAbove]: {
            top: "inherit"
        }
    }
}))(ListingCardAction);