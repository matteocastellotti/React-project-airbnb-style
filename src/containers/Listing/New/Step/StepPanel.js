import React from 'react';

import Panel from '../../../../components/UI/Panel/Panel';
import Progress from '../../../../components/UI/Progress/Progress';
import Button from '../../../../components/UI/Button/Button';
import Spacing from '../../../../components/UI/Spacing/Spacing';
import Link from '../../../../components/UI/Link/Link';
import Text from '../../../../components/UI/Text/Text';

class StepPanel extends React.Component {
    render() {

        let button = null;
        if (this.props.complete) {
            button = (
                <Link href="/">
                    MODIFY
                </Link>
            )
        } else {
            button = (
                <Button
                    onPress={this.props.onPress}
                    small={true}>
                    CONTINUE
                </Button>
            )
        }

        return (
            <Spacing vertical={2}>
                <Panel>
                    <Text muted={true}>
                        <span>{this.props.title}</span>
                    </Text>
                    <Text bold={true}>
                        {this.props.description}
                    </Text>
                    <Text small={true}>
                        {this.props.subtitle}
                    </Text>
                    <Progress width={this.props.width} />
                    <Spacing top={2}>
                        {button}
                    </Spacing>
                </Panel>
            </Spacing>
        )
    }
}

export default StepPanel;