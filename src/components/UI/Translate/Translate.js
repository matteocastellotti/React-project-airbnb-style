import React, { Component } from 'react';
import PropTypes from 'prop-types';

import polyglot from '../../../languageProvider';

class Translate extends Component {
    render() {

        let text = null;
        if(this.props.params !== null) {
            text = polyglot.t(this.props.labelKey, this.props.params);
        } else {
            text = polyglot.phrases[this.props.labelKey];
        }

        return (
            <span>
                {text}
            </span>
        )
    }
}

Translate.propTypes = {
    labelKey: PropTypes.string.isRequired,
    params: PropTypes.object
}

Translate.defaultProps = {
    labelKey: null,
    params: null
}

export default Translate;