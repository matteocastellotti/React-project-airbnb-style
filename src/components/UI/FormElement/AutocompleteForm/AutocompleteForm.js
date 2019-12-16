import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PropTypes2 from 'airbnb-prop-types';

import Autocomplete from '../../Autocomplete/Autocomplete';
import WrappedComponent from '../../../WrappedComponent/WrappedComponent';
     /* , f = "ArrowDown"
      , h = "ArrowUp"
      , b = "Enter"
      , m = "Escape"*/
      
class AutocompleteForm extends Component {
      
    state = {
        activeIndex: this.props.defaultActiveIndex,
        areResultsVisible: true,
        value: this.props.defaultValue,
        lastEventType: null
    }
     
    componentWillReceiveProps(nextProps) {
        if(nextProps.defaultValue !== this.props.defaultValue && null !== nextProps.defaultValue) {
            this.setState({ value: nextProps.defaultValue });
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    
    onBlur = event =>  {
        this.props.onBlur(event);
    }
    
    onCancel = event => {
        if(this.state.areResultsVisible) {
            this.props.onCancel(event);
        }
    }
    
    onChange = event => {
        this.setState({
            activeIndex: this.props.activeIndexOnInputChange,
            value: event
        });
        this.showDropdown();
        this.props.onChange(event);
    }
        
    onClear = event => {
        this.hideDropdown();
        this.setState({
            activeIndex: this.props.defaultActiveIndex,
            value: ""
        });
        this.input && (this.timeout = setTimeout(function() {
            this.onSelect({
                name: ""
            }, -1, event);
            this.input.focus();
        }))
    }
           
    onFocus = event => {
        this.showDropdown();
        this.props.onFocus(event);
    }
    
    onKeyDown = event => {
        switch(event.key) {
        case "ArrowDown":
            this.onKeyArrowDown(event);
            break;
        case "ArrowUp":
            this.onKeyArrowUp(event);
            break;
        case "Enter":
            this.onKeyEnter(event);
            break;
        case "Escape":
            this.onKeyEscape(event);
            break;
        default:
            break;
        }
    }
    
    onKeyArrowDown = event => {
        event.preventDefault();
        if (this.state.areResultsVisible && this.props.results.length) {
            this.setState({
                activeIndex: this.state.activeIndex < 0 ? 0 : (this.state.activeIndex + 1) % this.props.results.length,
                lastEventType: "keyboard"
            })
        } else {
            this.showDropdown();
        }
    }
     
    onKeyArrowUp = event => {
        event.preventDefault();
        if (this.state.areResultsVisible && this.props.results.length) {
            this.setState({
                activeIndex: this.state.activeIndex < 0 ? this.props.results.length - 1 : (this.state.activeIndex + (this.props.results.length - 1)) % this.props.results.length,
                lastEventType: "keyboard"
            })
        }
    }
    
    onKeyEnter = event => {
        if (this.state.activeIndex >= 0 && this.state.activeIndex < this.props.results.length) {
            event.preventDefault();
            this.select(
                this.props.results[this.state.activeIndex],
                this.state.activeIndex,
                event
            );
        } else {
            if(this.props.hideDropdownOnSubmit) {
                this.hideDropdown();
            }
        }
        this.props.onSubmit(event);
        if(this.props.clearOnSubmit) {
            this.setState({ value: "" });
        }
    }
     
    onKeyEscape = event => {
        this.hideDropdown()
    }
    
    onMouseEnter = (e, t) => {
        this.setState({
            activeIndex: t,
            lastEventType: "mouse"
        })
    }
     
    onOutsideFocus = event => {
        this.onCancel(event);
        this.hideDropdown()
    }
    
    onSelect = (e, t, n) => {
        this.select(e, t, n);
    }
            
    hideDropdown = () => {
        this.setState({
            activeIndex: -1,
            areResultsVisible: false,
            lastEventType: null
        })
    }
    
    select = (item, t, n) => {
        this.setState({ value: this.props.clearOnSelect ? "" : item.name });
        this.hideDropdown();
        this.props.onSelect(item, t, n);
    }
     
    showDropdown = () => {
        this.setState({ areResultsVisible: true });
    }
     
    inputRef = e => {
        this.input = e;
        this.props.inputRef(e);
    }
    
    render() {
        return (
            <WrappedComponent onOutsideClick={this.onOutsideFocus}>
                <Autocomplete
                    inputRef={this.inputRef}
                    areResultsVisible={this.state.areResultsVisible}
                    autoFocus={this.props.autoFocus}
                    activeIndex={this.state.activeIndex}
                    book={this.props.book}
                    disabled={this.state.disabled}
                    id={this.props.id}
                    inline={this.props.inline}
                    label={this.props.label}
                    hideLabel={this.props.hideLabel}
                    inputBorderless={this.props.inputBorderless}
                    inputFocusBorderless={this.props.inpuitFocusBorderless}
                    inputRemoveMargins={this.props.inputRemoveMargins}
                    inputOverflowEllipsis={this.props.inputOverflowEllipsis}
                    invalid={this.props.invalid}
                    isLoading={this.props.isLoading}
                    small={this.props.small}
                    large={this.props.large}
                    underlineFocus={this.props.underlineFocus}
                    name={this.props.name}
                    noResultsLabel={this.props.noResultsLabel}
                    maxResults={this.props.maxResults}
                    results={this.props.results}
                    resultsPosition={this.props.resultsPosition}
                    resultsWidth={this.props.resultsWidth}
                    resultsMaxHeight={this.props.resultsMaxHeight}
                    resultsBorderless={this.props.resultsBorderless}
                    scrollResults={this.props.scrollResults}
                    subResultPaddingUnits={this.props.subResultPaddingUnits}
                    hideResultsTopBorder={this.props.hideResultsTopBorder}
                    placeholder={this.props.placeholder}
                    showFakeValuePlaceholder={this.props.showFakeValuePlaceholder}
                    prefix={this.props.prefix}
                    lastEventType={this.props.lastEventType}
                    onBlur={this.onBlur}
                    onChange={this.onChange}
                    onClear={this.props.addClearInput ? this.onClear : null}
                    onFocus={this.onFocus}
                    onKeyDown={this.onKeyDown}
                    onMouseEnter={this.onMouseEnter}
                    onSelect={this.onSelect}
                    value={this.props.value}
                    errorMessage={this.props.invalid ? this.props.errorMessage : ""}
                    errorMessageID={this.props.invalid && this.props.errorMessage ? this.props.id + "_error" : null} />
            </WrappedComponent>
        )
    }
};

AutocompleteForm.propTypes = {
    addClearInput: PropTypes.bool,
    autoFocus: PropTypes.bool,
    book: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    hideLabel: PropTypes.bool,
    inputBorderless: PropTypes.bool,
    inputFocusBorderless: PropTypes.bool,
    inputRemoveMargins: PropTypes.bool,
    inputOverflowEllipsis: PropTypes.bool,
    inputRef: PropTypes.func,
    underlineFocus: PropTypes.bool,
    name: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    showFakeValuePlaceholder: PropTypes.bool,
    noResultsLabel: PropTypes.object,
    isLoading: PropTypes.bool,
    prefix: PropTypes.node,
    small: PropTypes.bool,
    large: PropTypes.bool,
    invalid: PropTypes.bool,
    activeIndexOnInputChange: PropTypes.number,
    clearOnSelect: PropTypes.bool,
    clearOnSubmit: PropTypes.bool,
    defaultActiveIndex: PropTypes.number,
    inline: PropTypes.bool,
    maxResults: PropTypes.number,
    results: PropTypes.arrayOf(PropTypes.object),
    resultsWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    resultsMaxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    resultsPosition: PropTypes.object,
    scrollResults: PropTypes.bool,
    subResultPaddingUnits: PropTypes2.nonNegativeInteger,
    hideResultsTopBorder: PropTypes.bool,
    resultsBorderless: PropTypes.bool,
    hideDropdownOnSubmit: PropTypes.bool,
    onBlur: PropTypes.func,
    onCancel: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onSelect: PropTypes.func,
    onSubmit: PropTypes.func,
    errorMessage: PropTypes.string,
    errorMessageID: PropTypes.string,
};

AutocompleteForm.defaultProps = {
    addClearInput: false,
    autoFocus: false,
    book: false,
    disabled: false,
    inputBorderless: false,
    inputFocusBorderless: false,
    inputRemoveMargins: false,
    inputOverflowEllipsis: false,
    underlineFocus: false,
    placeholder: "",
    showFakeValuePlaceholder: false,
    noResultsLabel: null,
    isLoading: false,
    defaultValue: "",
    hideLabel: false,
    small: false,
    large: false,
    invalid: false,
    activeIndexOnInputChange: -1,
    clearOnSelect: false,
    defaultActiveIndex: -1,
    inline: false,
    maxResults: 0,
    results: [],
    resultsWidth: "100%",
    resultsMaxHeight: null,
    resultsPosition: null,
    scrollResults: false,
    subResultPaddingUnits: 4,
    resultsBorderless: false,
    hideResultsTopBorder: null,
    hideDropdownOnSubmit: true,
    onBlur: () => {
        return;
    },
    onCancel: () => {
        return;
    },
    onChange: () => {
        return;
    },
    onFocus: () => {
        return;
    },
    onSelect: () => {
        return;
    },
    onSubmit: () => {
        return;
    },
    inputRef: () => {
        return;
    }
};

export default AutocompleteForm;