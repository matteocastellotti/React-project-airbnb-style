import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PanelMenuComponent from './PanelMenuComponent';

import { css, withStyles } from '../../../config/withStyles';

class PanelMenuItem extends Component {
    /*shouldComponentUpdate(e) {
        var t = this.props
            , n = t.item
            , a = t.searchFilters
            , r = t.size;
        return e.size !== this.props.size || this.props.item.params.some((param) => {
            return e.searchFilters[param.key] !== a[param.key]
        }) || !l()(e.item, param.key)
    }*/
    
    render() {
        /*var e = this.props
            , t = e.css
            , n = this.props.id
            , a = e.item
            , r = this.props.onFiltersUpdated
            , i = this.props.onToggleAccessibilityModal
            , s = this.props.searchFilters
            , l = this.props.size
            , c = this.props.styles
            , d = this.props.isSideFilterBarSection
            , C = this.props.item.type
            , S = this.props.item.states*/
        var content = null;
        switch (this.props.item.type) {
        case "checkbox":
            content = (
                <PanelMenuComponent
                    checkbox={true}
                    item={this.props.item}
                    searchFilters={this.props.searchFilters}
                    disabled={this.props.item.states && this.props.item.states.includes("disabled")}
                    onFiltersUpdated={this.props.onFiltersUpdated} />
            )
            break;
        case "radio":
            if ("PLACE_AREA" === this.props.item.sub_type) {
                /*content = o.a.createElement(v.a, {
                    id: this.props.id,
                    item: this.props.item,
                    onFiltersUpdated: this.props.onFiltersUpdated,
                    searchFilters: this.props.searchFilters
                });*/
                break
            }
            content = (
                <PanelMenuComponent
                    radio={true}
                    item={this.props.item}
                    searchFilters={this.props.searchFilters}
                    disabled={this.props.item.states && this.props.item.states.includes("disabled")}
                    onFiltersUpdated={this.props.onFiltersUpdated} />
            );
            break;
        case "switch":
        content = (
            <PanelMenuComponent
                item={this.props.item}
                searchFilters={this.props.searchFilters}
                disabled={this.props.item.states && this.props.item.states.includes("disabled")}
                onFiltersUpdated={this.props.onFiltersUpdated}
                learnMoreTopSpacing={this.props.isSideFilterBarSection ? .5 : 0} />
            );
            break;
        case "price_slider":
        /*content = o.a.createElement(b.a, {
                item: this.props.item,
                onFiltersUpdated: this.props.onFiltersUpdated,
                searchFilters: this.props.searchFilters,
                isSideFilterBarSection: this.props.isSideFilterBarSection
            });*/
            break;
        case "stepper":
        /*content = o.a.createElement(p.a, {
                item: this.props.item,
                onFiltersUpdated: this.props.onFiltersUpdated,
                searchFilters: this.props.searchFilters,
                isSideFilterBarSection: this.props.isSideFilterBarSection
            });*/
            break;
        case "date_picker":
        /*content = o.a.createElement(h.a, {
                item: this.props.item,
                onFiltersUpdated: this.props.onFiltersUpdated,
                searchFilters: this.props.searchFilters,
                isSideFilterBarSection: this.props.isSideFilterBarSection
            });*/
            break;
        case "link":
        /*content = o.a.createElement(f.a, {
                item: this.props.item,
                onFiltersUpdated: this.props.onFiltersUpdated,
                searchFilters: this.props.searchFilters,
                onToggleAccessibilityModal: this.props.onToggleAccessibilityModal
            });*/
            break;
        default:
            return null
        }

        return (
            <div
                {...css(
                    this.props.item.type !== "date_picker" && this.props.size && this.props.styles[this.props.size]
                )}>
                {content}
            </div>
        )
    }
};

PanelMenuItem.propTypes = {
    size: PropTypes.string,
    item: PropTypes.object.isRequired,
    onFiltersUpdated: PropTypes.func,
    searchFilters: PropTypes.object,
    onToggleAccessibilityModal: PropTypes.func,
    id: PropTypes.string,
    selected: PropTypes.bool,
    isSideFilterBarSection: PropTypes.bool
};

PanelMenuItem.defaultProps = {
    onFiltersUpdated: () => {
        return;
    },
    onToggleAccessibilityModal: () => {
        return;
    },
    searchFilters: {},
    id: "",
    selected: false,
    isSideFilterBarSection: false
};

export default withStyles(({ unit }) => ({
    small: {
        "min-width": 43 * unit
    },
    large: {
        "min-width": 71 * unit
    }
}))(PanelMenuItem);