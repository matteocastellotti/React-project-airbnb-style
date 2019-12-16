import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from '../UI/Title/Title';
import { css, withStyles } from '../../config/withStyles';

class HomePanelFilter extends Component {
    render() {
        return (
            <div
                {...css(
                    this.props.styles.pageContainer,
                    this.props.fullWidth && this.props.styles.pageContainer_fullWidth,
                    this.props.verticalSpacingTop && this.props.styles.pageContainer_verticalSpacingTop,
                    this.props.verticalSpacingBottom && this.props.styles.pageContainer_verticalSpacingBottom,
                    this.props.disableScrollAnchor && this.props.styles.pageContainer_disableScrollAnchor,
                    this.props.padded && this.props.styles.pageContainer_padded,
                    this.props.paddedRight && this.props.styles.pageContainer_paddedRight,
                    { backgroundColor: this.props.backgroundColor },
                    this.props.minHeight && { minHeight: this.props.minHeight}
                )}>
                <div
                    {...css(
                        this.props.styles.backdropTitleSearchBarContainer,
                        (this.props.small || this.props.medium) && this.props.styles.backdropTitleSearchBarContainer_vert_padding
                    )}>
                    <div
                        {...css(
                            this.props.styles.backdropTitle,
                            this.props.styles.backdropTitle_left
                        )}>
                        <Title size={1}>
                            {this.props.headline}
                        </Title>
                    </div>
                    <div
                        {...css(
                            this.props.styles.backdropSubtitle
                        )}>
                        {this.props.subheadline}
                    </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

HomePanelFilter.propTypes = {
    children: PropTypes.node,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    backgroundColor: PropTypes.string,
    disableScrollAnchor: PropTypes.bool,
    fullWidth: PropTypes.bool,
    minHeight: PropTypes.number,
    padded: PropTypes.bool,
    paddedRight: PropTypes.bool,
    verticalSpacingBottom: PropTypes.bool,
    verticalSpacingTop: PropTypes.bool,
    headline: PropTypes.string,
    subheadline: PropTypes.string
};

HomePanelFilter.defaultProps = {
    children: null,
    small: false,
    medium: false,
    backgroundColor: "transparent",
    disableScrollAnchor: false,
    fullWidth: false,
    minHeight: null,
    padded: false,
    paddedRight: false,
    verticalSpacingBottom: true,
    verticalSpacingTop: true,
    headline: null,
    subheadline: null
};

export default withStyles(({ responsive, unit, color, font }) => ({
    pageContainer: {
        paddingLeft: unit * 3,
        paddingRight: unit * 3,
        maxWidth: 1080,
        [responsive.largeAndAbove]: {
            margin: "80px auto",
            position: "relative"
        }
    },
    pageContainer_padded: {
        [responsive.largeAndAbove]: {
            paddingLeft: unit * 10,
            paddingRight: unit * 10
        }
    },
    pageContainer_paddedRight: {
        [responsive.largeAndAbove]: {
            paddingRight: unit * 10
        }
    },
    pageContainer_disableScrollAnchor: {
        overflowAnchor: "none"
    },
    pageContainer_verticalSpacingTop: {
        paddingTop: unit * 3,
        [responsive.mediumAndAbove]: {
            paddingTop: 6 * unit
        }
    },
    pageContainer_verticalSpacingBottom: {
        paddingBottom: unit * 3,
        [responsive.mediumAndAbove]: {
            paddingBottom: 6 * unit
        }
    },
    pageContainer_fullWidth: {
        maxWidth: "none"
    },
    pageContainer_beyondStyling: {
        paddingLeft: 0,
        paddingRight: 0
    },
    backdropTitleSearchBarContainer: {
        [responsive.largeAndAbove]: {
            background: color.white,
            borderRadius: 4,
            padding: 3 * unit,
            width: "100%",
            marginBottom: 8 * unit
        }
    },
    backdropTitleSearchBarContainer_vert_padding: {
        paddingTop: 6 * unit,
        paddingBottom: 2 * unit,
        [responsive.mediumAndAbove]: {
            paddingTop: 8 * unit,
            paddingBottom: 3 * unit
        },
        [responsive.largeAndAbove]: {
            padding: 4 * unit
        }
    },
    backdropTitle: Object.assign({},
        font.title3,
        {
            color: color.white,
            fontWeight: "bold",
            margin: 0,
            padding: 0,
            [responsive.mediumAndAbove]: {
                color: color.white,
                margin: 0,
                padding: 0
            },
            [responsive.largeAndAbove]: {
                margin: 0,
                padding: 0
            }
        }
    ),
    backdropTitle_left: {
        [responsive.mediumAndAbove]: {
            lineHeight: "36px"
        },
        [responsive.largeAndAbove]: {
            lineHeight: "36px"
        }
    },
    backdropSubtitle: Object.assign({},
        font.textRegular,
        {
            width: "100%",
            marginTop: 1 * unit,
            color: color.white,
            [responsive.mediumAndAbove]: Object.assign({}, 
                font.textLarge,
                {
                    marginTop: .5 * unit,
                    color: color.white
                }
            ),
            [responsive.largeAndAbove]: Object.assign({},
                font.textLarge,
                {
                    marginTop: 1 * unit,
                    marginBottom: 1 * unit
                }
            )
        }
    )
}))(HomePanelFilter);