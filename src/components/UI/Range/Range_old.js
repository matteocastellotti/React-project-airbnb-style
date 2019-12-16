      , v = g.d.ADULTS
      , y = g.d.CHILDREN
      , _ = g.d.INFANTS
      , S = function() {}
      , C = 50

      
class Range extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            focusedInput: g.j,
            guestDetails: n.props.guestDetails,
            hasGuestDetailsChanged: false,
            scrollTop: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handlePickerChange = this.handlePickerChange.bind(this);
        this.setTriggerButtonRef = this.setTriggerButtonRef.bind(this);
        this.updateGuestDetails = this.updateGuestDetails.bind(this);
        this.debouncedPageScroll = u()(this.handlePageScroll.bind(this), 100);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.guestDetails) {
            this.setState({ guestDetails: nextProps.guestDetails });
        }
        if(nextProps.scrollToClose !== this.props.scrollToClose) {
            if(nextProps.scrollToClose) {
                this.setState({ scrollTop: window.scrollY });
                document.addEventListener("scroll", this.debouncedPageScroll);
            } else {
                document.removeEventListener("scroll", this.debouncedPageScroll);
            }
        }
    }
     
    setScrollY() {
        this.setState({ scrollTop: window.scrollY });
    }
    
    setTriggerButtonRef(ref) {
        this.triggerButton = ref;
    }
        
    /*logEvent(e) {   
        var t = e.name
            , n = e.operation
            , r = this.props
            , a = r.eventPage
            , i = r.eventSection;
            this.props.eventPage && l.a.logEvent({
            event_name: e.name,
            event_data: {
                page:  this.props.eventPage,
                section:  this.props.eventSection,
                guest_details: this.state.guestDetails,
                operation: e.operation
            }
        })
    }*/
    
    handlePageScroll() {
        var e = Math.abs(this.state.scrollTop - window.scrollY);
        if(this.state.isFocused && e > C) {
            this.handleBlur();
            this.setScrollY();
        }
    }
         
    handleOutsideClick(event) {
        if(this.state.isFocused && !this.triggerButton.contains(event.target)) {
            this.handleBlur();
        }
    }
    
    handleBlur() {
        var e = this.props.isP0MagicCarpet
            , t = this.state
            , n = t.guestDetails;
        if(this.state.hasGuestDetailsChanged) {
            this.props.onPickerBlur({ guestDetails: this.state.guestDetails });
            this.setState({ isFocused: false });
            if(!this.props.isP0MagicCarpet) {
                this.setState({ hasGuestDetailsChanged: false });
                /*this.logEvent({
                    name: "guest_picker_close",
                    operation: "click"
                }),*/
                this.focusTriggerButton();
            }
        }
    }
         
    handleFocus() {
        this.setState({ isFocused: true, focusedInput: g.j });
        this.props.onPickerFocus();
        /*this.logEvent({
            name: "guest_picker_open",
            operation: "click"
        })*/
    }
            

    handleClick(event) {
        event.preventDefault();
        if(this.state.isFocused) {
            this.handleBlur();
        } else {
            this.handleFocus();
        }
    }
    
    handleKeyDown(event) {
        if(9 === event.keyCode && event.shiftKey) {
            this.handleBlur()
         } else if(38 === event.keyCode) {
            event.preventDefault();
            this.handleBlur();
        } else if(40 === event.keyCode) {
            event.preventDefault();
            this.handleFocus();
        }
    }
    
    handlePickerChange(e, t, n) {
            var r = e === _ ? g.k : g.j;
            this.setState(function(n) {
                var a = n.guestDetails;
                return {
                    focusedInput: r,
                    guestDetails: Object.assign({}, a, babelHelpers.defineProperty({}, e, t)),
                    hasGuestDetailsChanged: !0
                }
            }),
            this.props.onPickerChange(e, t),
            this.logEvent({
                name: "guest_picker_" + String(n) + "_" + String(e),
                operation: "click"
            })
        }
            }()
        }, {
            key: "focusTriggerButton",
            value: function() {
                return function() {
                    this.triggerButton.focus()
                }
            }()
        }, {
            key: "updateGuestDetails",
            value: function() {
                return function(e) {
                    var t = this;
                    Object.values(g.d).forEach(function(n) {
                        e[n] !== t.state.guestDetails[n] && t.handlePickerChange(n, e[n])
                    })
                }
            }()
        }, {
            key: "renderGuestPicker",
            value: function() {
                return function() {
                    var e = this.props
                      , t = e.eventPage
                      , n = e.eventSection
                      , r = e.showMaxCapacityMsg
                      , i = e.maxGuest
                      , o = e.applyMaxCapacity
                      , s = this.state.guestDetails;
                    return a.a.createElement(b.a, {
                        id: "GuestPicker-" + String(t) + "-" + String(n),
                        onUpdate: this.updateGuestDetails,
                        guestDetails: s,
                        maxGuest: i,
                        applyMaxCapacity: o,
                        showMaxCapacity: r,
                        showFooter: !0,
                        onClose: this.handleBlur
                    })
                }
            }()
        }, {
            key: "render",
            value: function() {
                return function() {
                    var e = this.props
                      , t = e.alignRight
                      , n = e.forceErrorHighlight
                      , r = e.hasCapacityErrorHighlight
                      , i = e.hasPointer
                      , s = e.isNewTraveler
                      , l = e.isP0MagicCarpet
                      , c = e.maxGuest
                      , u = this.state
                      , f = u.focusedInput
                      , b = u.hasGuestDetailsChanged
                      , g = u.isFocused
                      , S = u.guestDetails
                      , C = S[v] + S[y]
                      , k = n || r && C > c;
                    return a.a.createElement("div", {
                        className: "GuestPickerTrigger"
                    }, a.a.createElement("button", {
                        className: o()("GuestPickerTrigger__button", {
                            GuestPickerTrigger__button_p0: l,
                            GuestPickerTrigger__button_p0_changed: l && b,
                            highlight: !g && k,
                            "disabled-color": s
                        }),
                        disabled: s,
                        onClick: this.handleClick,
                        onKeyDown: this.handleKeyDown,
                        ref: this.setTriggerButtonRef,
                        type: "button"
                    }, a.a.createElement(m.a, {
                        focusedInput: g ? f : null,
                        guestCount: C,
                        infantCount: S[_]
                    }), a.a.createElement("div", {
                        className: "dropdown-icon"
                    }, !g && a.a.createElement(d.a, {
                        decorative: !0,
                        size: 12
                    }), g && a.a.createElement(p.a, {
                        decorative: !0,
                        size: 12
                    }))), g && a.a.createElement(h.a, {
                        onOutsideClick: this.handleOutsideClick
                    }, a.a.createElement("div", {
                        className: o()("GuestPicker", {
                            GuestPicker_p0: l,
                            pointer: i,
                            "align-right": t
                        })
                    }, this.renderGuestPicker())))
                }
            }()
        }]),
        t
    }(a.a.Component);
    t.a = E,
    E.defaultProps = k
},

Range.defaultProps = {
    alignRight: false,
    applyMaxCapacity: false,
    forceErrorHighlight: false,
    guestDetails: g.c,
    hasCapacityErrorHighlight: false,
    hasPointer: false,
    isNewTraveler: false,
    isP0MagicCarpet: false,
    maxGuest: g.h,
    onPickerBlur: S,
    onPickerChange: S,
    onPickerFocus: S,
    scrollToClose: false,
    showMaxCapacityMsg: false
}