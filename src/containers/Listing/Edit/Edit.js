import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Row from '../../../components/UI/Row/Row';
import Col from '../../../components/UI/Col/Col';
import Spacing from '../../../components/UI/Spacing/Spacing';
import asyncComponent from '../../../helpers/AsyncFunc';
import Sidenav from '../../../components/UI/Sidenav/Sidenav';
import SidenavItem from '../../../components/UI/Sidenav/SidenavItem';
import Translate from '../../../components/UI/Translate/Translate';
import PageContainer from '../../../components/UI/PageContainer/PageContainer';
import Header from '../..//Header/Header';
import Main from '../../../components/UI/Main/Main';

class Edit extends React.Component {
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
                                <Col lg={3}>
                                    <Spacing bottom={2}>
                                        <Sidenav>
                                            <SidenavItem
                                                href="/my-listings/incomplete">
                                                <Translate labelKey="INCOMPLETE_LISTINGS" />
                                            </SidenavItem>
                                            <SidenavItem
                                                href="/my-listings">
                                                <Translate labelKey="EDIT_LISTINGS" />
                                            </SidenavItem>
                                            <SidenavItem
                                                href="/new-listing">
                                                <Translate labelKey="INSERT_LISTING" />
                                            </SidenavItem>
                                        </Sidenav>
                                    </Spacing>
                                </Col>
                                <Col lg={9}>
                                    <Switch>
                                        <Route
                                            exact
                                            path={`${this.props.match.url}/incomplete`}
                                            component={asyncComponent(() => import('../../../containers/Listing/Edit/Incomplete.js'))}
                                        />
                                        <Route
                                            exact
                                            path={`${this.props.match.url}`}
                                            component={asyncComponent(() => import('../../../containers/Listing/Edit/Listings.js'))}
                                        />
                                    </Switch>
                                </Col>
                            </Row>
                        </PageContainer>
                    </Spacing>
                </Main>
            </div>
        )
    }
}

export default withRouter(Edit);