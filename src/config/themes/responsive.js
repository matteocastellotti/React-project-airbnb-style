export const isLarge = (e, t) => (
    e !== breakpoints.SMALL && (e !== breakpoints.MEDIUM || t === breakpointAbove.MEDIUM_AND_ABOVE)
)

const buildResponsive = (responsive, breakpoint, measure) => {
    responsive[breakpoint] = measure;
}

export const getMeasureFromValue = (value) => {
    if (value >= measures[breakpoints.LARGE]) {
        return breakpoints.LARGE;
    }
    if (value < measures[breakpoints.LARGE] && value >= measures[breakpoints.MEDIUM]) {
        return breakpoints.MEDIUM;
    }
    if (value < measures[breakpoints.MEDIUM]) {
        return breakpoints.SMALL;
    }
}

export const breakpoints = {
    LARGE: "large",
    MEDIUM: "medium",
    SMALL: "small"
}

export const breakpointAbove = {
    MEDIUM_AND_ABOVE: "mediumAndAbove",
    LARGE_AND_ABOVE: "largeAndAbove"
}

export const measures = {
    [breakpoints.LARGE]: 1128,
    [breakpoints.MEDIUM]: 744,
    [breakpoints.SMALL]: 327
}

const responsive = {};
buildResponsive(responsive, breakpoints.LARGE, "@media (min-width: " + measures[breakpoints.LARGE] + "px)");
buildResponsive(responsive, breakpoints.MEDIUM, "@media (max-width: " + (measures[breakpoints.LARGE] - 1) + "px)");
buildResponsive(responsive, breakpoints.SMALL, "@media (max-width: " + (measures[breakpoints.MEDIUM] - 1) + "px)");
buildResponsive(responsive, breakpointAbove.MEDIUM_AND_ABOVE, "@media (min-width: " + measures[breakpoints.MEDIUM] + "px)");
buildResponsive(responsive, breakpointAbove.LARGE_AND_ABOVE, "@media (min-width: " + measures[breakpoints.LARGE] + "px)");

export default responsive;