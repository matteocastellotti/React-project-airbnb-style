import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DropdownList from '../DropdownList/DropdownList';
import DropdownRow from '../DropdownRow/DropdownRow';
import Translate from '../UI/Translate/Translate';
import { headerActions } from '../../store/actions';

class UserMenu extends React.Component {
    render() {
        return (
            <DropdownList
                id={this.props.id}
                ariaLabelledById={this.props.ariaLabelledById}>
                <DropdownRow
                    href="/me/information"
                    role="menuitem"
                    onPress={this.props.onHeaderNavigationItemDeselect}>
                    <Translate labelKey="PROFILE" />
                </DropdownRow>
                <DropdownRow
                    href="/my-agency/information"
                    role="menuitem"
                    onPress={this.props.onHeaderNavigationItemDeselect}>
                    <Translate labelKey="AGENCY" />
                </DropdownRow>
                <DropdownRow
                    href="/"
                    role="menuitem"
                    onPress={this.props.onHeaderNavigationItemDeselect}>
                    <Translate labelKey="SETTINGS" />
                </DropdownRow>
                <DropdownRow
                    href="/logout"
                    role="menuitem"
                    onPress={this.props.onHeaderNavigationItemDeselect}>
                    <Translate labelKey="LOGOUT" />
                </DropdownRow>
            </DropdownList>
        )
    }
}

UserMenu.propTypes = {
    ariaLabelledById: PropTypes.string,
    id: PropTypes.string
}

UserMenu.defaultProps = {
    ariaLabelledById: null,
    id: null
}

const mapDispatchToProps = dispatch => {
    return {
        onHeaderNavigationItemDeselect: () => dispatch(headerActions.headerNavigationItemDeselect())
    }
}

export default connect(null, mapDispatchToProps)(UserMenu);