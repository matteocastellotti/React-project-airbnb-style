import React, { Component } from 'react';
import { connect } from 'react-redux';

import FlexBar from '../../../components/UI/FlexBar/FlexBar';
import Button from '../../../components/UI/Button/Button';
import Spacing from '../../../components/UI/Spacing/Spacing';
import Translate from '../../../components/UI/Translate/Translate';

import { meListingActions } from "../../../store/actions";

class Delete extends Component {
    
    deleteHandler() {
        this.props.onDelete(this.props.entity_id);
    }

    render() {
        return (
            <div>
                Sei sicuro di cancellare questo annuncio? Non potrai più tornare indietro.
                <Spacing top={3}>
                    <FlexBar
                        before={
                            <Button
                                type="submit"
                                onPress={this.deleteHandler}
                                block={true}
                                secondary={true}>
                                <Translate labelKey="CANCEL" />
                            </Button>
                        }
                        after={
                            <Button
                                type="submit"
                                block={true}
                                secondary={true}>
                                <Translate labelKey="BACK" />
                            </Button>
                        } />
                </Spacing>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        entity_id: state.Modal.toJS().entity_id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (listing_id) => dispatch(meListingActions.remove(listing_id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Delete);