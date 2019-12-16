import React, { Component } from 'react';
    
/*    function A(e) {
        return b()(e.flat(1))
    }
    function M(e) {
        return e.subsection_items ? A(e.subsection_items.map(function(e) {
            return A(e.items.map(function(e) {
                return e.params.map(function(e) {
                    return e.key
                })
            }))
        })) : e.params.map(function(e) {
            return e.key
        })
    }*/

class MenuButton extends Component {
    /*var D = function(e) {
        function t(e) {
            babelHelpers.classCallCheck(this, t);
            var n, r, a, i = babelHelpers.possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return i.managedFilterKeys = (n = e.items,
            r = e.id,
            a = A(n.map(M)),
            L[r] ? [].concat(babelHelpers.toConsumableArray(a), babelHelpers.toConsumableArray(L[r])) : a),
            i.handleClear = e.onClear(i.managedFilterKeys),
            i.handleUpdate = i.handleUpdate.bind(i),
            i.updateFiltersAndSubmit = i.updateFiltersAndSubmit.bind(i),
            i.setMenuItemRef = i.setMenuItemRef.bind(i),
            i.handleSubmitAndDeselect = i.handleSubmitAndDeselect.bind(i),
            i.state = {
                items: e.items
            },
            i
        }
        return babelHelpers.inherits(t, e),*/
    componentWillReceiveProps(nextProps) {
        if(this.props.onClear !== nextProps.onClear) {
            this.handleClear = nextProps.onClear(this.managedFilterKeys);
        }
        if(this.props.items !== nextProps.items) {
            this.setState({ items: nextProps.items });
        }
    }
         
    getMenuBarSize = () => {
        return "place_area" === this.props.id ? "panel_large" : "panel_fit"
    }
    
    setMenuItemRef = e => {
        this.menuItemRef = e
    }
    
    handleSubmitAndDeselect = () => {
        var e;
        this.menuItemRef && this.menuItemRef.focus(),
        (e = this.props).onSubmitAndDeselect.apply(e, arguments)
    }
    
    handleUpdate = e => {
        if (this.state.items && this.state.items.every(function(e) {
            return e.type === C.e
        }))
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
        this.props.onFiltersUpdated(e)
    }
           
    labelForId = e => {
        var t = this.props
            , n = t.alwaysShowFullDatePlaceholder
            , r = t.isActive
            , a = t.searchFilters
            , i = t.title;
        switch (e) {
        case "guest_picker":
            return a.adults || a.children || a.toddlers || a.infants || a.guests ? Object(x.b)(a) : d.a.t("guests");
        case "date_picker":
            return Object(x.a)(a, r || n);
        default:
            return i
        }
    }
     
    updateFiltersAndSubmit",
            value: function() {
                return function(e) {
                    this.handleUpdate(e),
                    this.props.onSubmitAndDeselect({
                        shouldResetFilters: !1,
                        isOutsideClick: !1
                    })
                }
            }()
        }, {
        render() {
            var t = this
                , n = e.isRenderedInsideButtonBar
                , r = void 0 !== n && n
                , a = e.buttonBarId
                , i = void 0 === a ? null : a
                , u = e.buttonBarIsActive
                , p = void 0 === u ? null : u
                , h = e.buttonBarIsSelected
                , b = void 0 === h ? null : h
                , m = e.buttonBarTitle
                , _ = void 0 === m ? null : m
                , C = e.roundedLeft
                , E = void 0 !== C && C
                , S = e.roundedRight
                , P = void 0 !== S && S
                , x = this.props
                , R = x.allowLargePanel
                , j = x.metadata
                , L = x.count
                , A = x.mutedText
                , M = x.id
                , D = x.immersive
                , H = x.isActive
                , B = x.onCancel
                , F = x.onDeselect
                , N = x.onOutsideClick
                , W = x.onSelect
                , z = x.panelHasClearButton
                , U = x.searchFilters
                , q = x.selected
                , V = x.title
                , G = x.items
                , Y = G.length > 5
                , J = Y && R
                , K = this.labelForId(M)
                , Q = "zh" === f.a.language()
                , X = this.getMenuBarSize()
                , Z = r ? p : H;
            return () 
                <div
                    display="inline-block"
                    disabled={!Z}
                    onOutsideClick={N}>
                        <y.a
                            forwardedRef={this.setMenuItemRef}
                            id={i || M}
                            immersive={D}
                            isActive={Z}
                            isSelected={r ? b : q}
                            label={_ || K}
                            labelCount={L}
                            labelCountA11yLabel: d.a.t("applied_filter_count", {
                                smart_count: L
                            }),
                            onDeselect={F}
                            onSelect={W}
                            forButtonBar={r}
                            roundedLeft={E}
                            roundedRight={P}
                            babuChevron={!r}
                            withChevron={!r}
                            withAnchor={r}
                            pill={!0}
                            webcot={!0}>
                            <v.a
                                size={X}>
                                <l.a, null, G.map(function(e) {
                return o.a.createElement(s.a, {
                    key: String(e.title) + "_" + String(e.type) + "_" + String(U.place_id),
                    sm: 12,
                    md: 12,
                    lg: Y ? 6 : 12
                }, o.a.createElement(c.a, {
                    bottom: 2
                }, o.a.createElement(w.a, {
                    size: J ? k.a : k.b,
                    formId: V,
                    item: e,
                    onFiltersUpdated: t.handleUpdate,
                    searchFilters: U,
                    metadata: j
                })))
            }), A && o.a.createElement(s.a, {
                sm: 12
            }, o.a.createElement(T.default, {
                micro: !0,
                muted: !0
            }, A), o.a.createElement(c.a, {
                bottom: 2
            }))), o.a.createElement(O.a, {
                onSave: this.handleSubmitAndDeselect,
                onCancel: B,
                onClear: this.handleClear,
                canClear: function(e, t) {
                    if (e.some(function(e) {
                        return I.includes(e)
                    }))
                        return !1;
                    var n = e.filter(function(e) {
                        return null != t[e]
                    });
                    return (1 !== n.length || "checkin" !== n[0] && "checkout" !== n[0]) && n.length > 0
                }(this.managedFilterKeys, U),
                panelHasClearButton: z,
                panelHasClearCancelButton: Q
            }))))
        }
    }
    }
}

{
    activePanel: null,
    allowLargePanel: !0,
    alwaysShowFullDatePlaceholder: !1,
    appliedFilters: {},
    count: 0,
    immersive: !1,
    loading: !1,
    metadata: void 0,
    selected: !1,
    onOutsideClick: function() {
        return function() {}
    }(),
    panelHasClearButton: !1,
    title: "",
    barItems: []
})
  , I = ["ib"]
  , L = {
    guest_picker: ["guests"]
};