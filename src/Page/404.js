import React, { Component } from 'react';
import img from '../image/rob.png';

import Header from '../containers/Header/Header';
import Main from '../components/UI/Main/Main';
import PageContainer from '../components/UI/PageContainer/PageContainer';
import Spacing from '../components/UI/Spacing/Spacing';
import Row from '../components/UI/Row/Row';
import Col from '../components/UI/Col/Col';
import Image from '../components/UI/Image/Image';
import ShowAt from '../components/UI/ShowAt/ShowAt';
import Title from '../components/UI/Title/Title';
import Text from '../components/UI/Text/Text';
import Link from '../components/UI/Link/Link';
import Translate from '../components/UI/Translate/Translate';
import Button from '../components/UI/Button/Button';

class FourZeroFour extends Component {
  render() {
    return (
      <div>
          <Header
            sticky={true}
            hideSearch={false} />
          <Main 
            stickyHeader={true}>
            <PageContainer>
              <Spacing top={8}>
                <Row>
                  <Col md={6}>
                    <Text large={true}>
                      <Title size="1">
                        Siamo spiacenti!
                      </Title>
                    </Text>
                    <Text large={true}>
                      <Title size="2">
                        Non troviamo la pagina che cerchi
                      </Title>
                    </Text>
                    <Spacing top={5}>
                      <Text large={true}>
                        <Button href="/" block={true} primary={true}>
                          <Translate labelKey="HOME" />
                        </Button>
                      </Text>
                    </Spacing>
                  </Col>
                  <ShowAt breakpoint="mediumAndAbove"> 
                    <Col md={4} lg={3}>
                      <Image alt="404" src={img} />
                    </Col>
                  </ShowAt>
                </Row>
              </Spacing>
            </PageContainer>
          </Main>
      </div>
    );
  }
}

export default FourZeroFour;
