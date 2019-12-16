import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Divider from '../UI/Divider/Divider';
import FlyoutMenuItem from './FlyoutMenuItem';
import FlexBar from '../UI/FlexBar/FlexBar';
import Translate from '../UI/Translate/Translate';

import { css, withStyles } from '../../config/withStyles';
import { modalActions } from '../../store/actions';

class FlyoutMenu extends React.Component {
    
    componentDidUpdate(prevProps) {
        if (this.props.open && !prevProps.open) {
            this.props.onOpen();
        } else if (!this.props.open && prevProps.open) {
            this.props.onClose();
        }
    }
    
    componentWillUnmount() {
        this.props.open && this.props.onClose();
    }
    
    render() {
        let element = null;
        if (this.props.open) {
            element = (
                <div {...css(this.props.styles.hidden)}>
                    <div {...css(this.props.styles.container)}>
                        <ul {...css(this.props.styles.content)}>
                            <li>
                                <FlyoutMenuItem href="/">
                                    <FlexBar>
                                        <Translate labelKey="HOME" />
                                    </FlexBar>
                                </FlyoutMenuItem>
                            </li>
                            <li>
                                <Divider />
                            </li>
                            {this.props.isLoggedIn &&
                                <li>
                                    <FlyoutMenuItem href="/me/information">
                                        <FlexBar>
                                            <Translate labelKey="PROFILE" />
                                        </FlexBar>
                                    </FlyoutMenuItem>
                                </li>
                            }
                            {this.props.isLoggedIn && !this.props.isPrivate &&
                                    <li>
                                        <FlyoutMenuItem href="/my-agency/information">
                                            <FlexBar>
                                                <Translate labelKey="AGENCY" />
                                            </FlexBar>
                                        </FlyoutMenuItem>
                                    </li>
                            }
                            {this.props.isLoggedIn &&
                                <li>
                                    <Divider />
                                </li>
                            }
                            {this.props.isLoggedIn &&
                                <li>
                                    <FlyoutMenuItem href="/new-listing">
                                        <FlexBar>
                                            <Translate labelKey="CREATE_LISTING" />
                                        </FlexBar>
                                    </FlyoutMenuItem>
                                </li>
                            }
                            {this.props.isLoggedIn &&
                                <li>
                                    <Divider />
                                </li>
                            }
                            {this.props.isLoggedIn &&
                                <li>
                                    <FlyoutMenuItem href="/">
                                        <FlexBar>
                                            <Translate labelKey="SETTINGS" />
                                        </FlexBar>
                                    </FlyoutMenuItem>
                                </li>
                            }
                            {this.props.isLoggedIn &&
                                <li>
                                    <FlyoutMenuItem href="/logout">
                                        <FlexBar>
                                            <Translate labelKey="LOGOUT" />
                                        </FlexBar>
                                    </FlyoutMenuItem>
                                </li>
                            }
                            {!this.props.isLoggedIn &&
                                <li>
                                    <FlyoutMenuItem onPress={this.props.onSignupOpened}>
                                        <FlexBar>
                                            <Translate labelKey="SIGNUP" />
                                        </FlexBar>
                                    </FlyoutMenuItem>
                                </li>
                            }
                            {!this.props.isLoggedIn &&
                                <li>
                                    <FlyoutMenuItem onPress={this.props.onAuthOpened}>
                                        <FlexBar>
                                            <Translate labelKey="ACCESS" />
                                        </FlexBar>
                                    </FlyoutMenuItem>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            )
        }
        return element;
    }
}

FlyoutMenu.propTypes = {
    styles: PropTypes.object.isRequired,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
    isPrivate: PropTypes.bool
}

FlyoutMenu.defaultProps = {
    onOpen: () => {
        return;
    },
    onClose: () => {
        return;
    },
    open: false,
    isLoggedIn: false,
    isPrivate: false
}

const mapStateToProps = state => {
    const { isLoggedIn, isPrivate } = state.Header.toJS();
    return { 
        isLoggedIn: isLoggedIn,
        isPrivate: isPrivate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthOpened: () => dispatch(modalActions.authModalOpened()),
        onSignupOpened: () => dispatch(modalActions.signupModalOpened())
    }
}

export default compose(
    withStyles(({ color, unit }) => ({
        hidden: {
            overflow: "hidden"
        },
        container: {        
            transition: "transform 304ms ease-out",
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            transform: "translateY(0)"
        },
        content: {
            backgroundColor: color.white,
            height: "100%",
            overflow: "hidden",
            listStyleType: "none",
            overflowX: "hidden",
            overflowY: "auto",
            "-webkit-overflow-scrolling": "touch",
            padding: 3 * unit,
            paddingTop: 64 + 3 * unit
        }
    })),
    connect(mapStateToProps, mapDispatchToProps)
)(FlyoutMenu);