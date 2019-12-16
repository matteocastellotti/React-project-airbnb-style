import React, { Component } from 'react';
import { connect } from 'react-redux';


import PageContainer from '../../../../components/UI/PageContainer/PageContainer';
import Spacing from '../../../../components/UI/Spacing/Spacing';
import Title from '../../../../components/UI/Title/Title';
import Translate from '../../../../components/UI/Translate/Translate';
import StepPanel from './StepPanel';
import Header from '../../../Header/Header';
import Main from '../../../../components/UI/Main/Main';

import { history } from '../../../../store/history';
import { meListingActions } from "../../../../store/actions";

class Step extends Component {

    continueHandler = () => {
        const { listing_id } = this.props.match.params;
        if (this.props.currentValues.step === "STEP_1") {
            if (this.props.currentValues.details.id) {
                history.push('/new-listing/' + listing_id + '/comforts');
            } else if (this.props.currentValues.place.id) {
                history.push('/new-listing/' + listing_id + '/details');
            } else if (this.props.currentValues.type.id) {
                history.push('/new-listing/' + listing_id + '/place');
            } else if (this.props.currentValues.owner.id) {
                history.push('/new-listing/' + listing_id + '/type');
            }
        } else if (this.props.currentValues.step === "STEP_2") {
            if (this.props.currentValues.summary.id) {
                history.push('/new-listing/' + listing_id + '/prices');
            } else if (this.props.currentValues.images.length > 0) {
                history.push('/new-listing/' + listing_id + '/summary');
            } else {
                history.push('/new-listing/' + listing_id + '/images');
            }
        }
    }

    componentDidMount() {
        if (this.props.match.params.listing_id) {
            this.props.onGet(this.props.match.params.listing_id);
        }
    }

    render() {
        let step2 = null;
        if (this.props.currentValues.step !== "STEP_1") {
            step2 = (
                <StepPanel
                    title="Step 2"
                    description="Forza, abbiamo quasi finito."
                    subtitle="Immagini, nome, descrizione e prezzi"
                    width={this.props.currentValues.prices.id ?
                        100 :
                        this.props.currentValues.summary.id ?
                            66 :
                            this.props.currentValues.images.lenght > 0 && 33}
                    complete={this.props.currentValues.step !== "STEP_2"}
                    onPress={this.props.onContinue} />
            )
        }

        return (
            <div>
                <Header
                    sticky={true} />
                <Main
                    stickyHeader={true}>
                    <PageContainer>
                        <Spacing top={4} bottom={10}>
                            <Title size={2}>
                                <Translate labelKey="WHAT_DETAILS_HAVE" />
                            </Title>
                            <StepPanel
                                title="Step 1"
                                description="Comincia con le caratteristiche"
                                subtitle="Tipo, categoria, dettagli e comfort"
                                width={this.props.currentValues.comforts.id ?
                                    100 :
                                    this.props.currentValues.details.id ?
                                        80 :
                                        this.props.currentValues.place.id ?
                                            60 :
                                            this.props.currentValues.type.id ?
                                                40 :
                                                this.props.currentValues.owner.id && 20}
                                complete={this.props.currentValues.step !== "STEP_1"}
                                onPress={this.continueHandler} />
                            {step2}    
                        </Spacing>
                    </PageContainer>
                </Main>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentValues: state.MeListing.toJS().form.currentValues
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGet: (listing_id) => dispatch(meListingActions.get(listing_id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Step);