import React, { useState } from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { useHistory } from 'react-router-dom';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
`;
const Scroll = styled.ScrollView`
  flex: 1;
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  flex-direction: column;
`;

const Title = styled.Text`
  width: 88.8%;
  font-size: 48px;
  letter-spacing: 2px;
  font-family: roboto-bold;
  color: darkblue;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const ArrowBack = styled.TouchableOpacity`
  width: 100px;
  height: 70px;
  position: absolute;
  left: 15;
  top: 40;
  margin-bottom: 15px;
`;

const Divider = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 40px;
    margin-bottom: 40px; 
`;

const TextHelpSteps = styled.Text`
    width: 90%;
    margin: 10px;
    margin: 0 auto;
    font-size: 24px;
    color: #002F5C;
    font-family: roboto-regular;
`;

export default function Complaint() {
  const [ error, setError ] = useState(false);

  const history = useHistory();
  const [successPage, setSucessPage] = useState(false);

  async function renderSuccess() {
    if(error) {
      alert('Corriga os erros e tente novamente')
    }else {
      setSucessPage(true);
    }
  }

  return(
    <Wrapper>
      {!successPage ? (
        <>
          {/* <ArrowBack onPress={() => history.goBack()}>
            <Ionicons name="ios-arrow-back" size={40} color="black" />
          </ArrowBack> */}
          <Scroll contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
            <Title>Denúncias</Title>
            <TextHelpSteps>Aqui você pode denunciar de forma anônima os estabelecimentos que não estão cumprindo com as regras estabelecidas pelo governo.</TextHelpSteps>
            <Input placeHolder="Tipo de estabelecimento" lengthValidade={4} />
            <Input placeHolder="Nome do estabelecimento" lengthValidade={5} />
            <Input placeHolder="Data da irregularidade" lengthValidade={20} />
            <Input placeHolder="Endereço do estabelecimento" lengthValidade={10} />
            <Input placeHolder="Numero do estabelecimento, caso haja" lengthValidade={1} />
            <Input placeHolder="Irregulariade" lengthValidade={4} />
            <Divider>
              <Button message="Enviar" onPress={() => renderSuccess()}/>
            </Divider>
          </Scroll>
        </>
      ) : (
        <>
          <ArrowBack onPress={() => setSucessPage(!successPage)}>
            <Ionicons name="ios-arrow-back" size={40} color="black" />
          </ArrowBack>
          <Wrapper>
            <Ionicons name="md-checkmark-circle" size={150} color="green" />
            <Divider>
              <TextHelpSteps>Denuncia realizada com sucesso !</TextHelpSteps>
              <Divider></Divider>
              <TextHelpSteps>Obrigado por nos ajudar no combate contra o coronavirus.</TextHelpSteps>
            </Divider>
          </Wrapper>
        </>
      )}
    </Wrapper>
  )
}