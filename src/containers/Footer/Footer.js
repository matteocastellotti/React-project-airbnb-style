import React, { Component } from 'react';

import Divider from '../../components/UI/Divider/Divider';
import Spacing from '../../components/UI/Spacing/Spacing';
import PageContainer from '../../components/UI/PageContainer/PageContainer';
import Row from '../../components/UI/Row/Row';
import Col from '../../components/UI/Col/Col';
import TwitterIcon from '../../components/UI/Icons/TwitterIcon';
import FacebookIcon from '../../components/UI/Icons/FacebookIcon';
import Link from '../../components/UI/Link/Link';
import VerticalAlign from '../../components/UI/VerticalAlign/VerticalAlign';


import { css, withStyles } from '../../config/withStyles';

class Footer extends Component {
    render() {
        return (
            <div {...css(this.props.styles.container)}>
                <Spacing vertical={8}>
                    <PageContainer>
                        <footer>
                            <Divider />
                            <Row>
                                <Col md={6} />
                                <Col md={6}>
                                    <div {...css(this.props.styles.social_container)}>
                                        <Spacing horizontal={2} inline={true}>
                                            <Link href="https://twitter.com/airbnb" openInNewWindow={true}>
                                                <TwitterIcon size={32} />
                                            </Link>
                                        </Spacing>
                                        <Spacing horizontal={2} inline={true}>
                                            <Link href="https://facebook.com/airbnb" openInNewWindow={true}>
                                                <FacebookIcon size={32} />
                                            </Link>
                                        </Spacing>
                                    </div>
                                </Col>
                            </Row>
                        </footer>
                    </PageContainer>
                </Spacing>
            </div>
        )
    }
}

export default withStyles(({ color }) => ({
    container: {
        borderTop: "1px solid " + color.panelBorder,
        backgroundColor: color.white
    },
    social_container: {
        float: "right"
    }
}))(Footer);