import React, { Component } from 'react';

import FlexBar from '../UI/FlexBar/FlexBar';
import Button from '../UI/Button/Button';
import SelectForm from '../UI/FormElement/SelectForm/SelectForm';
import InputForm from '../UI/FormElement/InputForm/InputForm';
import Option from '../UI/Option/Option';
import Form from '../UI/Form/Form';
import Translate from '../UI/Translate/Translate';
import ShowAt from '../UI/ShowAt/ShowAt';

import polyglot from '../../languageProvider';
import { css, withStyles } from '../../config/withStyles';

class HomeSearch extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.constants) {
            this.contracts = nextProps.constants["Contract"].map(value => {
                return (
                    <Option
                        key={value.id}
                        value={value.label}
                        label={polyglot.phrases[value.label]} />
                )
            });

            this.categories = nextProps.constants["ListingCategory"].map(value => {
                return (
                    <Option
                        key={value.id}
                        value={value.label}
                        label={polyglot.phrases[value.label]} />
                )
            });
        }
    }

    render() {
        return (
            <div {...css(this.props.styles.container)}>
                <div {...css(this.props.styles.content)}>
                    <Form>  
                        <FlexBar
                            after={
                                <Button
                                    type="submit"
                                    large={true}
                                    primary={true}
                                    onPress={this.props.submitHandler}>
                                    <Translate labelKey="FIND" />
                                </Button>
                            }>
                            <FlexBar
                                before={
                                    <ShowAt breakpoint="mediumAndAbove">
                                        <div {...css(this.props.styles.container_contract)}>
                                            <SelectForm
                                                id="contract"
                                                name="contract"
                                                onChange={this.props.onFiltersChange}
                                                value={this.props.searchFilters.filters.contract}
                                                large={true}
                                                hasExternalLabel={true}
                                                placeholder={polyglot.phrases["SELECT_CONTRACT_LISTING"]}>
                                                {this.contracts}
                                            </SelectForm>
                                        </div>
                                    </ShowAt>
                                }
                                after={
                                    <ShowAt breakpoint="mediumAndAbove">
                                        <div {...css(this.props.styles.container_category)}>
                                            <SelectForm
                                                id="category"
                                                name="category"
                                                onChange={this.props.onFiltersChange}
                                                value={this.props.searchFilters.filters.category}
                                                large={true}
                                                hasExternalLabel={true}
                                                placeholder={polyglot.phrases["SELECT_CATEGORY_LISTING"]}>
                                                {this.categories}
                                            </SelectForm>
                                        </div>
                                    </ShowAt>
                                }>
                                <InputForm
                                    id="city"
                                    name="city"
                                    onChange={this.props.onFiltersChange}
                                    value={this.props.searchFilters.filters.city}
                                    large={true}
                                    placeholder="CITY"
                                    hasExternalLabel={true}  />
                            </FlexBar>
                        </FlexBar>
                    </Form>
                </div>
            </div>
        )
    }
}

export default withStyles(() => ({
    container: {
        zIndex: 1,
        position: "absolute",
        height: "300px",
        top: "50%",
        width: "100%",
        margin: "0 auto",
        transform: "translateY(-100px)"
    },
    content: {
        width: "69vw",
        margin: "0 auto"
    },
    container_contract: {
        width: 200
    },
    container_category: {
        width: 300
    }
}))(HomeSearch);