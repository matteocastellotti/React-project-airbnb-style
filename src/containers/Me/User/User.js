import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Row from '../../../components/UI/Row/Row';
import Col from '../../../components/UI/Col/Col';
import Translate from '../../../components/UI/Translate/Translate';
import Spacing from '../../../components/UI/Spacing/Spacing';
import asyncComponent from '../../../helpers/AsyncFunc';
import Sidenav from '../../../components/UI/Sidenav/Sidenav';
import SidenavItem from '../../../components/UI/Sidenav/SidenavItem';
import PageContainer from '../../../components/UI/PageContainer/PageContainer';
import Header from '../../Header/Header';
import Main from '../../../components/UI/Main/Main';

import { meUserActions } from '../../../store/actions';

class User extends Component {

    componentDidMount() {
        this.props.onGet();
    }

    render() {
        return (
            <div>
                <Header
                    sticky={true} />
                <Main
                    stickyHeader={true}>
                    <Spacing vertical={3}>
                        <PageContainer>
                            <Row>
                                <Col md={3}>
                                    <Spacing bottom={2}>
                                        <Sidenav>
                                            <SidenavItem
                                                href="/me/information">
                                                <Translate labelKey="MAIN_INFORMATIONS" />
                                            </SidenavItem>
                                            <SidenavItem
                                                href="/me/contacts">
                                                <Translate labelKey="CONTACT_INFORMATIONS" />
                                            </SidenavItem>
                                        </Sidenav>
                                    </Spacing>
                                </Col>
                                <Col md={9}>
                                    <Switch>
                                        <Route
                                            exact
                                            path={`${this.props.match.url}/information`}
                                            component={asyncComponent(() => import('../../../containers/Me/User/Information.js'))}
                                        />
                                        <Route
                                            exact
                                            path={`${this.props.match.url}/contacts`}
                                            component={asyncComponent(() => import('../../../containers/Me/User/Contacts.js'))}
                                        />
                                    </Switch>
                                </Col>
                            </Row>
                        </PageContainer>
                    </Spacing>
                </Main>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGet: () => dispatch(meUserActions.get())
    }
}

export default connect(null, mapDispatchToProps)(withRouter(User));