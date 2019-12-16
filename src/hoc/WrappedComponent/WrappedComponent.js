import React, { Component } from 'react';

class WrappedComponent extends Component {
    render() {
        if (this.props.show === undefined || !this.props.show) {
            return null;
        }

        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}

export default WrappedComponent;