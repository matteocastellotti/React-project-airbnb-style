import Immutable from 'immutable';
import { searchConstants } from '../constants';

const initState = Immutable.fromJS({
    searchFilters: {
        filters: {
        }
    },
    filters: [
        {
            main: true,
            title: "CONTRACT",
            type: "select",
            large_size: 3,
            medium_size: 6,
            params: [
                {
                    id: "contract",
                    name: "contract",
                    type: "string",
                    options: [
                        { value: "sale", label: "SALE" },
                        { value: "rent", label: "RENT" }
                    ],
                }
            ]
        },
        {
            main: true,
            title: 'TIPOLOGY',
            type: "select",
            large_size: 3,
            medium_size: 6,
            params: [
                {
                    id: "tipology",
                    name: "tipology",
                    type: "string",
                    options: [
                        { value: "flat", label: "FLAT" },
                        { value: "attic", label: "ATTIC" },
                        { value: "mansarda", label: "MANSARDA" },
                        { value: "multi_dwelling_house", label: "MULTI_DWELLING_HOUSE" },
                        { value: "detached_house", label: "DETACHED_HOUSE" },
                        { value: "loft", label: "LOFT" },
                        { value: "open_space", label: "OPEN_SPACE" },
                        { value: "box_garage", label: "BOX_GARAGE" },
                        { value: "cellar", label: "CELLAR" },
                        { value: "parking_space", label: "PARKING_SPACE" },
                        { value: "berth", label: "BERTH" },
                        { value: "trailer_park", label: "TRAILER_PARK" },
                        { value: "motorcycle_parking", label: "MOTORCYCLE_PARKING" },
                        { value: "garret", label: "GARRET" },
                        { value: "castle", label: "CASTLE" },
                        { value: "hitorical_house", label: "HISTORICAL_HOUSE" },
                        { value: "building", label: "BUILDING" },
                        { value: "beam", label: "BEAM" },
                        { value: "lodge", label: "LODGE" },
                        { value: "farmhouse", label: "FARMHOUSE" },
                        { value: "cottage", label: "COTTAGE" },
                        { value: "chalet", label: "CHALET" },
                        { value: "mountain_hut", label: "MOUNTAIN_HUT" },
                        { value: "multi_dwelling_villa", label: "MULTI_DWELLING_VILLA" },
                        { value: "semi_detached_villa", label: "SEMI_DETACHED_VILLA" },
                        { value: "detached_villa", label: "DETACHED_VILLA" },
                        { value: "terraced_house", label: "TERRACED_HOUSE" }
                    ],
                }
            ]
        },
        {
            main: true,
            title: "PRICE",
            type: "range",
            large_size: 3,
            medium_size: 6,
            suffix: "€",
            params: [
                {
                    id: "lowest_price",
                    name: "lowest_price",
                    type: "number"
                },
                {
                    id: "maximum_price",
                    name: "maximum_price",
                    type: "number"
                }
            ]
        },
        {
            main: false,
            title: "COMMERCIAL_AREA",
            type: "range",
            large_size: 3,
            medium_size: 6,
            suffix: "m²",
            params: [
                {
                    id: "lowest_commercial_area",
                    name: "lowest_commercial_area",
                    type: "number"
                },
                {
                    id: "maximum_commercial_area",
                    name: "maximum_commercial_area",
                    type: "number"
                }
            ]
        },
        {
            main: false,
            title: 'PROPERTY_TYPE',
            type: "select",
            large_size: 3,
            medium_size: 6,
            params: [
                {
                    id:"property_type",
                    name: "property_type",
                    type:"string",
                    options: [
                        { value: "whole_property", label: "WHOLE_PROPERTY" },
                        { value: "nake_property", label: "NAKE_PROPERTY" },
                        { value: "parcial_property", label: "PARCIAL_PROPERTY" },
                        { value: "usufruct", label: "USUFRUCT" },
                        { value: "multi_properties", label: "MULTI_PROPERTIES" },
                        { value: "leasehold", label: "LEASEHOLD" }
                    ]
                }
            ]
        }
    ],
    listings: {
        results: [],
        isLoading: false,
        errorMessage: null
    },
    cities: {
        results: [],
        isLoading: false,
        errorMessage: null
    }
});

const searchListingsRequest = (state, action) => {
    return state.setIn(['listings', 'isLoading'], true);
}

const searchListingsSuccess = (state, action) => {
    return state
        .setIn(['listings', "results"], action.payload)
        .setIn(['listings', 'isLoading'], false);
}

const searchListingsFailure = (state, action) => {
    return state
        .setIn(['listings', 'errorMessage'], Immutable.fromJS(action.error))
        .setIn(['listings', 'isLoading'], false);
}

const searchCityRequest = (state, action) => {
    return state
        .setIn(['cities', 'results'], [])
        .setIn(['cities', 'isLoading'], true)
        .setIn(['cities', 'errorMessage'], null);
}

const searchCitySuccess = (state, action) => {
    return  state
        .setIn(['cities', 'results'], action.payload)
        .setIn(['cities', 'isLoading'], false);
}

const searchCityFailure = (state, action) => {
    return state
        .setIn(['cities', 'results'], [])
        .setIn(['cities', 'errorMessage'], action.error)
        .setIn(['cities', 'isLoading'], false);
}

const filtersChanged = (state, action) => {
    let updateState = state;
    state.toJS().filters.map(function(filter, filterIndex) {
        filter.params.map(function(param, paramIndex) {
            if(param.id === action.payload.id) {
                switch (param.type) {
                case "string":
                    updateState = state.setIn(['filters', filterIndex, 'params', paramIndex, 'value'], action.payload.value);
                    break;
                case "number":
                    updateState = state.setIn(['filters', filterIndex, 'params', paramIndex, 'value'], Number(action.payload.value));
                    break;
                default:
                    updateState = state.setIn(['filters', filterIndex, 'params', paramIndex, 'value'], action.payload.value);
                    break;
                }
            }
        })
    });
    return updateState;
}

export function Search(state = initState, action) {
  switch (action.type) {
    case searchConstants.SEARCH_LISTING_REQUEST:
        return searchListingsRequest(state, action);
    
    case searchConstants.SEARCH_LISTING_SUCCESS:
        return searchListingsSuccess(state, action);

    case searchConstants.SEARCH_LISTING_FAILURE:
        return searchListingsFailure(state, action);

    case searchConstants.SEARCH_CITY_REQUEST:
        return searchCityRequest(state, action);

    case searchConstants.SEARCH_CITY_SUCCESS:
        return searchCitySuccess(state, action);
    
    case searchConstants.SEARCH_CITY_FAILURE:
        return searchCityFailure(state, action);

    case searchConstants.FILTERS_CHANGED:
        return filtersChanged(state, action);

    default:
      return state
  }
}