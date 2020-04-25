import React, { useState } from 'react';
import { Image, Dimensions, View } from 'react-native';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import Button from '../components/Button';
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
import Notification from '../components/Notification';

const screenWidth = Dimensions.get("window").width;

const fetchFonts = () => {
  return Font.loadAsync({
  'roboto-bold': require('../../assets/fonts/Roboto-Bold.ttf'),
  'roboto-italic': require('../../assets/fonts/Roboto-Italic.ttf'),
  'roboto-regular': require('../../assets/fonts/Roboto-Regular.ttf'),
  'bangers-regular': require('../../assets/fonts/Bangers-Regular.ttf'),
  'indie-flower': require('../../assets/fonts/IndieFlower-Regular.ttf'),
  'raleway-regular': require('../../assets/fonts/Raleway-Regular.ttf')
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
    margin-top: 50px;
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
const sintomas = [
    {   
        name: 'Febre',
        image: require('../../assets/febre.png')
    },
    {   
        name: 'Tosse',
        image: require('../../assets/tosse.png')
    },
    {   
        name: 'Cansaço',
        image: require('../../assets/cansaco.png')
    },
    {   
        name: 'Dificuldade para respirar (em casos graves)',
        image: require('../../assets/falta.png')
    }
];

export default function Main() {

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
            <Logo source={require('../../assets/coronavirus-1.png')} style={{ flex: 1 }} />
            <Title>BYE-Covid</Title>
            <TextHelp>
                Informações sobre covid-19 inclusive auto avaliação.
            </TextHelp>
            <Paragraphs>O que você deseja ?</Paragraphs>
            <Button message="Fazer uma auto avaliação" primary={true} onPress={() => navigateToAutoAvaliacao()} />
            <TextHelp>Conforme recomendações do governo alguns estabelecimentos devem estar fechados, com excessão dos principais como bancos, comercios, etc.</TextHelp>
            <TextHelp>Caso saiba de algum estabelecimento que esteja agindo de forma incorreta, por favor nos avisse.</TextHelp>
            <TextHelp>Não se preocupe é tudo de forma anônima.</TextHelp>
            <Button message="Realizar uma denuncia" primary={true} onPress={() => navigateToComplaint()}/>
            <TextHelp>
                O covid-19 também conhecido como coronavirus é uma doença que surgiu na china e vem se alastrando pelo mundo.
            </TextHelp>
            <TextHelp>
                É possível estar com a COVID-19 por até 14 dias antes de apresentar os sintomas, que são febre, cansaço e tosse seca. A maioria das pessoas (cerca de 80%) se recupera da doença sem a necessidade de tratamentos especiais.
            </TextHelp>
            <TextHelp>
                Em casos mais raros, ela pode ser grave e até fatal. Idosos e pessoas com outras condições médicas (como asma, diabetes e doença cardíaca) são mais vulneráveis a quadros sérios.
            </TextHelp>
            <Paragraphs>Possíveis sintomas:</Paragraphs>
            {sintomas.map(item => (
                    <View style={{flex: 1, height: 270}}>
                        <TextHelp>{item.name}</TextHelp>
                        <ImageSintoma source={item.image} style={{width: 200}}/>
                    </View>
                )
            )}
            <Paragraphs>Diagnóstico</Paragraphs>
            <TextHelp>
                O diagnóstico do coronavírus é feito com a coleta de materiais respiratórios (aspiração de vias aéreas ou indução de escarro). Na suspeita de coronavírus, é necessária a coleta de uma amostra, que será encaminhada com urgência para o Laboratório Central de Saúde Pública (Lacen).
            </TextHelp>
            <TextHelp>
                Para confirmar a doença, é necessário realizar exames de biologia molecular que detecte o RNA viral. O diagnóstico do coronavírus é feito com a coleta de amostra, que está indicada sempre que ocorrer a identificação de caso suspeito.
            </TextHelp>
            <TextHelp>
                Os casos graves devem ser encaminhados a um Hospital de Referência para isolamento e tratamento.
            </TextHelp>
            
            <Paragraphs>Prevenção</Paragraphs>
            <TextHelp>
                Para combater que a pandemia se plolifere mais ainda todos nós devemos fazer nossa parte.
            </TextHelp>
            <ViewImagePrevencao horizontal={true}>
                <ImagePrevencao source={require('../../assets/prevencao.png')} />
            </ViewImagePrevencao>
            <TextHelp>
                Se você chegou até aqui é porque já sabe dos riscos, formas de combates e sintomas causados pelo novo covid-19. 
            </TextHelp>
            <TextHelp>Caso não, pode saber mais sobre usando as opções abaixo:</TextHelp>
            <Button message="Sintomas"/>
            <Button message="Recomendações"/>
            <Paragraphs>Estatisticas de uso do app</Paragraphs>
            <PieChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor="cases"
                backgroundColor="transparent"
                paddingLeft="15"
            />
            <Notification />
            </Wrapper>
        </View>
    );
}