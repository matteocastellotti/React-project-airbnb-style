import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PropTypes2 from 'airbnb-prop-types';

import { css, withStyles } from '../../../config/withStyles';
import Spacing from '../Spacing/Spacing';
import Text from '../Text/Text';
import InputForm from '../FormElement/InputForm/InputForm';

class Autocomplete extends Component {

    getListContent = () => {
        let content = null;
        if (this.props.isLoading) {
            content = (
                <li
                    {...css(
                        this.props.styles.result,
                        this.props.large && this.props.styles.resultLarge
                    )}
                    id={this.props.id + "__option-loading"}
                    role="option"
                    aria-selected={true}
                    tabIndex={-1}>
                    {/*<Loader />*/}
                </li>
            )
        } else {
            if(this.props.results.length > 0) {
                if(this.props.maxResults) {
                    this.props.results.slice(0, this.props.maxResults)
                 } else {
                    content = this.props.results.map((item, index) => {
                        return (
                            <li
                                key={item.id}
                                aria-selected={this.props.activeIndex === index}
                                {...css(
                                    this.props.styles.result,
                                    this.props.large && this.props.styles.resultLarge,
                                    this.props.noResultsLabel && this.props.styles.resultTall,
                                    this.props.activeIndex === index && this.props.styles.active
                                )}
                                id={this.props.id + "__option-" + item.id}
                                onKeyUp={event => "Enter" === event.key && this.props.onSelect(item, index, event)}
                                onClick={event => this.props.onSelect(item, index, event)}
                                onFocus={event => this.props.onMouseEnter(item, index, event)}
                                onMouseEnter={event => this.props.onMouseEnter(item, index, event)}
                                role="option"
                                tabIndex={-1}>
                                <Spacing
                                    left={item.isSubResult ? this.props.subResultPaddingUnits : 0}>
                                    {item.prefix && 
                                        <div
                                            {...css(
                                                this.props.styles.resultPrefix,
                                                this.props.noResultsLabel && this.props.styles.resultPrefixTall,
                                            )}>
                                            {item.prefix}
                                        </div>
                                    }
                                    <div 
                                        {...css(
                                            this.props.styles.text,
                                            this.props.noResultsLabel && this.props.styles.textTall
                                        )}>
                                        <Text
                                            light={!this.props.book}
                                            large={this.props.large}>
                                            {item.name}
                                        </Text>
                                        {!!item.description && 
                                            <Text
                                                inverse={this.props.maxResults}
                                                light={true}
                                                muted={!this.props.maxResults}
                                                small={true}>
                                                {item.description}
                                            </Text>
                                        }
                                    </div>
                                </Spacing>
                            </li>
                        )
                    })
                }
            } else {
                if(this.props.results.length === 0 && this.props.noResultsLabel) {
                    content = (
                        <li
                            {...css(
                                this.props.styles.result,
                                this.props.styles.noResult,
                                this.props.large && this.props.styles.resultLarge
                            )}
                            id={this.props.id + "__option-no-results"}
                            role="option"
                            aria-selected={true}
                            tabIndex={-1}>
                            <Text
                                light={!this.props.book}
                                large={this.props.large}
                                noLoading={true}
                                muted={true}>
                                {this.props.noResultsLabel}
                            </Text>
                        </li>
                    )
                }
            }
        }
        return content;
    }

    render() {
        let resultExist = (this.props.maxResults ? this.props.results.slice(0, this.props.maxResults) : this.props.results).length > 0;
        let loadResult = this.props.areResultsVisible && (resultExist || this.props.noResultsLabel || this.props.isLoading);
        return (
            <div
                {...css(
                    this.props.styles.container
                )}>
                <InputForm
                    autoComplete="off"
                    autoFocus={this.props.autoFocus}
                    book={this.props.book}
                    removeMargins={this.props.inputRemoveMargins}
                    showOverflowEllipsis={this.props.inputOverflowEllipsis}
                    underlineFocus={this.props.underlineFocus}
                    disabled={this.props.disabled}
                    hideLabel={this.props.hideLabel}
                    lightLabel={this.props.lightLabel}
                    id={this.props.id}
                    inputRef={this.props.inputRef}
                    invalid={this.props.invalid}
                    focusBorderless={this.props.inputFocusBorderless}
                    label={this.props.label}
                    labelDescription={this.props.labelDescription}
                    name={this.props.name}
                    onBlur={this.props.onBlur}
                    onChange={this.props.onChange}
                    onClear={this.props.onClear}
                    onFocus={this.props.onFocus}
                    onKeyDown={this.props.onKeyDown}
                    placeholder={this.props.placeholder}
                    showFakeValuePlaceholder={this.props.showFakeValuePlaceholder}
                    prefix={this.props.prefix}
                    small={this.props.small}
                    large={this.props.large}
                    value={this.props.value}
                    errorMessage={this.props.invalid ? this.props.errorMessage : ""}
                    errorMessageID={this.props.invalid && this.props.errorMessage ? this.props.id + "_error" : null} />
                {loadResult && 
                    <ul
                        {...css(
                            this.props.styles.results,
                            this.props.isLoading && this.props.styles.results_loading,
                            this.props.scrollResults && this.props.styles.results_scroll,
                            !this.props.inline && this.props.styles.results_absolute,
                            this.props.inputRemoveMargins && this.props.styles.results_inputNoMargin,
                            { 
                                width: this.props.resultsWidth, 
                                maxHeight: this.props.resultsMaxHeight
                            }
                        )}
                        id={this.props.id + "__listbox"}
                        role="listbox">
                        {this.getListContent()}
                    </ul>
                }
            </div>
        )
    }
}

Autocomplete.propTypes = {
    areResultsVisible: PropTypes.bool,
    activeIndex: PropTypes.number,
    inline: PropTypes.bool,
    maxResults: PropTypes.number,
    results: PropTypes.arrayOf(PropTypes.object),
    resultsPosition: PropTypes.object,
    resultsWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    resultsMaxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    resultsBorderless: PropTypes.bool,
    noResultsLabel: PropTypes.object,
    isLoading: PropTypes.bool,
    scrollResults: PropTypes.bool,
    subResultPaddingUnits: PropTypes2.nonNegativeInteger,
    hideResultsTopBorder: PropTypes.bool,
    lastEventType: PropTypes.oneOf(["mouse", "keyboard"]),
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onSelect: PropTypes.func,
    errorMessage: PropTypes.string,
    errorMessageID: PropTypes.string
};

Autocomplete.defaultProps = {
    areResultsVisible: true,
    activeIndex: false,
    inline: false,
    maxResults: 0,
    results: [],
    resultsPosition: null,
    resultsWidth: "100%",
    resultsMaxHeight: null,
    resultsBorderless: false,
    noResultsLabel: null,
    isLoading: false,
    scrollResults: false,
    subResultPaddingUnits: 4,
    hideResultsTopBorder: null,
    lastEventType: null,
    onBlur: () => {
        return;
    },
    onChange: () => {
        return;
    },
    onClear: null,
    onFocus: () => {
        return;
    },
    onKeyDown: () => {
        return;
    },
    onMouseEnter: () => {
        return;
    },
    onSelect: () => {
        return;
    }
};

export default withStyles(({ unit, color }) => ({
    container: {
        position: "relative"
    },
    result: {
        cursor: "pointer",
        display: "table",
        listStyleType: "none",
        padding: 1.5 * unit,
        width: "100%"
    },
    noResult: {
        cursor: "auto",
        outline: "none"
    },
    resultLarge: {
        padding: 2 * unit
    },
    resultTall: {
        paddingTop: 1 * unit,
        paddingBottom: 1 * unit
    },
    results: {
        backgroundColor: color.autocomplete.resultsBackground,
        borderColor: color.autocomplete.resultsBorder,
        borderRadius: "0px 0px 2px 2px",
        borderStyle: "solid",
        borderWidth: "0px 1px 1px",
        marginTop: -1 * unit,
        padding: 0,
        overflow: "hidden",
        zIndex: 1
    },
    results_loading: {
        height: 6 * unit
    },
    results_scroll: {
        overflowY: "scroll"
    },
    results_topBorder: {
        borderTopWidth: 1
    },
    results_borderless: {
        borderWidth: 0
    },
    results_absolute: {
        position: "absolute"
    },
    results_inputNoMargin: {
        marginTop: 0
    },
    active: {
        backgroundColor: color.autocomplete.resultActiveBackground
    },
    resultPrefix: {
        color: color.autocomplete.resultIcon,
        display: "table-cell",
        paddingRight: 1.5 * unit,
        verticalAlign: "middle"
    },
    resultPrefixTall: {
        paddingTop: .5 * unit,
        verticalAlign: "top"
    },
    resultPrefixActive: {
        color: color.autocomplete.resultIconInverse
    },
    text: {
        display: "table-cell",
        verticalAlign: "middle",
        width: "100%"
    },
    textTall: {
        verticalAlign: "top"
    }
}))(Autocomplete);