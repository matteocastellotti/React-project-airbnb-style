import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Spacing from '../../../components/UI/Spacing/Spacing';
import Title from '../../../components/UI/Title/Title';
import Form from '../../../components/UI/Form/Form';
import BottomSheet from '../../../components/UI/BottomSheet/BottomSheet';
import FlexBar from '../../../components/UI/FlexBar/FlexBar';
import Translate from '../../../components/UI/Translate/Translate';
import PageContainer from '../../../components/UI/PageContainer/PageContainer';
import CheckBoxForm from '../../../components/UI/FormElement/CheckBoxForm/CheckBoxForm';
import Header from '../../Header/Header';
import Main from '../../../components/UI/Main/Main';

import polyglot from '../../../languageProvider';
import { validateForm } from '../../../helpers/form.utility'
import { meListingActions, stepListingActions } from "../../../store/actions";

class Comforts extends Component {
    componentDidMount() {
        this.props.onGet(this.props.match.params.listing_id);
    }

    changeHandler = event => {
        const { name, checked } = event.target;
        this.props.onFieldChanged(name, checked);
    }

    validate = () => {
        var form = {
            formProperties: [
                
            ]
        };
        return validateForm(form);
    }

    submitHandler = event => {
        event.preventDefault();
        var errors = this.validate();
        if(Object.keys(errors).length !== 0) {
            this.props.onInvalidFormSubmitted('comforts', errors);
        } else {
            this.props.onUpdate(this.props.match.params.listing_id, this.props.currentValues.comforts);
        }
    }

    render() {
        return (
            <div>
                <Header
                    sticky={true} />
                <Main
                    stickyHeader={true}>
                    <PageContainer>
                        <Spacing top={4} bottom={10}>
                            <Title size={3}>
                                <Translate labelKey="WHAT_COMFORTS_HAVE" />
                            </Title>
                            <Form onSubmit={this.submitHandler}>
                                <Spacing vertical={4}> 
                                    <CheckBoxForm 
                                        id="fridge"
                                        name="comforts.fridge"
                                        label={polyglot.phrases["FRIDGE"]}
                                        value={this.props.currentValues.comforts.fridge} 
                                        checked={this.props.currentValues.comforts.fridge} 
                                        onChange={this.changeHandler} />
                                </Spacing>
                                <Spacing vertical={4}> 
                                    <CheckBoxForm 
                                        id="oven"
                                        name="comforts.oven"
                                        label= {polyglot.phrases["OVEN"]}
                                        value={this.props.currentValues.comforts.oven} 
                                        checked={this.props.currentValues.comforts.oven} 
                                        onChange={this.changeHandler} />
                                </Spacing>
                                <Spacing vertical={4}> 
                                    <CheckBoxForm 
                                        id="dishwasher"
                                        name="comforts.dishwasher"
                                        label={polyglot.phrases["DISHWASHER"]}
                                        value={this.props.currentValues.comforts.dishwasher} 
                                        checked={this.props.currentValues.comforts.dishwasher} 
                                        onChange={this.changeHandler} />
                                </Spacing>
                                <Spacing vertical={4}> 
                                    <CheckBoxForm 
                                        id="securityDoor"
                                        name="comforts.securityDoor"
                                        label={polyglot.phrases["SECURITY_DOOR"]}
                                        value={this.props.currentValues.comforts.securityDoor}
                                        checked={this.props.currentValues.comforts.securityDoor} 
                                        onChange={this.changeHandler} />
                                </Spacing>
                                <Spacing vertical={4}> 
                                    <CheckBoxForm 
                                        id="parkingSpace"
                                        name="comforts.parkingSpace"
                                        label={polyglot.phrases["PARKING_SPACE"]}
                                        value={this.props.currentValues.comforts.parkingSpace}
                                        checked={this.props.currentValues.comforts.parkingSpace}
                                        onChange={this.changeHandler} />
                                </Spacing>
                                <Spacing vertical={4}> 
                                    <CheckBoxForm 
                                        id="swimmingPool"
                                        name="comforts.swimmingPool"
                                        label={polyglot.phrases["SWIMMING_POOL"]}
                                        value={this.props.currentValues.comforts.swimmingPool}
                                        checked={this.props.currentValues.comforts.swimmingPool}
                                        onChange={this.changeHandler} />
                                </Spacing>
                                <Spacing vertical={4}> 
                                    <CheckBoxForm 
                                        id="terrace"
                                        name="comforts.terrace"
                                        label={polyglot.phrases["TERRACE"]}
                                        value={this.props.currentValues.comforts.terrace} 
                                        checked={this.props.currentValues.comforts.terrace} 
                                        onChange={this.changeHandler} />
                                </Spacing>
                                <Spacing vertical={4}> 
                                    <CheckBoxForm 
                                        id="balcony"
                                        name="comforts.balcony"
                                        label={polyglot.phrases["BALCONY"]}
                                        value={this.props.currentValues.comforts.balcony} 
                                        checked={this.props.currentValues.comforts.balcony} 
                                        onChange={this.changeHandler} />
                                </Spacing>
                                <Spacing vertical={4}> 
                                    <CheckBoxForm 
                                        id="elevator"
                                        name="comforts.elevator"
                                        label={polyglot.phrases["ELEVATOR"]}
                                        value={this.props.currentValues.comforts.elevator}
                                        checked={this.props.currentValues.comforts.elevator}
                                        onChange={this.changeHandler} />
                                </Spacing>
                                <Spacing vertical={4}> 
                                    <CheckBoxForm 
                                        id="hydromassage"
                                        name="comforts.hydromassage"
                                        label={polyglot.phrases["HYDROMASSAGE"]}
                                        value={this.props.currentValues.comforts.hydromassage}
                                        checked={this.props.currentValues.comforts.hydromassage}
                                        onChange={this.changeHandler} />
                                </Spacing>
                                <Spacing vertical={4}> 
                                    <CheckBoxForm 
                                        id="eletricGate"
                                        name="comforts.eletricGate"
                                        label={polyglot.phrases["ELETRIC_GATE"]}
                                        value={this.props.currentValues.comforts.eletricGate} 
                                        checked={this.props.currentValues.comforts.eletricGate} 
                                        onChange={this.changeHandler} />
                                </Spacing>
                                <Spacing vertical={4}> 
                                    <CheckBoxForm 
                                        id="fireplace"
                                        name="comforts.fireplace"
                                        label={polyglot.phrases["FIREPLACE"]}
                                        value={this.props.currentValues.comforts.fireplace}
                                        checked={this.props.currentValues.comforts.fireplace}
                                        onChange={this.changeHandler} />
                                </Spacing>
                                <Spacing vertical={4}> 
                                    <CheckBoxForm 
                                        id="opticalFibre"
                                        name="comforts.opticalFibre"
                                        label={polyglot.phrases["OPTICAL_FIBRE"]}
                                        value={this.props.currentValues.comforts.opticalFibre}
                                        checked={this.props.currentValues.comforts.opticalFibre}
                                        onChange={this.changeHandler} />
                                </Spacing>
                                <Spacing vertical={4}> 
                                    <CheckBoxForm 
                                        id="videoDoorPhone"
                                        name="comforts.videoDoorPhone"
                                        label={polyglot.phrases["VIDEO_DOOR_PHONE"]}
                                        value={this.props.currentValues.comforts.videoDoorPhone}
                                        checked={this.props.currentValues.comforts.videoDoorPhone}
                                        onChange={this.changeHandler} />
                                </Spacing>
                                <Spacing vertical={4}> 
                                    <CheckBoxForm 
                                        id="alarmSystem"
                                        name="comforts.alarmSystem"
                                        label={polyglot.phrases["ALARM_SYSTEM"]}
                                        value={this.props.currentValues.comforts.alarmSystem} 
                                        checked={this.props.currentValues.comforts.alarmSystem} 
                                        onChange={this.changeHandler} />
                                </Spacing>
                                <Spacing vertical={4}> 
                                    <CheckBoxForm 
                                        id="satelliteDish"
                                        name="comforts.satelliteDish"
                                        label={polyglot.phrases["SATELLITE_DISH"]}
                                        value={this.props.currentValues.comforts.satelliteDish}
                                        checked={this.props.currentValues.comforts.satelliteDish}
                                        onChange={this.changeHandler} />
                                </Spacing>
                                <Spacing vertical={4}> 
                                    <CheckBoxForm 
                                        id="doubleExposure"
                                        name="comforts.doubleExposure"
                                        label={polyglot.phrases["DOUBLE_EXPOSURE"]}
                                        value={this.props.currentValues.comforts.doubleExposure}
                                        checked={this.props.currentValues.comforts.doubleExposure}
                                        onChange={this.changeHandler} />
                                </Spacing>
                                <BottomSheet>
                                    <Spacing vertical={2}>
                                        <PageContainer>
                                            <FlexBar
                                                before={
                                                    <Button
                                                        primary={true}
                                                        href={'/new-listing/' + this.props.currentValues.id + '/details'}>
                                                        <Translate labelKey="BACK" />
                                                    </Button>
                                                }
                                                after={
                                                    <Button
                                                        type="submit"
                                                        primary={true}>
                                                        <Translate labelKey="CONTINUE" />
                                                    </Button>
                                                } />
                                        </PageContainer>
                                    </Spacing>
                                </BottomSheet>
                            </Form>
                        </Spacing>
                    </PageContainer>
                </Main>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { form } = state.MeListing.toJS();
    return {
        currentValues: form.currentValues,
        errors: form.validateErrors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGet: (listing_id) => dispatch(meListingActions.get(listing_id)),
        onUpdate: (listing_id, listing) => dispatch(stepListingActions.updateComforts(listing_id, listing)),
        onFieldChanged: (fieldName, newValue) => dispatch(meListingActions.meListingFieldChanged(fieldName, newValue)),
        onInvalidFormSubmitted: (entity, errors) => dispatch(meListingActions.meListingInvalidFormSubmitted(entity, errors))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comforts);