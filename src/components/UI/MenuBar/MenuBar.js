import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ShowAt from '../ShowAt/ShowAt';
import MenuBarContainer from './MenuBarContainer';
import Collapse from '../Collapse/Collapse';
import Text from '../Text/Text';
import Link from '../Link/Link';
import Translate from '../Translate/Translate';

import { css, withStyles } from '../../../config/withStyles';
import PageContainer from '../PageContainer/PageContainer';
import Row from '../Row/Row';
import Col from '../Col/Col';
import Button from '../Button/Button';
import FlexBar from '../FlexBar/FlexBar';
import Spacing from '../Spacing/Spacing';

class MenuBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isExpand: false
        }
        this.handleExpand = this.handleExpand.bind(this);
    }

    handleExpand() {
        this.setState({ isExpand: !this.state.isExpand });
    }

    render() {
        return (
            <MenuBarContainer
                bottomBorder={true}
                fixed={true}>
                <div {...css(this.props.styles.container)}>
                    <ShowAt breakpoint="mediumAndAbove">
                        <PageContainer>
                            <Row>
                                {this.props.children}
                                <Col 
                                    lg={3}
                                    md={6}>
                                    <FlexBar
                                        before={
                                            <Text>
                                                <Link onPress={this.handleExpand}>
                                                    <Translate labelKey={this.state.isExpand ? "HIDE_FILTER" : "OTHER_FILTER"} />
                                                </Link>
                                            </Text>
                                        }>
                                        <Spacing 
                                            vertical={1}
                                            horizontal={1}>
                                            <Button
                                                primary={true}
                                                small={true}
                                                onPress={this.props.onSubmit}>
                                                <Translate labelKey="FIND" />
                                            </Button>
                                        </Spacing>
                                    </FlexBar>
                                </Col>
                            </Row>
                            <Collapse
                                open={this.state.isExpand}>
                                <Row>
                                    {this.props.collapseElement}
                                </Row>
                            </Collapse>
                        </PageContainer>
                    </ShowAt>
                </div>
            </MenuBarContainer>
        )
    }
}

MenuBar.propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func
};

MenuBar.defaulProps = {
    onSubmit: () => {
        return;
    }
}

export default withStyles(({ unit, color, responsive }) => ({
    container: {
        width: "100%",
        position: "absolute",
        overflowX: "auto",
        whiteSpace: "nowrap",
        position: "initial",
        overflowX: "initial",
        whiteSpace: "initial"
    }
}))(MenuBar);