import React from 'react';
import PropTypes from 'prop-types';
import PropTypes2 from 'airbnb-prop-types';

import { css, withStyles } from '../../../config/withStyles';

const searchType = (inline, type, isLoading) => (
    inline ? "span" : type ? "small" : "div"
)

const searchStyle = (styles, micro, small, reduced, large, short, largeShort, tall, largeTall, microWide) => (
    micro ? styles.size_micro : 
            small ? styles.size_small : 
                reduced ? styles.size_reduced : 
                    large ? styles.size_large : 
                        short ? styles.size_regularShort :
                            largeShort ? styles.size_largeShort :
                                tall ? styles.size_regularTall :
                                    largeTall ? styles.size_largeTall :
                                        microWide ? styles.size_microWide : 
                                            styles.size_regular
)

class Text extends React.PureComponent {
    render() {
        const tag = searchType(this.props.inline, this.props.micro || this.props.microWide, this.props.isLoading);
        const styles = searchStyle(this.props.styles, this.props.micro, this.props.small, this.props.reduced, this.props.large, this.props.short, this.props.largeShort,
                                this.props.tall,this.props.largeTall, this.props.microWide);
        return  React.createElement(tag, 
                    {...css(
                        this.props.styles.text, 
                        styles, 
                        this.props.bold && this.props.styles.weight_bold, 
                        this.props.light && this.props.styles.weight_light,
                        this.props.inverse && this.props.styles.color_inverse,
                        this.props.muted && this.props.large && this.props.styles.color_mutedLarge,
                        this.props.muted && !this.props.large && this.props.styles.color_muted,
                        this.props.disabled && this.props.styles.color_disabled,
                        this.props.inline && this.props.styles.inline
                    )},
                    this.props.isLoading ? null : this.props.children)
    }
}

const stylePossibleValues = PropTypes2.mutuallyExclusiveTrueProps("micro", "small", "reduced", "large", "short", "largeShort", "tall", "largeTall", "microWide");
const weigthPossibleValues = PropTypes2.mutuallyExclusiveTrueProps("bold", "light");
const textPossibleValues = PropTypes2.mutuallyExclusiveTrueProps("muted", "disabled", "inverse");

Text.propTypes = {
    id: PropTypes.string,//m.a,
    micro: stylePossibleValues,
    small: stylePossibleValues,
    reduced: stylePossibleValues,
    large: stylePossibleValues,
    short: stylePossibleValues,
    largeShort: stylePossibleValues,
    tall: stylePossibleValues,
    largeTall: stylePossibleValues,
    microWide: stylePossibleValues,
    bold: weigthPossibleValues,
    light: weigthPossibleValues,
    inverse: textPossibleValues,
    muted: textPossibleValues,
    disabled: textPossibleValues,
    dir: PropTypes.string,//d.a,
    inline: PropTypes.bool,
    children: PropTypes.node//Object(v.a)("isLoading", u.a.node)
}

Text.defaultProps = {
    id: null,
    micro: false,
    small: false,
    reduced: false,
    large: false,
    bold: false,
    light: false,
    inverse: false,
    muted: false,
    disabled: false,
    dir: null,
    inline: false
}

export default withStyles(({ color, font }) => ({
    text: Object.assign({}, font.book, {
        color: color.core.hof,
        fontFamily: font.FONT_FAMILY,
        margin: 0,
        wordWrap: "break-word"
    }),
    size_micro: font.textMicro,
    size_small: font.textSmall,
    size_reduced: {
        fontSize: 17,
        lineHeight: "22px",
        letterSpacing: .2
    },
    size_regular: font.textRegular,
    size_large: font.textLarge,
    size_regularShort: font.textRegularShort,
    size_largeShort: font.textLargeShort,
    size_regularTall: font.textRegularTall,
    size_largeTall: font.textLargeTall,
    size_microWide: font.textMicroWide,
    color_inverse: {
        color: color.white
    },
    color_muted: {
        color: color.textMuted
    },
    color_mutedLarge: {
        color: color.textMutedLarge
    },
    color_disabled: {
        color: color.textDisabled
    },
    weight_bold: font.bold,
    weight_light: font.light,
    inline: {
        display: "inline"
    }
}))(Text);