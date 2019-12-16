import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ButtonOrLink extends React.PureComponent {
    
    boh = event => {
        this.props.removeOutlineOnPress && event.currentTarget.blur();
        this.props.onMouseUp && this.props.onMouseUp(this.props);
    }
    
    render() {
        const W = this.props.onMouseUp || this.props.removeOutlineOnPress ? this.boh : null;
        const attributes = {
            className: this.props.className,
            style: this.props.style,
            id: this.props.id,
            role: this.props.role,
            onClick: this.props.onClick,
            onFocus: this.props.onFocus,
            onBlur: this.props.onBlur,
            onMouseDown: this.props.onMouseDown,
            onMouseUp: W,
            onMouseEnter: this.props.onMouseEnter,
            onMouseLeave: this.props.onMouseLeave,
            onDragStart: this.props.onDragStart,
            onDragEnd: this.props.onDragEnd,
            "aria-label": this.props.ariaLabel,
            "aria-selected": this.props.ariaSelected,
            "aria-describedby": this.props.ariaDescribedBy,
            "aria-disabled": this.props.ariaDisabled,
            "aria-haspopup": this.props.ariaHasPopup,
            "aria-expanded": this.props.ariaExpanded,
            "aria-controls": this.props.ariaControls,
            "aria-busy": this.props.loading,
            "data-vars-click-type": this.props.ampVarsClickType,
            "data-amp-replace": this.props.ampReplace,
            "data-veloute": this.props.velouteId,
            itemProp: this.props.itemProp
        };

        let element = null;
        if (!this.props.href || this.props.disabled) {
            element = (
                <button
                    type={this.props.type}
                    disabled={this.props.disabled || this.props.loading}
                    ref={this.props.buttonAnchorRef}
                    aria-pressed={this.props.ariaPressed}
                    {...attributes}> 
                    {this.props.children}
                </button> 
            )
        } else {
            element = (
                <Link 
                    to={this.props.href}
                    target={this.props.openInNewWindow ? "_blank" : null}
                    rel={this.props.openInNewWindow ? "noopener noreferrer" : null}
                    ref={this.props.buttonAnchorRef}
                    {...attributes}>
                    {this.props.children}
                </Link>
            )
        }
        return element;
    }
}

ButtonOrLink.propTypes = {
    className: PropTypes.string,
    style:  PropTypes.any,
    id: PropTypes.string,
    children:  PropTypes.node,
    type:  PropTypes.oneOf(["button", "submit"]),
    href:  PropTypes.string,
    openInNewWindow: PropTypes.bool,
    role: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onMouseDown: PropTypes.func,
    onMouseUp: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onDragStart: PropTypes.func,
    onDragEnd: PropTypes.func,
    ariaLabel: PropTypes.string,
    ariaSelected: PropTypes.bool,
    ariaDescribedBy: PropTypes.string,
    ariaDisabled: PropTypes.bool,
    ariaHasPopup: PropTypes.bool,
    ariaExpanded: PropTypes.bool,
    ariaControls: PropTypes.string,
    ariaPressed: PropTypes.bool,
    removeOutlineOnPress: PropTypes.bool,
    ampVarsClickType: PropTypes.string,
    ampReplace: PropTypes.string,
    itemProp: PropTypes.string,
    loading: PropTypes.bool,
    buttonAnchorRef: PropTypes.func,
    velouteId: PropTypes.string
}
  
ButtonOrLink.defaultProps = {
    className: null,
    style: null,
    id: null,
    children: null,
    type: "button",
    href: null,
    openInNewWindow: false,
    role: null,
    disabled: null,
    onClick: () => {
        return;
    },
    onFocus: () => {
        return;
    },
    onBlur: () => {
        return;
    },
    onMouseDown: () => {
        return;
    },
    onMouseUp: () => {
        return;
    },
    onMouseEnter: () => {
        return;
    },
    onMouseLeave: () => {
        return;
    },
    onDragStart: () => {
        return;
    },
    onDragEnd: () => {
        return;
    },
    ariaLabel: null,
    ariaSelected: null,
    ariaDescribedBy: null,
    ariaDisabled: null,
    ariaHasPopup: null,
    ariaExpanded: null,
    ariaControls: null,
    ariaPressed: null,
    removeOutlineOnPress: false,
    ampVarsClickType: null,
    ampReplace: null,
    itemProp: null,
    loading: false,
    buttonAnchorRef: () => {   
        return 
    },
    velouteId: null
};

export default ButtonOrLink;