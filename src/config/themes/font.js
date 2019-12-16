import responsive from './responsive';

const font = {
    FONT_FAMILY: "Roboto,Helvetica Neue,sans-serif",
    bold: {
        fontWeight: "700"
    },
    book: {
        fontWeight: "normal",
    },
    button: {
        color: "#484848",
        fontSize: 19,
        lineHeight: "22px",
        paddingBottom: 0,
        paddingTop: 0
    },
    button_small: {
        color: "#484848",
        fontFamily: "Roboto,Helvetica Neue,sans-serif",
        fontSize: 14,
        letterSpacing: "normal",
        lineHeight: "18px"
    },
    formInput: {
        color: "#484848",
        fontSize: 19,
        lineHeight: "24px"
    },
    formLabel: {
        color: "#484848",
        fontSize: 19,
        lineHeight: "24px"
    },
    light: {
        fontWeight: "300"
    },
    textLarge: {
        color: "#484848",
        fontFamily: "Roboto,Helvetica Neue,sans-serif",
        fontSize: 22,
        letterSpacing: -0.2,
        lineHeight: "28px",
        paddingBottom: 0,
        paddingTop: 0
    },
    textLargeShort: {
        color: "#484848",
        fontFamily: "Roboto,Helvetica Neue,sans-serif",
        fontSize: 22,
        letterSpacing: -0.2,
        lineHeight: "24px",
        paddingBottom: 0,
        paddingTop: 0
    },
    textLargeTall: {
        color: "#484848",
        fontFamily: "Roboto,Helvetica Neue,sans-serif",
        fontSize: 22,
        letterSpacing: -0.2,
        lineHeight: "32px",
        paddingBottom: 0,
        paddingTop: 0
    },
    textMicro: {
        color: "#484848",
        fontFamily: "Roboto,Helvetica Neue,sans-serif",
        fontSize: 12,
        letterSpacing: 0.2,
        lineHeight: "16px",
        paddingBottom: 0,
        paddingTop: 0
    },
    textMicroWide: {
        color: "#484848",
        fontFamily: "Roboto,Helvetica Neue,sans-serif",
        fontSize: 12,
        letterSpacing: 1,
        lineHeight: "16px",
        paddingBottom: 0,
        paddingTop: 0
    },
    textRegular: {
        color: "#484848",
        fontFamily: "Roboto,Helvetica Neue,sans-serif",
        fontSize: 19,
        lineHeight: "24px",
        paddingBottom: 0,
        paddingTop: 0
    },
    textRegularShort: {
        color: "#484848",
        fontFamily: "Roboto,Helvetica Neue,sans-serif",
        fontSize: 19,
        lineHeight: "22px",
        paddingBottom: 0,
        paddingTop: 0
    },
    textRegularTall: {
        color: "#484848",
        fontFamily: "Roboto,Helvetica Neue,sans-serif",
        fontSize: 19,
        lineHeight: "28px",
        paddingBottom: 0,
        paddingTop: 0
    },
    textSmall: {
        color: "#484848",
        fontFamily: "Roboto,Helvetica Neue,sans-serif",
        fontSize: 15,
        letterSpacing: 0.2,
        lineHeight: "18px",
        paddingBottom: 0,
        paddingTop: 0
    },
    /*title1: {
        fontSize: "44px",
        fontWeight: "bold"
    },
    title2: {
        fontSize: "32px",
        fontWeight: "bold"
    },
    title3: {
        fontSize: "24px",
        fontWeight: "bold"
    },
    title4: {
        fontSize: "18px",
        fontWeight: "normal"
    },
    title5: {
        fontSize: "16px",
        fontWeight: "normal"
    },
    title6: {
        fontSize: "14px",
        fontWeight: "normal",
        color: "#767676"
    },*/
    title1: {
        [responsive.mediumAndAbove]: {
            fontSize: 38,
            letterSpacing: "normal",
            lineHeight: "44px",
        },
        color: "#484848",
        fontFamily: "Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
        fontSize: 46,
        letterSpacing: "normal",
        lineHeight: "52px",
        paddingBottom: 8,
        paddingTop: 8,
        textTransform: undefined
    },
    title2: {
        color: "#484848",
        fontFamily: "Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
        fontSize: 32,
        letterSpacing: "normal",
        lineHeight: "36px",
        paddingBottom: 6,
        paddingTop: 6,
        textTransform: undefined
    },
    title3: {
        color: "#484848",
        fontFamily: "Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif",
        fontSize: 24,
        letterSpacing: "normal",
        lineHeight: "30px",
        paddingBottom: 2,
        paddingTop: 2,
        textTransform: undefined
    }
}

export default font;