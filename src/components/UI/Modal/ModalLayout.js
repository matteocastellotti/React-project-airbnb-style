import React from 'react';
import PropTypes from 'prop-types';

import ModalHeader from './ModalHeader';
import ModalCloseButton from './ModalCloseButton';
import { css, withStyles } from '../../../config/withStyles';

class ModalLayout extends React.Component {
   
    render() {
        let closeButton = null;
        if (this.props.closeButton) {
            closeButton = this.props.closeButton;
        } else {
            closeButton = <ModalCloseButton onPress={this.props.onClose} />
        }
        return  (
            <div
                {...css(
                    this.props.styles.contentBox,
                    this.props.jumbo && this.props.styles.contentBox_jumbo,
                    this.props.onClose && this.props.styles.contentBox_small,
                )}> 
                <div 
                    {...css(
                        this.props.floatCloseButtonRight && this.props.styles.closeButton_floatRight,
                        this.props.styles.closeButton
                    )}>
                {closeButton}
                </div>
                {this.props.title && <ModalHeader title={this.props.title} />}
                {this.props.children}
            </div>
        )                
    }
}

    
ModalLayout.propTypes = {
    backgroundAccent: PropTypes.bool,
    children: PropTypes.node, //Object(i.childrenOfType)(p.a, h.a, b.a),
    closeButton: PropTypes.node,
    floatCloseButtonRight: PropTypes.bool,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    title: PropTypes.string//m.a
}

ModalLayout.defaultProps = {
    backgroundAccent: false,
    closeButton: null,
    floatCloseButtonRight: false,
    onClose: () => {
        return;
    },
    onOpen: () => {
        return;
    },
}

//Modal.contextTypes = {
//    jumbo: v.a,
//    onClose: s.a.func,
//    small: v.a
//}
export default withStyles(({color, responsive, unit }) => ({
    contentBox: {
        backgroundColor: color.modal.background,
        padding: 4 * unit,
        boxSizing: "border-box"
    },
    contentBox_jumbo: {
        minHeight: 516,
        [responsive.large]: {
            padding: 6 * unit
        },
        [responsive.small]: {
            minHeight: 0
        }
    },
    contentBox_small: {
        padding: 3 * unit
    },
    closeButton: {
        marginBottom: 3 * unit
    },
    closeButton_floatRight: {
        marginTop: unit / 4,
        float: "right"
    }    
}))(ModalLayout);