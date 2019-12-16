import React from 'react';
import PropTypes from 'prop-types';

import Spacing from '../Spacing/Spacing';
import CardContent from './CardContent';
import CardMedia from './CardMedia';
import CardDetails from './CardDetails';
import Title from '../Title/Title';
import Image from '../Image/Image';
import { css, withStyles } from '../../../config/withStyles';

class Card extends React.Component {
    
    state = {
        isFocused: false
    }

    onBlur = event => {
        this.setState({isFocused: !1});
        this.props.onBlur(event);
    }
    
    onFocus = event => {
        this.setState({isFocused: !0});
        this.props.onFocus(event);
    }
    
    render() {

        let image = null;
        if (this.props.src) {
            image = (
                <CardMedia>
                    <Image
                        src={this.props.src} />
                </CardMedia>
            )
        }

        let title = null;
        if (this.props.title) {
            title = (
                <Title size={2}>
                    {this.props.title}
                </Title>
            )
        }

        let subtitle = null;
        if (this.props.subtitle) {
            subtitle = (
                <Title size={3}>
                    {this.props.subtitle}
                </Title>
            )
        }

        return (
            <Spacing vertical={2}>
                <div {...css(this.props.styles.container)}>
                    <div 
                        {...css(this.props.styles.content)}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}>
                        <CardContent
                            image={image}>
                            {title}
                            <CardDetails />
                        </CardContent>
                    </div>
                </div>
            </Spacing>
        )
    }
}

Card.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
}

Card.defaultProps = {
    src: null,
    title: null,
}

export default withStyles(({ color, responsive }) => ({
    container: {
        border: "1px solid #e4e4e4",
        borderRadius: 4,
        boxShadow: "0 2px 5px 0 #F2F2F2",
        position: "relative",
        display: "block",
        listStyle: "none",
        background: color.white,
        transformOrigin: "top",
        maxHeight: 700,
        opacity: 1,
        filter: "alpha(opacity=100)",
        cursor: "pointer",
        [responsive.mediumAndAbove] : {
            margin: "0 0 12px",
            height: 202,
            ":hover": {
                boxShadow: "0 2px 5px 0 #DBDBDB"
            }
        }
    }
}))(Card);