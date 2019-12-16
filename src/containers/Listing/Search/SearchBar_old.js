import React, { Component } from 'react';

import PanelMenu from '../../../components/UI/PanelMenu/PanelMenu';
import PanelMenuItem from '../../../components/UI/PanelMenu/PanelMenuItem';
import MenuBar from '../../../components/UI/MenuBar/MenuBar';
import MenuItem from '../../../components/UI/MenuItem/MenuItem';
import Row from '../../../components/UI/Row/Row';
import Col from '../../../components/UI/Col/Col';
import Translate from '../../../components/UI/Translate/Translate';

class SearchBar extends Component {

    handleUpdate = (checked, item) => {
         //var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        //      , a = Object.assign({}, n);
        /*return r = t.params.map(function(t) {
            var n = function(e, t, n) {
                if (item.param.value_type === 'array') {
                    if(checked) {
                        
                    }
                    return 0 === (r = e && !t.delete ? r.concat(t.value) : r.filter(function(e) {
                        return e !== t.value
                    })).length && 0 !== a.length ? {
                        keysToRemove: [t.key]
                    } : 0 !== r.length || 0 !== a.length ? {
                        updateObj: babelHelpers.defineProperty({}, t.key, r)
                    } : {}
                }
                if (item.param.value_type === 'boolean') {
                    var i = n[t.key] !== t.value ? t.value : !t.value;
                    return i ? {
                        updateObj: babelHelpers.defineProperty({}, t.key, !0)
                    } : {
                        keysToRemove: [t.key]
                    }
                }
                if (e && !t.delete)
                    return {
                        updateObj: babelHelpers.defineProperty({}, t.key, function(e) {
                            if (void 0 !== e.value)
                                return e.value;
                            switch (e.value_type) {
                            case d.a.ARRAY:
                                return [];
                            case d.a.BOOLEAN:
                                return !0;
                            case d.a.INTEGER:
                                return 0;
                            default:
                                return null
                            }
                        }(t))
                    };
                return {
                    keysToRemove: [t.key]
                }
            }(e, t, a);
            return a = o()(Object.assign({}, a, n.updateObj), n.keysToRemove),
            n
        }),
        r.reduce(function(e, t) {
            return {
                keysToRemove: [].concat(babelHelpers.toConsumableArray(e.keysToRemove), babelHelpers.toConsumableArray(t.keysToRemove || [])),
                updateObj: Object.assign({}, e.updateObj, t.updateObj || {})
            }
        }, {
            keysToRemove: [],
            updateObj: {}
        });
        var r*/
        var filters = {
            newFilters: null,
            removeFilters: null
        };
        if (item.value_type === 'array') {
            if(checked) {
                filters.newFilters = {
                    [item.key]: [item.value]
                }
            } else {
                filters.removeFilters = item.key;
            }
        }
        if (item.value_type === 'boolean') {
           
        }
        this.props.onFiltersChanged(filters, this.props.onFiltersChanged);
    }

    render() {

        const menuItems = this.props.sections.map((section, key) => {
            const items = section.items.map((item, key) => {
                if(section.section_id === 'contract') {
                    return (
                        <Col key={key} sm={12}>
                            <PanelMenuItem
                                key={key}
                                item={item.toJS()}
                                onFiltersUpdated={this.handleUpdate} />
                        </Col>
                    )
                }
                if(section.section_id === 'comfort') {
                    return (
                        <Col key={key} md={6} sm={12}>
                            <PanelMenuItem
                                key={key}
                                item={item.toJS()}
                                onFiltersUpdated={this.handleUpdate} />
                        </Col>
                    )
                }
                return null;
            });
            return (
                <MenuItem
                    id={section.section_id}
                    key={key}
                    pill={true}
                    label={
                        <Translate labelKey={section.title} />
                    }
                    isActive={this.props.activePanel === section.section_id}
                    onSelect={this.props.onPanelOpened}
                    onDeselect={this.props.onPanelClosed}>
                    <PanelMenu
                        onOutsideClick={this.props.onPanelClosed}
                        visible={this.props.activePanel === section.section_id}
                        size={section.panel_size}>
                        <Row>
                            {items}
                        </Row>
                    </PanelMenu>
                </MenuItem>
            )
        })

        return (
            <div style={{position: 'relative'}}>
                <MenuBar
                    isOpen={this.props.activePanel !== null}>
                    {menuItems}
                </MenuBar>
            </div>
        )
    }
}

export default SearchBar;