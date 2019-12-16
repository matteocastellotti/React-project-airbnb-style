import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '../../IconButton/IconButton';
import IconClose from '../Icons/IconClose/IconClose';
import { withStyles } from '../../../config/withStyles';

const modalCloseButton = props => (
    <IconButton
        roundFocus={true}
        icon={
            <IconClose
                size={2 * props.theme.unit} />
        }
        color={props.theme.color.core.foggy}
        onPress={props.onPress} />
)

modalCloseButton.propTypes = {
    onPress: PropTypes.func
}

modalCloseButton.defaultProps = {
    onPress: () => {
        return;
    }
}

export default withStyles(() => ({}))(modalCloseButton);