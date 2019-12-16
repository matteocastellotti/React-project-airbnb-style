import { appConstants } from '../constants';

export const appActions = {
    currentBreakpointChanged
}

function currentBreakpointChanged(breakpoint) {
    return {
        type: appConstants.CURRENT_BREAKPOINT_CHANGED,
        payload: breakpoint
    };
}