import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import ListingCardPhoto from './ListingCardPhoto';
import ListingCardDetail from './ListingCardDetail';
import ListingCardAction from './ListingCardAction';
import Modal from '../Modal/Modal';
import FlexBar from '../FlexBar/FlexBar';
import Translate from '../Translate/Translate';
import Button from '../Button/Button';
import Spacing from '..//Spacing/Spacing';
import { meListingActions } from "../../../store/actions";
import ButtonOrLink from '../ButtonOrLink/ButtonOrLink';

import { css, withStyles } from '../../../config/withStyles';

class ListingCard extends React.Component {

    state = {
        confirmationVisible: false
    };

    onConfirmationOpen = event => {
        this.setState({confirmationVisible: true});
    }

    onConfirmationClosed = event => {
        this.setState({confirmationVisible: false});
    }

    onConfirm = id => {
        this.props.onDelete(id);
        this.onConfirmationClosed();
    }

    render() {
        return (
            <li
                {...css(this.props.styles.container)}
                onClick={this.props.onPress}>
                <ButtonOrLink
                    href={this.props.href}>
                    <ListingCardPhoto 
                        src={this.props.src} />
                    <ListingCardDetail
                        title={this.props.title}  />
                </ButtonOrLink>
                <ListingCardAction
                    onDeletePress={(event) => this.onConfirmationOpen(event)} />
                <Modal
                    name="deleteConfirmation"
                    onClose={(event) => this.onConfirmationClosed(event)}
                    visible={this.state.confirmationVisible}>
                    <div>
                        Sei sicuro di cancellare questo annuncio? Non potrai più tornare indietro.
                        <Spacing top={3}>
                            <FlexBar
                                before={
                                    <Button
                                        type="submit"
                                        onPress={(listingId) => this.onConfirm(this.props.listingId)}
                                        block={true}
                                        secondary={true}>
                                        <Translate labelKey="CANCEL" />
                                    </Button>
                                }
                                after={
                                    <Button
                                        type="submit"
                                        onPress={(event) => this.onConfirmationClosed(event)}
                                        block={true}
                                        secondary={true}>
                                        <Translate labelKey="BACK" />
                                    </Button>
                                } />
                        </Spacing>
                    </div>
                </Modal>
            </li>
        )
    }
}

ListingCard.propTypes = {
    listingId: PropTypes.string.isRequired,
    src: PropTypes.string,
    title: PropTypes.string,
    onConfirmationOpen: PropTypes.func,
    href: PropTypes.string
}

ListingCard.defaultProps = {
    listingId: null,
    src: null,
    title: null,
    onConfirmationOpen: () => {
        return;
    },
    href: null
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (listing_id) => dispatch(meListingActions.remove(listing_id))
    }
}

export default compose(
    withStyles(({ responsive, color }) => ({
        container: {
            position: "relative",
            display: "block",
            listStyle: "none",
            background: color.white,
            transformOrigin: "top",
            maxHeight: 700,
            opacity: 1,
            filter: "alpha(opacity=100)",
            boxShadow: "rgb(242, 242, 242) 0px 2px 5px 0px",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "rgb(228, 228, 228)",
            borderImage: "initial",
            borderRadius: 4,
            [responsive.mediumAndAbove]: {
                margin: "0 0 12px",
                height: 202
            },
            "::before": {
                content: "''",
                display: "table"
            },
            "::after": {
                content: "''",
                display: "table",
                clear: "both"
            },
            ":hover": {
                boxShadow: "0 0 0 4px rgba(69,69,69,.2)"
            }
        }
    })),
    connect(null, mapDispatchToProps)
)(ListingCard);