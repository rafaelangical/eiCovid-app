import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as Font from 'expo-font';
import Notification from '../../../components/Notification';

const Wrapper = styled.ScrollView`
  flex-direction: column;
  background-color: #ffb9a6;
  width: 100%;
  padding-bottom: 0;
`;

const Title = styled.Text`
  font-size: 63px;
  letter-spacing: 8px;
  margin: 0 auto;
  margin-top: 30px;
  font-family: bangers-regular;
  color: #fff;
`;

const TextHelp = styled.Text`
  color: #000;
  width: 90%;
  flex-wrap: wrap;
  margin: 0 auto;
  font-size: 24px;
  margin-top: 30px;
  font-family: raleway-regular;
  text-align: justify;
`;

const Paragraphs = styled(TextHelp)`
  font-size: 30px;
  color: darkblue;
  font-family: indie-flower;
  text-align: justify;
`;

const Logo = styled(Image)`
  flex: 1;
  width: 100%;
  height: 200px;
  margin: 0 auto;
`;

const SpanBold = styled(TextHelp)`
  font-family: roboto-bold;
`;

const Home = () => {
  useEffect(() => {
    const getFonts = async () => {
      await Font.loadAsync({
        'roboto-bold': require('../../../../assets/fonts/Roboto-Bold.ttf'),
        'roboto-italic': require('../../../../assets/fonts/Roboto-Italic.ttf'),
        'roboto-regular': require('../../../../assets/fonts/Roboto-Regular.ttf'),
        'bangers-regular': require('../../../../assets/fonts/Bangers-Regular.ttf'),
        'indie-flower': require('../../../../assets/fonts/IndieFlower-Regular.ttf'),
        'raleway-regular': require('../../../../assets/fonts/Raleway-Regular.ttf'),
      });
      return fonts;
    };
    getFonts();
  }, []);
  const history = useHistory();

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Wrapper contentContainerStyle={{ paddingBottom: 0, flexGrow: 1 }}>
        <Logo
          source={require('../../../../assets/coronavirus-1.png')}
          style={{ flex: 1 }}
        />
        <Title>BYE-Covid</Title>
        <TextHelp>
          Seja bem vindo, por aqui temos informações gerais sobre{' '}
          <Paragraphs>covid-19</Paragraphs>, conhecido popularmente como{' '}
          <Paragraphs>coronavirus</Paragraphs>.
        </TextHelp>
        <TextHelp>
          O covid-19 também conhecido como coronavirus é uma doença que surgiu
          na china e vem se alastrando pelo mundo.
        </TextHelp>
        <TextHelp>
          É possível estar com a <Paragraphs>covid-19</Paragraphs> por até 14
          dias antes de apresentar os sintomas, que são{' '}
          <SpanBold>febre, cansaço e tosse seca</SpanBold>. A maioria das
          pessoas (cerca de 80%) se recupera da doença sem a necessidade de
          tratamentos especiais.
        </TextHelp>
        <TextHelp>
          <SpanBold>
            Em casos mais raros, ela pode ser grave e até fatal. Idosos e
            pessoas com outras condições médicas (como asma, diabetes e doenças
            cardíacas) são mais vulneráveis a quadros sérios.
          </SpanBold>
        </TextHelp>
        <TextHelp>
          Conforme recomendações do governo alguns{' '}
          <SpanBold>estabelecimentos</SpanBold> devem estar fechados, com
          excessão dos principais como bancos, comercios, etc.
        </TextHelp>
        <TextHelp>
          Caso saiba de algum <SpanBold>estabelecimento </SpanBold>que esteja
          agindo de forma incorreta, por favor nos avisse na opção{' '}
          <SpanBold>denuncia no menu abaixo</SpanBold>.
        </TextHelp>
        <TextHelp>Não se preocupe é tudo de forma anônima.</TextHelp>
        <SpanBold>
          utilize o menu abaixo para navegar entre as demais seções do app.
        </SpanBold>
        <Paragraphs>Fique em casa !</Paragraphs>
        {/* <Notification /> */}
      </Wrapper>
    </View>
  );
};

export default Home;
