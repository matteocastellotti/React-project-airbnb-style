import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuBar from '../../../components/UI/MenuBar/MenuBar';
import CheckBoxForm from '../../../components/UI/FormElement/CheckBoxForm/CheckBoxForm';
import SelectForm from '../../../components/UI/FormElement/SelectForm/SelectForm';
import Option from '../../../components/UI/Option/Option';

import polyglot from '../../../languageProvider';

class SearchBar extends Component {

    state = {
        showAccessibilityModal: false
    }
            
    toggleAccessibilityModal = () => {
        if(this.state.showAccessibilityModal) {
            this.setState({ showAccessibilityModal: false });
         } else {
             this.setState({ showAccessibilityModal: true });
         }
    }
     
    render() {
        return (
            <MenuBar
                isOpen={!!this.props.activePanel}
                onDeselect={this.props.onDeselect}
                extraPaddingOnLarge={this.props.extraPaddingOnLarge}
                preserveTopAlignment={true}>
                {this.props.filters.map((filter, index) => {
                    switch(filter.type) {
                        case "select":
                            let options = filter.params.map((param, index) => {
                                return (
                                    <Option
                                        key={index}
                                        value={param.value}
                                        label={polyglot.phrases[param.label]} />
                                );
                            });
                            return (
                                <SelectForm
                                    key={index}
                                    id={filter.id}
                                    name={filter.name}
                                    value={filter.value}
                                    placeholder={polyglot.phrases[filter.title]}
                                    small={true}>
                                    {options}
                                </SelectForm>
                            );
                        case "checkbox":
                            return (
                                <CheckBoxForm
                                    id={"DynamicFilterCheckboxItem-" + this.props.item.id}
                                    name={this.props.item.id}
                                    checked={this.state.checked}
                                    label={polyglot.phrases[this.props.item.title]}
                                    subtitle={polyglot.phrases[this.props.item.subtitle]}
                                    disabled={this.props.disabled}
                                    onChange={this.onChange} />
                            );
                        break;

                        default:
                        break;
                    }
                })}
            </MenuBar>
        )
    }
};
  
SearchBar.propTypes = {
    activePanel: PropTypes.string,
    extraPaddingOnLarge: PropTypes.bool,
    filters: PropTypes.object,
    searchFilters: PropTypes.object,
    responseFilters: PropTypes.object,
    immersive: PropTypes.bool,
    loading: PropTypes.bool,
    onFiltersUpdated: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    onDeselect: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSubmitAndDeselect: PropTypes.func.isRequired,
    onOutsideClick: PropTypes.func,
    onClear: PropTypes.func.isRequired,
    outsideClickCancels: PropTypes.bool,
    panelHasClearButton: PropTypes.bool,
    updateFilters: PropTypes.func
};

SearchBar.defaultProps = {
    activePanel: null,
    extraPaddingOnLarge: false,
    filters: {},
    stagedFilters: {},
    responseFilters: {},
    immersive: false,
    loading: false,
    outsideClickCancels: false,
    panelHasClearButton: false,
    updateFilters: {}
};

export default SearchBar;