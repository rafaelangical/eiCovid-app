import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { View, Picker, CheckBox, ScrollView, Text, Dimensions, Linking } from 'react-native';
import Input from '../components/Input';
import { Ionicons } from '@expo/vector-icons';
import { useHistory } from 'react-router-dom';

const { width, height } =  Dimensions.get('window');

const Wrapper = styled.View`
    flex: 1;
    background-color: #8D9FAD;
    align-items: center;
    justify-content: space-around;
`;

const WrapperIcons = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

const Divider = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 40px;
`;

const Title = styled.Text`
    width: 95%;
    font-size: 48px;
    letter-spacing: 15px;
    margin: 0 auto;
    font-family: roboto-bold;
    color: #FFF;
`;

const TitleSteps = styled(Title)`
    font-size: 40px;
    letter-spacing: 2px;
`;

const TextHelp = styled.Text`
    color: #000;
    width: 90%;
    flex-wrap: wrap;
    margin: 0 auto;
    font-size: 30px;
    margin-top: 30px;
    font-family: raleway-regular;
`;

const TextHelpSteps = styled(TextHelp)`
    width: 90%;
    margin: 10px;
    font-size: 24px;
    color: #002F5C;
    font-family: roboto-bold;
`;

const Paragraphs = styled(TextHelp)`
    font-size: 30px;
    color: darkblue;
    flex-wrap: wrap;
    font-family: indie-flower;
`;

const ArrowBack = styled.TouchableOpacity`
    width: 100px;
    height: 70px;
    position: absolute;
    left: 15;
    top: 40;
    margin-bottom: 15px;
`;

const DividerSteps = styled(Divider)`
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 15px;
`;

const Span = styled(TextHelpSteps)`
    background-color: wheat;
    margin: 0 auto;
`;

const TextCheckbox = styled.Text`
    margin-left: 15px;
    font-size: 20px;
    color: darkblue;
`;

const ScrollWithHeight = height < 600 ?
    styled.ScrollView`
        flex: 1;
        background-color: #8D9FAD;
    ` : styled.View`
        flex: 1;
        background-color: #8D9FAD;
    `;

const TextHelpStepsCheckBox = styled(TextHelpSteps)`
    color: white;
    font-family: roboto-italic;    
`;
export default function AutoAvaliacao() {

    const history = useHistory();

    const [step1, setStep1] = useState(false);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [step4, setStep4] = useState(false);
    const [stepInit, setStepInit] = useState(true);
    const [febre, setFebre] = useState(null);
    const [tosse, setTosse] = useState(null);
    const [garganta, setGarganta] = useState(null);
    const [faltaDeAr, setFaltaDeAr] = useState(null);
    const [result, setResult] = useState(null);

    function initSteps() {
        setStepInit(false);
        setStep1(true);
    }

    function setToSecondStep() {
        setStep1(false);
        setStep2(true);
    }

    function setThreeStep() {
        setStep2(false);
        setStep3(true);
    }

    function setToStep4() {
        setStep3(false);
        setStep4(true);
        if(febre && tosse && faltaDeAr && garganta || febre && tosse && faltaDeAr){
            setResult('Positivo')
        }else if(febre && tosse && faltaDeAr || febre && tosse || febre && faltaDeAr || faltaDeAr && tosse){
            setResult('Talvez')
        }else {
            setResult('Negativo')
        }

    }

    function returnInitialStep() {
        setStepInit(true)
        setStep1(false)
        setStep2(false)
        setStep3(false)
        setStep4(false)
    }

    function returnFirstStep() {
        setStepInit(false)
        setStep1(true)
        setStep2(false)
        setStep3(false)
        setStep4(false)
    }

    function returnSecondStep() {
        setStepInit(false)
        setStep1(false)
        setStep2(true)
        setStep3(false)
        setStep4(false)
    }

    function returnThreeStep() {
        setStepInit(false)
        setStep1(false)
        setStep2(false)
        setStep3(true)
        setStep4(false)
    }

    return(
        <Fragment>
            {stepInit && (
                <ScrollWithHeight contentContainerStyle={{justifyContent: 'space-around', paddingBottom: 50}}>
                    <ArrowBack onPress={() => history.goBack()}>
                        <Ionicons name="ios-arrow-back" size={40} color="black" />
                    </ArrowBack>
                    <Divider style={{marginTop: 100}}>
                        <Title>Olá,</Title>
                        <Title>tudo</Title>
                        <Title>bem ?</Title>
                    </Divider>
                    <TextHelp style={{marginBottom: 30}}>Seja bem vindo(a) a nossa auto avaliação, onde você responde algumas perguntinhas e sai com um breve diagnóstico sobre o coronavirus</TextHelp>
                    <Button message='Vamos lá' onPress={() => initSteps()} style={{marginBottom: 50}}/>
                </ScrollWithHeight>
            )}
            {step1 && (
                    <ScrollWithHeight contentContainerStyle={{justifyContent: 'space-around', paddingBottom: 50}}>
                        <ArrowBack onPress={() => returnInitialStep()}>
                            <Ionicons name="ios-arrow-back" size={40} color="black" />
                        </ArrowBack>
                        <Divider style={{marginTop: 100}}>
                            <TitleSteps>Vamos lá</TitleSteps>
                            <TitleSteps>1/3</TitleSteps>
                        </Divider>
                        <Divider>
                            <TextHelpSteps>Para iniciar precisamos de algumas iformações pessoais.</TextHelpSteps>
                        </Divider>
                        <Divider>
                            <Input placeHolder="Nome completo" primary={true} color="red"/>
                            <Input placeHolder="Telefone" />
                            <Input placeHolder="CEP" />
                            <Input placeHolder="Idade" />
                        </Divider>
                        <Button message='Proximo' onPress={() => setToSecondStep()}/>
                    </ScrollWithHeight>
            ) }
            {step2 && (
                    <ScrollWithHeight style={{flex: 1, backgroundColor: '#8D9FAD'}} contentContainerStyle={{justifyContent: 'space-around', paddingBottom: 50}}>
                        <ArrowBack onPress={() => returnFirstStep()}>
                            <Ionicons name="ios-arrow-back" size={40} color="black" />
                        </ArrowBack>
                        <Divider style={{marginTop: 100}}>
                            <TitleSteps>2/3</TitleSteps>
                        </Divider>
                        <Divider style={{marginTop: 5}}>
                            <TextHelpSteps>Nos informe se está com algum desses sintomas.</TextHelpSteps>
                        </Divider>
                        <Divider style={{marginTop: 5}}>
                            <DividerSteps>
                                <TextHelpStepsCheckBox>Você está sentindo febre ou sentiu recentemente ?</TextHelpStepsCheckBox>
                                <TextCheckbox>Sim</TextCheckbox>
                                <CheckBox checked={febre === true ? true :  false} onChange={() => setFebre(!febre)} value={febre}/>
                                <TextCheckbox>Não</TextCheckbox>
                                <CheckBox onChange={() => setFebre(!febre)} checked={febre === false ? true : false} value={!febre}/>
                            </DividerSteps>
                            <DividerSteps>
                                <TextHelpStepsCheckBox>Você se sente falta de ar ou sentiu recentemente ?</TextHelpStepsCheckBox>
                                <TextCheckbox>Sim</TextCheckbox>
                                <CheckBox checked={faltaDeAr === true ? true :  false} onChange={() => setFaltaDeAr(!faltaDeAr)} value={faltaDeAr}/>
                                <TextCheckbox>Não</TextCheckbox>
                                <CheckBox onChange={() => setFaltaDeAr(!faltaDeAr)} checked={faltaDeAr === false ? true : false} value={!faltaDeAr}/>
                            </DividerSteps>
                            <DividerSteps>
                                <TextHelpStepsCheckBox>Você está tossindo constantemente ?</TextHelpStepsCheckBox>
                                <TextCheckbox>Sim</TextCheckbox>
                                <CheckBox checked={tosse === true ? true :  false} onChange={() => setTosse(!tosse)} value={tosse}/>
                                <TextCheckbox>Não</TextCheckbox>
                                <CheckBox onChange={() => setTosse(!tosse)} checked={tosse === false ? true : false} value={!tosse}/>
                            </DividerSteps>
                            <DividerSteps>
                                <TextHelpStepsCheckBox>Você esta ou vem sentindo dor de gargante frequentemente ?</TextHelpStepsCheckBox>
                                <TextCheckbox>Sim</TextCheckbox>
                                <CheckBox checked={garganta === true ? true :  false} onChange={() => setGarganta(!garganta)} value={garganta}/>
                                <TextCheckbox>Não</TextCheckbox>
                                <CheckBox onChange={() => setGarganta(!garganta)} checked={garganta === false ? true : false} value={!garganta}/>
                            </DividerSteps>
                        </Divider>
                        <Divider style={{marginTop: 50}}>
                            <Button message='Próximo' onPress={() => setThreeStep()} style={{marginTop: 50}}/>
                        </Divider>
                    </ScrollWithHeight>
            ) }
            {step3 && (
                <Wrapper>
                    <ArrowBack onPress={() => returnSecondStep()}>
                        <Ionicons name="ios-arrow-back" size={40} color="black" />
                    </ArrowBack>
                    <Divider>
                        <TitleSteps>3/3</TitleSteps>
                        <TextHelpSteps>Nos informe se está com algum desses sintomas.</TextHelpSteps>
                    </Divider>
                    <Button message='Finalizar' onPress={() => setToStep4(true)}/>
                </Wrapper>
            ) }
            {step4 && (
                <ScrollWithHeight contentContainerStyle={{marginBottom: 50}}>
                    {result && result === 'Negativo' && (
                        <WrapperIcons>
                            <ArrowBack onPress={() => returnThreeStep()}>
                                <Ionicons name="ios-arrow-back" size={40} color="black" />
                            </ArrowBack>
                            <Divider>
                                <Ionicons name="md-checkmark-circle" size={150} color="green" />
                            </Divider>
                            <Divider>
                                <TextHelpSteps>Você está bem, não se preocupe !</TextHelpSteps>
                                <TextHelpSteps>Recomendamos a você que selecione siga as opções abaixo, a fim de uma melhor prevenção à você e ao coronavirus. </TextHelpSteps>
                            </Divider>
                            <Divider style={{ marginBottom: 50}}>
                                <Button message='Formas de combate' />
                                <Button message='Recomendações' />
                                <Button message='Sintomas' />
                                <Button message='Retornar ao inicio' onPress={() => setThreeStep()} onPress={() => history.push('/')}/>
                            </Divider>
                        </WrapperIcons>
                    )}
                    {result && result === 'Talvez' && (
                        <WrapperIcons>
                            <ArrowBack onPress={() => returnThreeStep()}>
                                <Ionicons name="ios-arrow-back" size={40} color="black" />
                            </ArrowBack>
                            <Divider>
                                <Ionicons name="md-sad" size={150} color="yellow" />
                            </Divider>
                            <Divider>
                                <TextHelpSteps>Recomendamos que siga uma das opções abaixo!</TextHelpSteps>
                                <TextHelpSteps>A fim de uma melhor prevenção à você e ao coronavirus. </TextHelpSteps>
                            </Divider>
                            <Divider style={{ marginBottom: 50}}>
                                <Button message='Formas de combate' />
                                <Button message='Recomendações' />
                                <Button message='Sintomas' />
                                <Button message='Retornar ao inicio' onPress={() => setThreeStep()} onPress={() => history.push('/')}/>
                            </Divider>
                        </WrapperIcons>
                    )}
                    {result && result === 'Positivo' && (
                        <WrapperIcons>
                            <ArrowBack onPress={() => returnThreeStep()}>
                                <Ionicons name="ios-arrow-back" size={40} color="black" />
                            </ArrowBack>
                            <Divider>
                                <Ionicons name="md-warning" size={150} color="red" />
                            </Divider>
                            <Divider>
                                <TextHelpSteps>Você deve ir o mair rápido possivel a um hospital !</TextHelpSteps>
                                <TextHelpSteps>Recomendamos a você que selecione siga as opções abaixo, a fim de uma melhor prevenção à você e ao coronavirus. </TextHelpSteps>
                            </Divider>
                            <Divider style={{ marginBottom: 50}}>
                                <Button message='Ligar para Samu' onPress={()=>{Linking.openURL('tel:190');}} />
                                <Button message='Ligar para OMS' onPress={()=>{Linking.openURL('tel:132');}} />
                                <Button message='Hospital mais próximo' />
                                <Button message='Retornar ao inicio' onPress={() => setThreeStep()} onPress={() => history.push('/')}/>
                            </Divider>
                        </WrapperIcons>
                    )}
                </ScrollWithHeight>
            ) }
        </Fragment>
    )
}