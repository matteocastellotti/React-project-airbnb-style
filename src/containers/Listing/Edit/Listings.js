import React from 'react';
import { connect } from 'react-redux';

import ListingCardList from '../../../components/UI/ListingCard/ListingCardList';
import ListingCard from '../../../components/UI/ListingCard/ListingCard';
import { meListingActions } from "../../../store/actions";

class Listings extends React.Component {

    componentDidMount() {
        this.props.onGetAllComplete();
    }

    render() {

        let listings = null;
        if (this.props.completes) {
            listings = this.props.completes.map((value, key) => {
                return (
                    <ListingCard
                        key={key}
                        listingId={value.id}
                        href={'/new-listing/' + value.id}
                        title={value.summary.name}
                        src="https://a0.muscache.com/im/pictures/1c77568c-ea1e-46a1-b285-749c2196746c.jpg?aki_policy=large" />  
                )
            })
        }

        return (
            <ListingCardList>
                {listings}
            </ListingCardList>
        )
    }
}

const mapStateToProps = state => {
    return {
        completes: state.MeListing.toJS().completes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetAllComplete: () => dispatch(meListingActions.getAllComplete())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings);