import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DropdownList from '../DropdownList/DropdownList';
import DropdownRow from '../DropdownRow/DropdownRow';
import Translate from '../UI/Translate/Translate';
import { headerActions } from '../../store/actions';

class ListingsMenu extends React.Component {
    render() {
        return (
            <DropdownList
                id={this.props.id}
                ariaLabelledById={this.props.ariaLabelledById}>
                <DropdownRow
                    href="/my-listings/incomplete"
                    role="menuitem"
                    onPress={this.props.onHeaderNavigationItemDeselect}>
                    <Translate labelKey="INCOMPLETE_LISTINGS" />
                </DropdownRow>
                <DropdownRow
                    href="/my-listings"
                    role="menuitem"
                    onPress={this.props.onHeaderNavigationItemDeselect}>
                    <Translate labelKey="EDIT_LISTINGS" />
                </DropdownRow>
                <DropdownRow
                    href="/new-listing"
                    role="menuitem"
                    onPress={this.props.onHeaderNavigationItemDeselect}>
                    <Translate labelKey="INSERT_LISTING" />
                </DropdownRow>
            </DropdownList>
        )
    }
}

ListingsMenu.propTypes = {
    ariaLabelledById: PropTypes.string,
    id: PropTypes.string
}

ListingsMenu.defaultProps = {
    ariaLabelledById: null,
    id: null
}

const mapDispatchToProps = dispatch => {
    return {
        onHeaderNavigationItemDeselect: () => dispatch(headerActions.headerNavigationItemDeselect())
    }
}

export default connect(null, mapDispatchToProps)(ListingsMenu);