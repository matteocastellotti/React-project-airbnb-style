import React, { Component } from 'react';

import PageContainer from '../../../components/UI/PageContainer/PageContainer';
import Row from '../../../components/UI/Row/Row';
import Col from '../../../components/UI/Col/Col';
import Translate from '../../../components/UI/Translate/Translate';
import Title from '../../../components/UI/Title/Title';
import Button from '../../../components/UI/Button/Button';
import Header from '../../Header/Header';
import Main from '../../../components/UI/Main/Main';

import { css, withStyles } from '../../../config/withStyles';

class Start extends Component {
    render() {
        return (
            <div>
                <Header
                    sticky={true} />
                <Main
                    stickyHeader={true}>
                    <div {...css(this.props.styles.container)}>
                        <div {...css(this.props.styles.photo)} />
                    </div>
                    <PageContainer>
                        <Row>
                            <Col md={12} lg={6}>
                                <Row>
                                    <Col smOffset={1} sm={10} lg={9}>
                                        <Title size={2}>
                                            <Translate labelKey="CREATE_LISTING" />
                                        </Title>
                                        <Title size={1}>
                                            <Translate labelKey="CREATE_LISTING_DESCRIPTION1" />
                                        </Title>
                                        <Translate labelKey="CREATE_LISTING_DESCRIPTION2" />
                                        <Button
                                            href="/new-listing/owner"
                                            primary={true}>
                                            <Translate labelKey="LETS_START" />
                                        </Button> 
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </PageContainer>
                </Main>
            </div>
        );
    }
}

export default withStyles(() => ({
    container: {
        width: "100%",
        position: "absolute",
        height: "100vh",
        minHeight: "550px",
        overflow: "hidden",
        contain: "strict"
    },
    photo: {
        height: "100%",
        width: "100%",
        backgroundImage: "url(https://a0.muscache.com/airbnb/static/slash_host/never_a_stranger-91db63c401ad8301408ec3f24fd0f113.jpg)",
        backgroundRepeat: "round"
    }
}))(Start);