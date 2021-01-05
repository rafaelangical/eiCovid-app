import React, { useState } from 'react';
import { Image, Dimensions, View } from 'react-native';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import Button from '../../../components/Button';
import { Link } from "react-router-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Notification from '../../../components/Notification';

const screenWidth = Dimensions.get("window").width;

const fetchFonts = () => {
  return Font.loadAsync({
  'roboto-bold': require('../../../../assets/fonts/Roboto-Bold.ttf'),
  'roboto-italic': require('../../../../assets/fonts/Roboto-Italic.ttf'),
  'roboto-regular': require('../../../../assets/fonts/Roboto-Regular.ttf'),
  'bangers-regular': require('../../../../assets/fonts/Bangers-Regular.ttf'),
  'indie-flower': require('../../../../assets/fonts/IndieFlower-Regular.ttf'),
  'raleway-regular': require('../../../../assets/fonts/Raleway-Regular.ttf')
  });
};

const data = [
    {
      name: "Crianças",
      cases: 123,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Adolescentes",
      cases: 280,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Adultos",
      cases: 527,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Idosos",
      cases: 83,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
];

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5
  };

const Wrapper = styled.ScrollView`
    flex-direction: column;
    background-color: #FFB9A6;
    width: 100%;
    padding-bottom: 0;
`;

const Title = styled.Text`
    font-size: 63px;
    letter-spacing: 8px;
    margin: 0 auto;
    margin-top: 30px;
    font-family: bangers-regular;
    color: #FFF;
`;

const TextHelp = styled.Text`
    color: #000;
    width: 90%;
    flex-wrap: wrap;
    margin: 0 auto;
    font-size: 24px;
    margin-top: 30px;
    font-family: raleway-regular;
`;

const Paragraphs = styled(TextHelp)`
    font-size: 30px;
    color: darkblue;
    font-family: indie-flower;
`;

const Logo = styled(Image)`
    flex: 1;
    width: 100%;
    height: 200px;
    margin: 0 auto;
`;

const ImageSintoma = styled(Image)`
    width: 100%;
    max-height: 200px;
    margin: 0 auto;
    margin-top: 15px;
`;

const ViewImagePrevencao = styled.ScrollView`
    max-height: 300px;
    margin-top: 20px;
`;

const ImagePrevencao = styled.Image`
    margin: 20px;
`;

const SpanBold = styled(TextHelp)`
  font-family: roboto-bold;
`; 
const sintomas = [
    {   
        name: 'Febre',
        image: require('../../../../assets/febre.png')
    },
    {   
        name: 'Tosse',
        image: require('../../../../assets/tosse.png')
    },
    {   
        name: 'Cansaço',
        image: require('../../../../assets/cansaco.png')
    },
    {   
        name: 'Dificuldade para respirar (em casos graves)',
        image: require('../../../../assets/falta.png')
    }
];

export default function Home() {

    const history = useHistory();

    const [dataLoaded, setDataLoaded] = useState(false);
    if(!dataLoaded) {
        return(
            <AppLoading 
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
            />
        )
    }

    async function navigateToAutoAvaliacao() {
        history.push("/autoavaliacao");
    }

    async function navigateToComplaint() {
        console.log('Complaint')
        history.push('/complaint');
    }

    return (
        <View style={{flex: 1, backgroundColor: 'red'}}>
            <Wrapper contentContainerStyle={{paddingBottom: 0, flexGrow: 1}}>
            <Logo source={require('../../../../assets/coronavirus-1.png')} style={{ flex: 1 }} />
            <Title>BYE-Covid</Title>
            <TextHelp>
                Seja bem vindo, por aqui temos informações gerais sobre <Paragraphs>covid-19</Paragraphs>, conhecido popularmente como <Paragraphs>coronavirus</Paragraphs>.
            </TextHelp>
            <TextHelp>
                O covid-19 também conhecido como coronavirus é uma doença que surgiu na china e vem se alastrando pelo mundo.
            </TextHelp>
            <TextHelp>
                É possível estar com a <Paragraphs>covid-19</Paragraphs> por até 14 dias antes de apresentar os sintomas, que são <SpanBold>febre, cansaço e tosse seca</SpanBold>. A maioria das pessoas (cerca de 80%) se recupera da doença sem a necessidade de tratamentos especiais.
            </TextHelp>
            <TextHelp>
                <SpanBold>Em casos mais raros, ela pode ser grave e até fatal. Idosos e pessoas com outras condições médicas (como asma, diabetes e doenças cardíacas) são mais vulneráveis a quadros sérios.</SpanBold>
            </TextHelp>
            <TextHelp>Conforme recomendações do governo alguns <SpanBold>estabelecimentos</SpanBold> devem estar fechados, com excessão dos principais como bancos, comercios, etc.</TextHelp>
            <TextHelp>Caso saiba de algum <SpanBold>estabelecimento </SpanBold>que esteja agindo de forma incorreta, por favor nos avisse na opção <SpanBold>denuncia no menu abaixo</SpanBold>.</TextHelp>
            <TextHelp>Não se preocupe é tudo de forma anônima.</TextHelp>
            <SpanBold>utilize o menu abaixo para navegar entre as demais seções do app.</SpanBold>
            <Paragraphs>Fique em casa !</Paragraphs>
            {/* <Notification /> */}
            </Wrapper>
        </View>
    );
}