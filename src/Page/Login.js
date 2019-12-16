import React from 'react';

import Login from '../containers/Auth/Login';
import PageContainer from '../components/UI/PageContainer/PageContainer';
import Spacing from '../components/UI/Spacing/Spacing';
import Panel from '../components/UI/Panel/Panel';
import { css, withStyles } from '../config/withStyles';

class LoginPage extends React.Component {
    render() {
        return (
            <PageContainer>
                <Spacing top={4}>
                    <div {...css(this.props.styles.container)}>
                        <Panel>
                            <Login />
                        </Panel>
                    </div>
                </Spacing>
            </PageContainer>
        )
    }
} 

export default withStyles(({ responsive }) => ({
    container: {
        [responsive.mediumAndAbove]: {
            width: 450,
            margin: "0 auto"
        }
    }
}))(LoginPage);

