import React from 'react';
import PropTypes from 'prop-types';

import polyglot from '../../languageProvider';

function o(e, t) {
    var n = {};
    for (var r in e)
        t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    return n
}

export const withLabels = Component => {
    return class WithLabels extends React.Component {

        
        static childContextTypes = { 
            phrases: PropTypes.isRequired
        }

        getChildContext() {
            return {
                phrases: polyglot.phrases
            }
        }
        
        componentWillMount() {
            this.componentWillReceiveProps(this.props)
        }
        
        componentWillReceiveProps(nextProps) {
         //   polyglot.extend(nextProps.phrases);
        }
        
        render() {
            return React.createElement(Component, (this.props.phrases, o(this.props, ["phrases"])))
        }
    }
}