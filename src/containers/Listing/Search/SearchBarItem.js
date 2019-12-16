import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spacing from '../../../components/UI/Spacing/Spacing';
import WrappedComponent from '../../../components/WrappedComponent/WrappedComponent';
import MenuItem from '../../../components/UI/MenuItem/MenuItem';
import PanelMenu from '../../../components/UI/PanelMenu/PanelMenu';
import Row from '../../../components/UI/Row/Row';
import Col from '../../../components/UI/Col/Col';
import Text from '../../../components/UI/Text/Text';
import PanelMenuItem from '../../../components/UI/PanelMenu/PanelMenuItem';

class SearchBarItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items
        }
        this.getMenuBarSize = this.getMenuBarSize.bind(this);
        this.setMenuItemRef = this.setMenuItemRef.bind(this);
        this.handleSubmitAndDeselect = this.handleSubmitAndDeselect.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.updateFiltersAndSubmit = this.updateFiltersAndSubmit.bind(this);
        this.renderMenuButton = this.renderMenuButton.bind(this);
    }
            
    componentWillReceiveProps(nextProps) {
        if(this.props.onClear !== nextProps.onClear) { 
            this.handleClear = nextProps.onClear(this.managedFilterKeys);
        }
        if(this.props.items !== nextProps.items) {
            this.setState({
                items: nextProps.items
            })
        }
    }
     
    getMenuBarSize() {
        return "place_area" === this.props.id ? "panel_large" : "panel_fit";
    }
    
    setMenuItemRef(event) {
        this.menuItemRef = event;
    }
    
    handleSubmitAndDeselect() {
        var e;
        this.menuItemRef && this.menuItemRef.focus();
        (e = this.props).onSubmitAndDeselect.apply(e, arguments);
    }
    
    handleUpdate(e) {
        if (this.state.items && this.state.items.every(function(e) {
            return e.type === "radio"
        })) {
            var t = this.state.items.map(function(t) {
                var n = t;
                return n.selected = n.params.some(function(t) {
                    return e.updateObj[t.key] === t.value
                }),
                n
            });
            this.setState({
                items: t
            })
        }
        this.props.onFiltersUpdated(e)
    }
    
    updateFiltersAndSubmit(e) {
        this.handleUpdate(e);
        this.props.onSubmitAndDeselect({
            shouldResetFilters: false,
            isOutsideClick: false
        });
    }
     
    renderMenuButton(param) {
        /*var t = this
            , n = param.isRenderedInsideButtonBar
            , a = void 0 !== n && n
            , r = e.buttonBarId
            , i = void 0 === r ? null : r
            , u = e.buttonBarIsActive
            , p = void 0 === u ? null : u
            , m = e.buttonBarIsSelected
            , v = void 0 === m ? null : m
            , _ = e.buttonBarTitle
            , C = void 0 === _ ? null : _
            , S = e.roundedLeft
            , P = void 0 !== S && S
            , O = e.roundedRight
            , w = void 0 !== O && O
            , x = this.props
            , R = x.allowLargePanel
            , j = x.count
            , L = x.mutedText
            , H = x.id
            , M = x.immersive
            , B = x.isActive
            , F = x.onCancel
            , D = x.onDeselect
            , W = x.onOutsideClick
            , N = x.onSelect
            , z = x.panelHasClearButton
            , U = x.stagedFilters
            , q = x.selected
            , V = x.title
            , Y = x.items
            , G = x.isSideFilterBarSection
            , Q = Y.length > 5
            , K = Q && R
            , Z = this.filterBarTitleForId(H)
            , X = "zh" === b.a.language()
            , J = this.getMenuBarSize()
            , $ = a ? p : B;*/
        return (
            <WrappedComponent
                disabled={!this.props.isActive}
                display="inline-block"
                onOutsideClick={this.props.onDeselect}>
                <MenuItem
                    forwardedRef={this.setMenuItemRef}
                    id={this.props.id}
                    immersive={this.props.immersive}
                    isActive={this.props.isActive}
                    isSelected={this.props.isSelected}
                    label={this.props.title}
                    labelCount={this.props.count}
                    onDeselect={this.props.onDeselect}
                    onSelect={this.props.onSelect}
                    roundedLeft={this.props.roundedLeft}
                    roundedRight={this.props.roundedRight}
                    pill={true}
                    webcot={true}>
                    <PanelMenu size={this.getMenuBarSize()}>
                        <Row>
                            {this.props.items.map((item, index) => (
                                <Col
                                    key={index}
                                    sm={12}
                                    md={12}
                                    lg={this.props.items.length ? 6 : 12}>
                                    <Spacing
                                        bottom={2}>
                                        <PanelMenuItem
                                            size={this.props.items.length > 5 && this.props.allowLargePanel ? "large" : "small"}
                                            formId={this.props.title}
                                            item={item}
                                            onFiltersUpdated={this.handleUpdate}
                                            searchFilters={this.props.searchFilters} />
                                    </Spacing>
                                </Col>
                            ))}
                            {this.props.mutedText && 
                                <Col sm={12}>
                                    <Text
                                        micro={true}
                                        muted={true}>
                                        {this.props.mutedText}
                                    </Text>
                                    <Spacing bottom={2} />
                                </Col>
                            }
                        </Row>
                        {/*<E.a
                            onSave={this.handleSubmitAndDeselect}
                            onCancel={F}
                            onClear={this.handleClear}
                            canClear={function(e, t) {
                                if (e.some(function(e) {
                                    return I.includes(e)
                                }))
                                    return !1;
                                var n = e.filter(function(e) {
                                    return null != t[e]
                                });
                                return (1 !== n.length || "checkin" !== n[0] && "checkout" !== n[0]) && n.length > 0
                            }(this.managedFilterKeys, U)
                            panelHasClearButton={z}
                        panelHasClearCancelButton={X} />*/}
                    </PanelMenu>
                </MenuItem>
            </WrappedComponent>
        )
    }
            
    render() {
        return this.renderMenuButton({ isRenderedInsideButtonBar: false });
    }
};

SearchBarItem.defaultProps = {
    activePanel: null,
    allowLargePanel: true,
    count: 0,
    immersive: false,
    loading: false,
    selected: false,
    onOutsideClick: () => {
        return;
    },
    panelHasClearButton: false,
    title: "",
    barItems: [],
    isSideFilterBarSection: false
};

export default SearchBarItem;