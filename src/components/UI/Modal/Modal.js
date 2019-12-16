import React from 'react';
import PropTypes from 'prop-types';

import HeadingSection from './HeadingSection';
import ModalLayout from './ModalLayout';
import PortalWithDirection from '../../UI/PortalWithDirection/PortalWithDirection';
import { css, withStyles } from '../../../config/withStyles';

class Modal extends React.Component {

    getChildContext() {
        return {
            headingLevel: void 0,
            jumbo: this.props.jumbo,
            modalName: this.props.name,
            onClose: this.props.onClose,
            small: this.props.small
        }
    }
         
    componentWillReceiveProps(nextProps) {
        nextProps.visible || nextProps.visible === this.props.visible || this.onClose()
    }
    
    componentWillUnmount() {
        /*this.openTimeout && clearTimeout(this.openTimeout);
        remove(this.ariaHiddenElements);*/
        this.props.visible && this.onClose();
    }
    
    onOpen = () => {
        //var e = this;
        document.body.style.overflow = "hidden";
        this.lastActiveElement = document.activeElement;
        /*this.openTimeout = setTimeout(function() {
            e.openTimeout = null,
            e.ariaHiddenElements = Object(I.a)(e.dialogRef),
            Object(A.a)(e.dialogRef)
        }, 0),*/
        this.props.onOpen();
    }

    onClose = event => {
        document.body.style.overflow = "";
        /*Object(I.b)(this.ariaHiddenElements);*/
        this.lastActiveElement && this.lastActiveElement.focus();
        event && this.props.onClose(event);
    }
    
    onKeyUp = event => {
        event.key === "Escape" && this.onClose(event);
    }
    
    onOverlayClick = event => {
        this.dialogRef && !this.dialogRef.contains(event.target) && this.onClose(event)
    }
    
    setDialogRef = event => {
        this.dialogRef = event;
    }
    
    render() {
        /*var e = this.props
            , t = e.css
            , o = e.children
            , i = e.floatCloseButtonRight
            , a = e.jumbo
            , u = e.styles
            , c = e.visible
            , s = e.whiteOverlay
            , f = e.backgroundColor
            , d = e.imageType
            , h = e.imageUrl
            , b = e.renderInPlace
            , g = e.small
            , v = e.title*/
        if (!this.props.visible) {
            return null;
        }
        var w = false;
        //React.Children.count(this.props.children) === 1 && React.Children.forEach(this.props.children, function(element) {
        //    var type = (element.type) || "Component";
        //    (element.type === m.a || eelement.type === y.b || eelement.type === _.a || type.indexOf("ModalLayout") > -1) && (w = !0)
        //});
        var content = React.Children.map(this.props.children, function(element) {
            return element /*&& [m.a, y.b, _.a].includes(element.type) ? React.cloneElement(element) : element*/
        })
        var hsContent = null;
        if (this.props.backgroundColor || this.props.imageUrl) {
            /*React.createElement(_.a, {
                title: this.props.title,
                imageUrl: this.props.imageUrl,
                imageType: this.props.imageType,
                backgroundColor: this.props.backgroundColor
                }, S)*/
        } else if(w) {
            hsContent = content;
        } else {
            hsContent = (
                <ModalLayout 
                    title={this.props.title}
                    onClose={this.props.onClose}
                    floatCloseButtonRight={this.props.floatCloseButtonRight}>
                    {content}
                </ModalLayout>
            )
        }
        let modal = (
            <div
                onClick={this.onOverlayClick}
                {...css(
                    this.props.styles.innerContainer,
                    this.props.whiteOverlay && this.props.styles.innerContainer_whiteOverlay,
                    this.props.renderInPlace && this.props.styles.innerContainer_renderInPlace
                )}> 
                <div {...css(this.props.styles.wrapper)}> 
                    <div
                        aria-modal={true}
                        role="dialog"
                        aria-labelledby={this.props.name}
                        onKeyUp={this.onKeyUp}
                        ref={this.setDialogRef}
                        {...css(
                            this.props.styles.content,
                            this.props.whiteOverlay && this.props.styles.content_whiteOverlay,
                            this.props.jumbo && this.props.styles.content_jumbo,
                            this.props.small && this.props.styles.content_small,
                            this.props.renderInPlace && this.props.styles.content_renderInPlace
                        )}>
                        <HeadingSection>
                            {hsContent}
                        </HeadingSection>
                    </div>
                </div>
            </div>
        )
        if (this.props.renderInPlace) {
            return modal;
        } else {
            return (
                <PortalWithDirection
                    onOpen={this.onOpen}
                    isOpened={this.props.visible}>
                    <div {...css(this.props.styles.container)}>
                        {modal}
                    </div>
                </PortalWithDirection>
            )
        }
    }
}
 
Modal.propTypes =  {
    name: PropTypes.string.isRequired,
    whiteOverlay: PropTypes.bool,
    visible: PropTypes.bool,
    children: PropTypes.node,
    small: PropTypes.bool,
    jumbo: PropTypes.bool,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    floatCloseButtonRight: PropTypes.bool,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    imageType: PropTypes.oneOf(["center", "cover"]),
    backgroundColor: PropTypes.string,
    renderInPlace: PropTypes.bool
}

Modal.defaultProps = {
    jumbo: false,
    onClose: () => {
        return;
    },
    onOpen: () => {
        return;
    },
    small: false,
    visible: false,
    whiteOverlay: false,
    floatCloseButtonRight: false,
    imageType: "center",
    renderInPlace: false
}

Modal.childContextTypes = {
    headingLevel: PropTypes.number,
    jumbo: PropTypes.bool,
    modalName: PropTypes.string,
    onClose: PropTypes.func,
    small: PropTypes.bool
}

export default withStyles(({responsive, color, unit}) => ({
    container: {
        position: "fixed",
        zIndex: 2000,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
        webkitTransform: "translate3d(0,0,0)",
        [responsive.small]: {
            overflowY: "hidden"
        }
    },
    innerContainer: {
        display: "table",
        height: "100%",
        width: "100%",
        backgroundColor: color.modal.overlay,
        [responsive.small]: {
            background: "none",
            display: "block",
            height: "auto",
            width: "auto"
        }
    },
    innerContainer_whiteOverlay: {
        backgroundColor: color.modal.whiteOverlay
    },
    innerContainer_renderInPlace: {
        [responsive.small]: {
            background: color.modal.background,
            width: "100%",
            height: "100%"
        }
    },
    wrapper: {
        display: "table-cell",
        verticalAlign: "middle",
        padding: 8 * unit,
        ":focus": {
            outline: "none"
        },
        [responsive.small]: {
            padding: 0,
            display: "block"
        }
    },
    content: {
        backgroundColor: color.modal.background,
        margin: "auto",
        maxWidth: 568,
        width: "100%",
        position: "relative",
        ":focus": {
            outline: "none"
        },
        [responsive.small]: {
            margin: 0,
            maxWidth: "none",
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            overflowY: "auto",
            WebkitOverflowScrolling: "touch"
        }
    },
    content_whiteOverlay: {
        boxShadow: "0 1px 10px 0 rgba(0, 0, 0, 0.2)"
    },
    content_jumbo: {
        maxWidth: 1032
    },
    content_small: {
        maxWidth: 376
    },
    content_renderInPlace: {
        [responsive.small]: {
            position: "relative"
        }
    }
}))(Modal);