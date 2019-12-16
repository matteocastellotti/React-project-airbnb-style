import React from 'react';
import PropTypes from 'prop-types';

class FormSubmitHandler extends React.Component {
    
    setFormRef = e => {
        this.form = e
    }
    
    forceSubmitWithoutHandler = () => {
        this.form.submit()
    }
    
    render() {            
        var e = this.props
            , t = e.children
            , n = e.formURL
            , a = e.inline
            , r = e.onSubmit
            , o = {
            display: a ? "inline" : void 0
        };
        
        return (
            <form
                action={this.props.formURL}
                method="POST"
                onSubmit={this.props.onSubmit}
                ref={this.setFormRef}
                style={{display: (a ? "inline" : void 0)}}>
                {/*"5W78": function(e, t, n) {
                    "use strict";
                    var a = n("Jmof")
                      , r = n.n(a)
                      , o = n("jHLO")
                      , i = function(e) {
                        function t() {
                            var e;
                            babelHelpers.classCallCheck(this, t);
                            for (var n = arguments.length, a = Array(n), r = 0; r < n; r++)
                                a[r] = arguments[r];
                            var o = babelHelpers.possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)));
                            return o.state = {},
                            o
                        }
                        return babelHelpers.inherits(t, e),
                        babelHelpers.createClass(t, [{
                            key: "componentDidMount",
                            value: function() {
                                function e() {
                                    this.setState({
                                        token: Object(o.a)()
                                    })
                                }
                                return e
                            }()
                        }, {
                            key: "render",
                            value: function() {
                                function e() {
                                    var e = this.state.token;
                                    return e ? r.a.createElement("input", {
                                        type: "hidden",
                                        name: "authenticity_token",
                                        value: e
                                    }) : null
                                }
                                return e
                            }()
                        }]),
                        t
                    }(r.a.Component);
                    t.a = i
                },*/}
            </form>
        )
    }
}

FormSubmitHandler.propTypes = {
    children: PropTypes.node.isRequired,
    formURL: PropTypes.string.isRequired,
    onSubmit: PropTypes.func,
    inline: PropTypes.bool
}

FormSubmitHandler.defaultProps ={
    onSubmit: () => {
        return;
    },
    inline: false
}

export default FormSubmitHandler;
