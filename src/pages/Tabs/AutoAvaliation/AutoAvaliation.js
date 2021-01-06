import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Button';
import {
  Picker,
  CheckBox,
  ScrollView,
  Text,
  Dimensions,
  Linking,
  TextInput,
} from 'react-native';
import Input from '../../../components/Input';
import { Ionicons } from '@expo/vector-icons';
import { useHistory } from 'react-router-dom';

const { width, height } = Dimensions.get('window');

const Wrapper = styled.View`
  flex: 1;
  background-color: #8d9fad;
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
  align-items: center;
  margin: 0 auto;
`;

const Title = styled.Text`
  width: 90%;
  font-size: 30px;
  letter-spacing: 1px;
  margin: 0 auto;
  margin-top: 80px;
  font-family: roboto-bold;
  color: #fff;
  flex-wrap: wrap;
`;

const TitleSteps = styled(Title)`
  font-size: 40px;
  letter-spacing: 2px;
  margin-top: 40px;
`;

const TextHelp = styled.Text`
  color: #000;
  width: 90%;
  flex-wrap: wrap;
  margin: 0 auto;
  font-size: 25px;
  margin-top: 30px;
  font-family: raleway-regular;
  text-align: justify;
`;

const TextHelpSteps = styled(TextHelp)`
  width: 90%;
  margin: 10px;
  font-size: 24px;
  color: #002f5c;
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

const TextCheckbox = styled.Text`
  margin-left: 10px;
  font-size: 20px;
  color: darkblue;
`;

const ScrollWithHeight = styled.View`
  flex: 1;
  background-color: #8d9fad;
`;

const TextHelpStepsCheckBox = styled(TextHelpSteps)`
  color: white;
  font-family: roboto-italic;
  margin-top: 15px;
`;

const LogoMain = styled.Image`
  width: 90%;
  height: 200px;
  margin: 0 auto;
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

  const initSteps = () => {
    setStepInit(false);
    setStep1(true);
  };

  const setToSecondStep = () => {
    setStep1(false);
    setStep2(true);
  };

  const setThreeStep = () => {
    setStep2(false);
    setStep3(true);
    if (
      (febre && tosse && faltaDeAr && garganta) ||
      (febre && tosse && faltaDeAr)
    ) {
      setResult('Positivo');
    } else if (
      (febre && tosse && faltaDeAr) ||
      (febre && tosse) ||
      (febre && faltaDeAr) ||
      (faltaDeAr && tosse)
    ) {
      setResult('Talvez');
    } else {
      setResult('Negativo');
    }
  };

  const returnInitialStep = () => {
    setStepInit(true);
    setStep1(false);
    setStep2(false);
    setStep3(false);
    setStep4(false);
  };

  const returnFirstStep = () => {
    setStepInit(false);
    setStep1(true);
    setStep2(false);
    setStep3(false);
    setStep4(false);
  };

  return (
    <Fragment>
      {stepInit && (
        <ScrollWithHeight>
          {/* <ArrowBack onPress={() => history.goBack()}>
                        <Ionicons name="ios-arrow-back" size={40} color="black" />
                    </ArrowBack> */}
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{
              justifyContent: 'space-around',
              paddingBottom: 50,
            }}
          >
            <Divider style={{ flex: 1.5, marginTop: 50 }}>
              <Title>Avaliação ⚕️</Title>
            </Divider>
            <Divider style={{ flex: 4, marginTop: 50 }}>
              <LogoMain source={require('../../../../assets/feira.png')} />
              <TextHelp>
                Seja bem vindo(a) a nossa auto avaliação, onde você responde
                algumas perguntinhas e sai com um breve diagnóstico sobre os
                sintomas que venha a sentir do novo coronavirus.
              </TextHelp>
            </Divider>
            <Divider style={{ flex: 2, marginTop: 50 }}>
              <Button
                message="Vamos lá"
                onPress={() => initSteps()}
                style={{ marginBottom: 50 }}
              />
            </Divider>
          </ScrollView>
        </ScrollWithHeight>
      )}
      {step1 && (
        <ScrollWithHeight>
          <Divider style={{ flex: 4.5 }}>
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={{
                justifyContent: 'space-around',
                paddingBottom: 50,
              }}
            >
              <ArrowBack onPress={returnInitialStep}>
                <Ionicons name="ios-arrow-back" size={40} color="black" />
              </ArrowBack>
              <Divider style={{ flex: 1, marginTop: 50 }}>
                <Title>1/3</Title>
              </Divider>
              <Divider style={{ flex: 1 }}>
                <TitleSteps>Dados pessoais</TitleSteps>
                <TextHelpSteps>
                  Obs: dados pessoais são opcionais. 🙂
                </TextHelpSteps>
              </Divider>
              <Divider style={{ flex: 3 }}>
                <Input
                  placeHolder="Nome (opcional)"
                  primary={true}
                  color="red"
                  lengthValidade={20}
                />
                <Input placeHolder="Telefone (opcional)" lengthValidade={9} />
                <Input placeHolder="CEP (opcional)" lengthValidade={9} />
                <Input placeHolder="Idade (opcional)" lengthValidade={3} />
              </Divider>
              <Divider style={{ flex: 1, marginTop: 50 }}>
                <Button message="Próximo" onPress={setToSecondStep} />
              </Divider>
            </ScrollView>
          </Divider>
        </ScrollWithHeight>
      )}
      {step2 && (
        <ScrollWithHeight>
          {/* <ScrollView style={{flex: 1, backgroundColor: '#8D9FAD'}} contentContainerStyle={{justifyContent: 'space-around', paddingBottom: 50}}> */}

          <ScrollView
            style={{ flex: 4 }}
            contentContainerStyle={{
              justifyContent: 'space-around',
              paddingBottom: 50,
            }}
          >
            <ArrowBack onPress={returnFirstStep}>
              <Ionicons name="ios-arrow-back" size={40} color="black" />
            </ArrowBack>
            <Divider style={{ flex: 1, marginTop: 50 }}>
              <Title>2/3</Title>
            </Divider>
            <Divider style={{ flex: 1 }}>
              <TextHelpSteps>
                Está sentindo algum desses sintomas ?
              </TextHelpSteps>
            </Divider>
            <Divider style={{ flex: 5 }}>
              <DividerSteps>
                <TextHelpStepsCheckBox>Febre</TextHelpStepsCheckBox>
                <TextCheckbox>Sim</TextCheckbox>
                <CheckBox
                  checked={febre === true ? true : false}
                  onChange={() => setFebre(!febre)}
                  value={febre}
                />
                <TextCheckbox>Não</TextCheckbox>
                <CheckBox
                  onChange={() => setFebre(!febre)}
                  checked={febre === false ? true : false}
                  value={!febre}
                />
              </DividerSteps>

              <DividerSteps>
                <TextHelpStepsCheckBox>Dor de cabeça</TextHelpStepsCheckBox>
                <TextCheckbox>Sim</TextCheckbox>
                <CheckBox
                  checked={febre === true ? true : false}
                  onChange={() => setFebre(!febre)}
                  value={febre}
                />
                <TextCheckbox>Não</TextCheckbox>
                <CheckBox
                  onChange={() => setFebre(!febre)}
                  checked={febre === false ? true : false}
                  value={!febre}
                />
              </DividerSteps>
              <DividerSteps>
                <TextHelpStepsCheckBox>
                  Dificuldade de respirar ou falta de ar
                </TextHelpStepsCheckBox>
                <TextCheckbox>Sim</TextCheckbox>
                <CheckBox
                  checked={faltaDeAr === true ? true : false}
                  onChange={() => setFaltaDeAr(!faltaDeAr)}
                  value={faltaDeAr}
                />
                <TextCheckbox>Não</TextCheckbox>
                <CheckBox
                  onChange={() => setFaltaDeAr(!faltaDeAr)}
                  checked={faltaDeAr === false ? true : false}
                  value={!faltaDeAr}
                />
              </DividerSteps>
              <DividerSteps>
                <TextHelpStepsCheckBox>Tosse</TextHelpStepsCheckBox>
                <TextCheckbox>Sim</TextCheckbox>
                <CheckBox
                  checked={tosse === true ? true : false}
                  onChange={() => setTosse(!tosse)}
                  value={tosse}
                />
                <TextCheckbox>Não</TextCheckbox>
                <CheckBox
                  onChange={() => setTosse(!tosse)}
                  checked={tosse === false ? true : false}
                  value={!tosse}
                />
              </DividerSteps>
              <DividerSteps>
                <TextHelpStepsCheckBox>Dor de garganta</TextHelpStepsCheckBox>
                <TextCheckbox>Sim</TextCheckbox>
                <CheckBox
                  checked={garganta === true ? true : false}
                  onChange={() => setGarganta(!garganta)}
                  value={garganta}
                />
                <TextCheckbox>Não</TextCheckbox>
                <CheckBox
                  onChange={() => setGarganta(!garganta)}
                  checked={garganta === false ? true : false}
                  value={!garganta}
                />
              </DividerSteps>
              <DividerSteps>
                <TextHelpStepsCheckBox>Cansaço</TextHelpStepsCheckBox>
                <TextCheckbox>Sim</TextCheckbox>
                <CheckBox
                  checked={garganta === true ? true : false}
                  onChange={() => setGarganta(!garganta)}
                  value={garganta}
                />
                <TextCheckbox>Não</TextCheckbox>
                <CheckBox
                  onChange={() => setGarganta(!garganta)}
                  checked={garganta === false ? true : false}
                  value={!garganta}
                />
              </DividerSteps>

              <DividerSteps>
                <TextHelpStepsCheckBox>
                  Dores e desconfortos
                </TextHelpStepsCheckBox>
                <TextCheckbox>Sim</TextCheckbox>
                <CheckBox
                  checked={garganta === true ? true : false}
                  onChange={() => setGarganta(!garganta)}
                  value={garganta}
                />
                <TextCheckbox>Não</TextCheckbox>
                <CheckBox
                  onChange={() => setGarganta(!garganta)}
                  checked={garganta === false ? true : false}
                  value={!garganta}
                />
              </DividerSteps>

              <DividerSteps>
                <TextHelpStepsCheckBox>Diarreia</TextHelpStepsCheckBox>
                <TextCheckbox>Sim</TextCheckbox>
                <CheckBox
                  checked={garganta === true ? true : false}
                  onChange={() => setGarganta(!garganta)}
                  value={garganta}
                />
                <TextCheckbox>Não</TextCheckbox>
                <CheckBox
                  onChange={() => setGarganta(!garganta)}
                  checked={garganta === false ? true : false}
                  value={!garganta}
                />
              </DividerSteps>

              <DividerSteps>
                <TextHelpStepsCheckBox>
                  Perda de paladar ou olfato
                </TextHelpStepsCheckBox>
                <TextCheckbox>Sim</TextCheckbox>
                <CheckBox
                  checked={garganta === true ? true : false}
                  onChange={() => setGarganta(!garganta)}
                  value={garganta}
                />
                <TextCheckbox>Não</TextCheckbox>
                <CheckBox
                  onChange={() => setGarganta(!garganta)}
                  checked={garganta === false ? true : false}
                  value={!garganta}
                />
              </DividerSteps>
              <DividerSteps>
                <TextHelpStepsCheckBox>
                  Dor ou pressão no peito
                </TextHelpStepsCheckBox>
                <TextCheckbox>Sim</TextCheckbox>
                <CheckBox
                  checked={garganta === true ? true : false}
                  onChange={() => setGarganta(!garganta)}
                  value={garganta}
                />
                <TextCheckbox>Não</TextCheckbox>
                <CheckBox
                  onChange={() => setGarganta(!garganta)}
                  checked={garganta === false ? true : false}
                  value={!garganta}
                />
              </DividerSteps>
            </Divider>
            <Divider style={{ flex: 1, marginTop: 50 }}>
              <Button
                message="Próximo"
                onPress={() => setThreeStep()}
                style={{ marginTop: 50 }}
              />
            </Divider>
          </ScrollView>
        </ScrollWithHeight>
      )}
      {step3 && (
        <ScrollWithHeight contentContainerStyle={{ marginBottom: 50 }}>
          {result && result === 'Negativo' && (
            <WrapperIcons>
              <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{
                  justifyContent: 'space-between',
                  paddingBottom: 50,
                }}
              >
                <Divider style={{ flex: 1, marginTop: 100 }}>
                  <Ionicons
                    name="md-checkmark-circle"
                    size={150}
                    color="green"
                  />
                </Divider>
                <Divider style={{ flex: 2, marginTop: 50 }}>
                  <TextHelpSteps>
                    Você está bem, não se preocupe !
                  </TextHelpSteps>
                  <TextHelpSteps>
                    Recomendamos a você que selecione a opção a recomendações no
                    menu e siga as recomendações da OMS e fique em casa.
                  </TextHelpSteps>
                </Divider>
                <Divider style={{ flex: 2, marginTop: 50 }}>
                  <Button
                    message="Refazer o teste"
                    onPress={() => returnInitialStep(true)}
                  />
                </Divider>
              </ScrollView>
            </WrapperIcons>
          )}
          {result && result === 'Talvez' && (
            <WrapperIcons>
              <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ marginBottom: 50 }}
              >
                <ArrowBack onPress={returnInitialStep}>
                  <Ionicons name="ios-arrow-back" size={40} color="black" />
                </ArrowBack>
                <Divider style={{ flex: 1, marginTop: 100 }}>
                  <Ionicons name="md-sad" size={150} color="yellow" />
                </Divider>
                <Divider style={{ flex: 2, marginTop: 50 }}>
                  <TextHelpSteps>
                    Você apresenta alguns sintomas, e aparenta suspeitas de
                    covid-19.
                  </TextHelpSteps>
                  <TextHelpSteps>
                    Recomendamos a você que selecione a opção a recomendações no
                    menu e siga as recomendações da OMS e fique em casa.
                  </TextHelpSteps>
                </Divider>
                <Divider style={{ flex: 2, marginTop: 50 }}>
                  <Button
                    message="Refazer o teste"
                    onPress={() => returnInitialStep(true)}
                  />
                </Divider>
              </ScrollView>
            </WrapperIcons>
          )}
          {result && result === 'Positivo' && (
            <WrapperIcons>
              <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ marginBottom: 50 }}
              >
                <ArrowBack onPress={returnInitialStep}>
                  <Ionicons name="ios-arrow-back" size={40} color="black" />
                </ArrowBack>
                <Divider style={{ flex: 3, marginTop: 70 }}>
                  <Ionicons name="md-warning" size={150} color="red" />
                </Divider>
                <Divider style={{ flex: 2 }}>
                  <TextHelpSteps>
                    Você deve ir o mair rápido possivel a um hospital !
                  </TextHelpSteps>
                  <TextHelpSteps>
                    Recomendamos a você que selecione siga as opções abaixo, a
                    fim de uma melhor prevenção à você e ao coronavirus.{' '}
                  </TextHelpSteps>
                </Divider>
                <Divider style={{ marginBottom: 50 }}>
                  <Button
                    message="Ligar para Samu"
                    onPress={() => {
                      Linking.openURL('tel:190');
                    }}
                  />
                  <Button
                    message="Ligar para OMS"
                    onPress={() => {
                      Linking.openURL('tel:132');
                    }}
                  />
                  {/* <Button message='Hospital mais próximo' /> */}
                  <Button
                    message="Refazer teste"
                    onPress={() => returnInitialStep()}
                  />
                </Divider>
              </ScrollView>
            </WrapperIcons>
          )}
        </ScrollWithHeight>
      )}
    </Fragment>
  );
}
