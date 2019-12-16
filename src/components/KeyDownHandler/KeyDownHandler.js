import React from 'react';
import PropTypes from 'prop-types';

class KeyDownHandler extends React.Component {
   
    onKeyDown = event => {
        const { keyName, handler, allowPropagation} = this.props;
        event.key === keyName && handler(event);
        allowPropagation || event.stopPropagation();
    }
     
    render() {
        return (
            <div onKeyDown={this.onKeyDown}>
                {this.props.children}
            </div>
        )
    }
}

KeyDownHandler.propTypes = {
    children: PropTypes.node.isRequired,
    handler: PropTypes.func.isRequired,
    keyName: PropTypes.string.isRequired,
    allowPropagation: PropTypes.bool
};

KeyDownHandler.defaultProps = {
    allowPropagation: !1
}

export default KeyDownHandler;