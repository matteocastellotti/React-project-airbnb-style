import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CheckBoxForm from '../../../components/UI/FormElement/CheckBoxForm/CheckBoxForm';
import SelectForm from '../../../components/UI/FormElement/SelectForm/SelectForm';
import Option from '../../../components/UI/Option/Option';

import polyglot from '../../../languageProvider';
import { css, withStyles } from '../../../config/withStyles';

class SearchBarFilter extends Component {
    
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
        switch(this.props.type) {
            case "select":
                let options = this.props.params.map((param, index) => {
                    return (
                        <Option
                            value={param.value}
                            label={polyglot.phrases[param.label]} />
                    );
                });
                content = (
                    <SelectForm
                        key={this.props.key}
                        id={this.props.id}
                        name={this.props.name}
                        value={this.props.value}
                        placeholder={polyglot.phrases[this.props.title]}
                        small={true}>
                        {options}
                    </SelectForm>
                );
            break;
            case "checkbox":
                content =(
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
        
        return (
            <div {...css(this.props.styles.container)}>
                {content}
            </div>
        )
    }
};

SearchBarFilter.propTypes = {
    checkbox: PropTypes.bool,
    radio: PropTypes.bool,
    searchFilters: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    onFiltersUpdated: PropTypes.func,
    learnMoreTopSpacing: PropTypes.number
};

SearchBarFilter.defaultProps = {
    checkbox: false,
    radio: false,
    searchFilters: {},
    disabled: false,
    onFiltersUpdated: () => {
        return;
    },
    learnMoreTopSpacing: 0
};

export default withStyles(({ unit }) => ({
    container: {
        margin: "0 " + .5 * unit + "px 0 " + unit + "px"
    }
}))(SearchBarFilter);