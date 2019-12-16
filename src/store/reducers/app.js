import Immutable from 'immutable';
import { appConstants } from '../constants';

const initState = Immutable.fromJS({
    currentBreakpoint: null
});

const currentBreakpointChanged = (state, action) => {
    return state.set('currentBreakpoint', action.payload);
}

export function App(state = initState, action) {
    switch (action.type) {
        case appConstants.CURRENT_BREAKPOINT_CHANGED:
            return currentBreakpointChanged(state, action);
        default:
            return state;
    }
}