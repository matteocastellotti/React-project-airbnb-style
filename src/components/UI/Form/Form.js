import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
    render() {
        return (
            <form
                onSubmit={this.props.onSubmit}>
                {this.props.children}
            </form>
        )
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func
}

Form.defaultProps = {
    onSubmit: () => {
        return;
    }
}

export default Form;