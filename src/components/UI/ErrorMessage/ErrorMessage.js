import React from 'react';
import PropTypes from 'prop-types';

import { css, withStyles } from '../../../config/withStyles';

class ErrorMessage extends React.Component {
    render() {
        return (
            <div
                id={this.props.id}
                aria-live={"polite"}
                {...css(this.props.styles.errorMessage)}>
                {this.props.children}
            </div>
        )
    }
}
      
ErrorMessage.propTypes = {
    children: PropTypes.string,
    id: PropTypes.string
}
 
export default withStyles(({ font, color }) => ({
    errorMessage: Object.assign({},
        font.formErrorMessage,
        {
            color: color.inputErrorMessage
        }
    )
}))(ErrorMessage)