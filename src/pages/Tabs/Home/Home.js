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
          Seja bem vindo, por aqui abordamos assuntos relacionado a{' '}
          <Paragraphs>covid-19</Paragraphs>, conhecido popularmente como{' '}
          <Paragraphs>coronavirus</Paragraphs>.
        </TextHelp>
        <TextHelp>
          O covid-19 surgiu na china e se espalhou pelo mundo, com milhões de
          casos tem sido umas das piores doenças dos ultimos tempos.
        </TextHelp>
        <TextHelp>
          Por onde passa não escolhe cor, raça ou condição financeira a doença
          já matou centena de milhares de pessoas em todo o mundo.
        </TextHelp>
        <TextHelp>
          Dando uma passadinha na Seção <SpanBold>Estatísticas</SpanBold>{' '}
          mostramos um pouco dos casos de covid-19 no Brasil inclusive a
          quantidade por estado.
        </TextHelp>
        <TextHelp>
          Segundo a Organização Mundial de Saude, é possível estar com a{' '}
          <Paragraphs>covid-19</Paragraphs> por até 14 dias antes de apresentar
          os sintomas, que são{' '}
          <SpanBold>
            febre, cansaço, tosse seca, dificuldade de respirar ou falta de ar,
            dor ou pressão no peito, perda de fala ou movimento, dor de cabeça,
            perda de paladar ou olfato, diarreia, dentre outros menos comuns
          </SpanBold>
          . A maioria das pessoas (cerca de 80%) se recupera da doença sem a
          necessidade de tratamentos especiais.
        </TextHelp>
        <TextHelp>
          Convidamos você a dar uma passadinha na seção{' '}
          <SpanBold>Avaliação</SpanBold> onde fazemos uma breve análise dos
          sintomas que você venha a sentir e lhe damos um pré diagnóstico a
          respeito da covid.
        </TextHelp>
        <TextHelp>
          <SpanBold>
            Em casos mais raros, ela pode ser grave e até fatal. Idosos e
            pessoas com outras condições médicas (como asma, diabetes e doenças
            cardíacas) são mais vulneráveis a quadros sérios.
          </SpanBold>
        </TextHelp>
        <TextHelp>
          Enquanto não se existe uma <SpanBold>forma de tratamento</SpanBold>{' '}
          eficaz para toda a população, a melhor forma de combate é o{' '}
          <SpanBold>distanciamento</SpanBold> e evitar contato com pessoas.
          infectadas. E caso precise sair sempre usar máscasra de proteção e
          sempre higienizar as mãos com álcool em gel. Na seção de{' '}
          <SpanBold>Recomendações </SpanBold>
          temos mais medidas protetivas a fim de evitar o contágio com o vírus.
        </TextHelp>
        <SpanBold>
          Utilize o menu abaixo para navegar entre as demais seções do nosso
          aplicativo.
        </SpanBold>
        <Paragraphs>Lembre-se de ficar em casa !</Paragraphs>
        {/* <Notification /> */}
      </Wrapper>
    </View>
  );
};

export default Home;
