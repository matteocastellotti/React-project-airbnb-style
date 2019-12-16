import React from 'react';
import PropTypes from 'prop-types';
import PropTypes2 from 'airbnb-prop-types';

import Shimmer from '../Shimmer/Shimmer';
import { css, withStyles } from '../../../config/withStyles';

class Image extends React.Component {
    
    state = {
        showImage: !this.props.isLoading,
        transitionComplete: !this.props.isLoading
    }
     
    componentWillReceiveProps(nextProps) {
        this.props.isLoading && !nextProps.isLoading ? 
            this.createAsyncImage(this.props.src) : 
            this.props.src !== nextProps.src ?
                (this.removeImage(),
                this.createAsyncImage(nextProps.src)) : 
                !this.props.isLoading && nextProps.isLoading && this.removeImage()
    }
    
    componentWillUnmount() {
        this.image && delete this.image.onload;
        this.image && delete this.image.onerror;
    }
    
    createAsyncImage(src) {
        this.image = new window.Image,
        this.image.onerror = function() {
            this.handleAsyncImageLoad()
        }
        this.image.decode ? 
            (this.image.src = src,
            this.image.decode().then(function() {
            this.handleAsyncImageLoad() })) : 
            (this.image.onload = function() {
                this.handleAsyncImageLoad()
            },
            this.image.src = src)
    }
    
    handleAsyncImageLoad() {
        delete this.image;
        this.setState({showImage: true});
        this.props.onLoad();
    }
    
    removeImage() {
        this.image && delete this.image.onload;
        this.image && delete this.image.onerror;
        this.setState({showImage: false, transitionComplete: false});
    }
    
    render() {
        return (
            <div 
                {...css(
                    this.props.styles.container, 
                    {
                        width: this.props.width,
                        height: this.props.height
                    }
                )}>
                {!this.state.transitionComplete && this.props.shimmer && 
                        <div 
                            {...css(
                                this.props.styles.shimmer,
                                this.state.showImage && this.props.styles.shimmer_fadeOut
                            )}
                            onAnimationEnd={() => {
                                this.setState({transitionComplete: true});
                            }}>
                            <Shimmer
                                width="100%"
                                height="100%" />
                        </div>
                }
                {this.state.showImage && this.props.background && 
                    <div
                        {...css(
                            this.props.styles.image,
                            this.props.styles.background,
                            this.props.styles.fadeIn,
                            (this.props.hasBorderRadius || this.props.hasBorderBottomRadius) && this.props.style.borderBottomRadius,
                            (this.props.hasBorderRadius || this.props.hasBorderTopRadius) && this.props.styles.borderTopRadius,
                            this.props.backgroundSize === "cover" && this.props.styles.backgroundSize_cover,
                            this.props.backgroundSize === "contain" && this.props.styles.backgroundSize_contain,
                            {
                                width: this.props.width,
                                height: this.props.height,
                                backgroundImage: "url(" + this.props.src + ")"
                            }
                        )}
                        role={this.props.alt && "img"}
                        aria-label={this.props.alt} />
                }
                {this.state.showImage && !this.props.background && 
                    <img 
                        {...css(
                            this.props.styles.image,
                            this.props.styles.fadeIn,
                            (this.props.hasBorderRadius || this.props.hasBorderBottomRadius) && this.props.styles.borderBottomRadius,
                            (this.props.hasBorderRadius || this.props.hasBorderTopRadius) && this.props.styles.borderTopRadius
                        )}
                        src={this.props.src}
                        width={this.props.width}
                        height={this.props.height}
                        alt={this.props.alt} />
                }
            </div>
        )
    }
}

Image.propTypes = {
    alt: PropTypes.string.isRequired,
    background: PropTypes.bool,
    hasBorderRadius: PropTypes.bool,
    hasBorderBottomRadius: PropTypes2.mutuallyExclusiveTrueProps("hasBorderBottomRadius", "hasBorderRadius"),
    hasBorderTopRadius: PropTypes2.mutuallyExclusiveTrueProps("hasBorderTopRadius", "hasBorderRadius"),
    backgroundSize: PropTypes.oneOf(["cover", "contain"]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onLoad: PropTypes.func,
    src: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    shimmer: PropTypes.bool
}

Image.defaultProps = {
    hasBorderRadius: false,
    hasBorderBottomRadius: false,
    hasBorderTopRadius: false,
    background: false,
    backgroundSize: "cover",
    height: "auto",
    onLoad: () => {
        return;
    },
    width: "100%",
    shimmer: !0
}

export default withStyles(() => ({
    container: {
        position: "relative"
    },
    fadeIn: {
        animationName: {
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            }
        },
        animationDuration: "300ms",
        animationTimingFunction: "ease-out"
    },
    shimmer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    shimmer_fadeOut: {
        animationName: {
            from: {
                opacity: 1
            },
            to: {
                opacity: 0
            }
        },
        animationDuration: "300ms",
        animationTimingFunction: "ease-out"
    },
    image: {
        position: "absolute"
    },
    borderBottomRadius: {
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3
    },
    borderTopRadius: {
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
    },
    background: {
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat"
    },
    backgroundSize_cover: {
        backgroundSize: "cover"
    },
    backgroundSize_contain: {
        backgroundSize: "contain"
    }
}))(Image)