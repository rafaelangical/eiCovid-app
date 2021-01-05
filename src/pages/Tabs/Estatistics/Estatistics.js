import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native'; 
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
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

const dataAcess = {
  labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 100]
    }
  ]
};

const Wrapper = styled.ScrollView`
    flex-direction: column;
    background-color: #FFB9A6;
    width: 100%;
    padding-bottom: 0;
`;

const Divider = styled.View`
  width: 90%;
  height: 250px;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 6px;
  margin: 0 auto;
`;

const Title = styled.Text`
    font-size: 30px;
    letter-spacing: 1px;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 30px;
    font-family: roboto-bold;
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

const TextHelpFirst = styled(TextHelp)`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const SpanBold = styled(TextHelp)`
  font-family: roboto-bold;
  margin: 0 auto;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
`; 
const Paragraphs = styled(TextHelp)`
    font-size: 30px;
    color: darkblue;
    font-family: indie-flower;
    margin: 0 auto;
`;

export default function Estatistics() {
  return (
    <Wrapper>
      <Title>Estatísticas</Title>
      <Divider>
        <SpanBold style={{marginLeft: 100, marginRight: 100}}>Casos no brasil</SpanBold>
        <TextHelpFirst style={{color: 'darkblue'}}>Casos descartados: 50</TextHelpFirst>
        <TextHelpFirst style={{color: '#000'}}>Casos suspeitos: 50</TextHelpFirst>
        <TextHelpFirst style={{color: 'darkgreen'}}>Casos confirmados: 50</TextHelpFirst>
        <TextHelpFirst style={{color: 'red'}}>Mortes: 50</TextHelpFirst>
      </Divider>
      <SpanBold>Uso por idade</SpanBold>
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor="cases"
        backgroundColor="transparent"
        paddingLeft="15"
      />
      <SpanBold>Casos descartados verificados pelo app</SpanBold>
      <BarChart
        // style={{graphStyle: 16, propsForDots: {
        //   r: "6",
        //   strokeWidth: "2",
        //   stroke: "#999"
        // }}}
        style={{
          marginVertical: 20,
          // borderRadius: 16,
          width: '100%',
          backgroundColor: "darkgreen"
        }}
        data={dataAcess}
        width={screenWidth}
        height={300}
        // yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={20}
      />
      <SpanBold>Casos suspeitos verificados pelo app</SpanBold>
      <BarChart
        // style={{graphStyle: 16, propsForDots: {
        //   r: "6",
        //   strokeWidth: "2",
        //   stroke: "#999"
        // }}}
        style={{
          marginVertical: 20,
          backgroundColor: "#999"
        }}
        data={dataAcess}
        width={screenWidth}
        height={300}
        // yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
      <SpanBold>Casos confirmados verificado pelo app</SpanBold>
      <BarChart
        // style={{graphStyle: 16, propsForDots: {
        //   r: "6",
        //   strokeWidth: "2",
        //   stroke: "#999"
        // }}}
        style={{
          marginVertical: 20,
          backgroundColor: "darkred"
        }}
        data={dataAcess}
        width={screenWidth}
        height={300}
        // yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    {/* <Notification /> */}
    </Wrapper>
  )
}