import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { history } from '../../store/history';

export const withFilters = Component => {
    return class WithFilters extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                searchFilters: null
            }
        }

        componentWillMount() {
            let filters =  Object.assign({}, queryString.parse(decodeURIComponent(this.props.location.search)), this.props.match.params);
            let searchFilters = {
                filters: filters
            };
            this.props.filters.map(function(filter) {
                filter.params.map(function(param) {
                    if(searchFilters.filters[param.id]) {
                        switch (param.type) {
                            case "string":
                                searchFilters.filters[param.id] =  searchFilters.filters[param.id];
                                break;
                            case "number":
                                searchFilters.filters[param.id] = Number(searchFilters.filters[param.id]);
                                break;
                            default:
                                searchFilters.filters[param.id] = searchFilters.filters[param.id];
                                break;
                        }
                    }
                })
            })
            this.setState({ searchFilters: searchFilters });
        }

        handleUpdateFilters(filters) {
            let queryParams = {};
            filters.map(function(filter) {
                filter.params.map(param => {
                    if(param.value) {
                        queryParams[param.name] = param.value;
                    }
                })
            });
            history.push({
                pathname: '/listings/' + this.match.params.city,
                search: encodeURIComponent(queryString.stringify(queryParams))
            });
        }
        
        render() {
            return React.createElement(Component, Object.assign({}, this.props, {
                searchFilters: this.state.searchFilters,
                updateFilters: this.handleUpdateFilters
            }))
        }
    }
}
        
withFilters.propTypes = {
    stagedFilters: PropTypes.object.isRequired,
    responseFilters: PropTypes.object.isRequired,
    updateFilters: PropTypes.func.isRequired,
    clearFilters: PropTypes.func.isRequired,
    dispatch: PropTypes.func,
    store: PropTypes.object
}

withFilters.defaultProps = {
    stagedFilters: {},
    responseFilters: {},
    updateFilters: () => {
        return;
    },
    clearFilters: () => {
        return;
    },
    dispatch: () => {
        return;
    }
};