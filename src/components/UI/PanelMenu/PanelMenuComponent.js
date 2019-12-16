import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CheckBoxForm from '../FormElement/CheckBoxForm/CheckBoxForm';

import { buildFilters, retrieveFilterValue } from '../../../helpers/utility';
import polyglot from '../../../languageProvider';

class PanelMenuComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            checked: retrieveFilterValue(props)
        }
        this.onChange = this.onChange.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        nextProps.item.selected !== this.props.item.selected && nextProps.item.selected !== this.state.checked && this.setState({
            checked: nextProps.item.selected
        });
    }
    
    onChange(checked) {
        this.setState({ checked: checked });
        this.props.onFiltersUpdated(buildFilters(checked, this.props.item, this.props.searchFilters));
    }
    
    render() {
        /*var e = this.props
            , t = e.item
            , n = t.title
            , a = t.subtitle
            , r = t.learn_more_link
            , i = babelHelpers.slicedToArray(this.props.item.params, 1)[0]
            , m = e.checkbox
            , f = e.radio
            , g = e.disabled
            , v = e.learnMoreTopSpacing;
        
        if (!this.props.item.params[0]) {
            return null;
        }
        var name = this.props.item.params[0].key + "-" + this.props.item.params[0].value;*/

        var content = null;
        if(this.props.checkbox) {
            content = (
                <CheckBoxForm
                    id={"DynamicFilterCheckboxItem-" + this.props.item.id}
                    name={this.props.item.id}
                    checked={this.state.checked}
                    label={polyglot.phrases[this.props.item.title]}
                    subtitle={polyglot.phrases[this.props.item.subtitle]}
                    disabled={this.props.disabled}
                    onChange={this.onChange} />
            );
        } else if (this.props.radio) {
            /*content = (
                <l.a
                    id={"DynamicFilterRadioItem-" + name}
                    name={name}
                    checked={this.state.checked}
                    label={this.props.item.title}
                    subtitle={this.props.item.subtitle}
                    disabled={this.props.disabled}
                    value={i.value}
                    onChange={this.onChange} />
            );*/
        } else {
            /*content = (
                <c.a
                    id={"DynamicFilterSwitchItem-" + name}
                    name={name}
                    checked={this.state.checked}
                    label={this.props.item.title}
                    onChange={this.onChange}
                    subtitle={this.props.item.subtitle}
                    baseline={b.a.NONE}
                    top={0}
                    bottom={2}
                    align={"top"}>
                    {this.props.item.learn_more_link &&
                        <Spacing
                            top={this.props.learnMoreTopSpacing}>
                            <Text
                                small={true}
                                light={true}>
                                <Link
                                    href={this.props.learn_more_link}
                                    openInNewWindow={true}>
                                    <h.a
                                        k="learn_more" />
                                </Link>
                            </Text>
                        </Spacing>
                    }
                </c.a>
            )*/
        }
        return content;
    }
};

PanelMenuComponent.propTypes = {
    checkbox: PropTypes.bool,
    radio: PropTypes.bool,
    searchFilters: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    onFiltersUpdated: PropTypes.func,
    learnMoreTopSpacing: PropTypes.number
};

PanelMenuComponent.defaultProps = {
    checkbox: false,
    radio: false,
    searchFilters: {},
    disabled: false,
    onFiltersUpdated: () => {
        return;
    },
    learnMoreTopSpacing: 0
};

export default PanelMenuComponent;