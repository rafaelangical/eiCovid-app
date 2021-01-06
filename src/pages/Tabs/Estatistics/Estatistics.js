import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';
import axios from 'axios';
import moment from 'moment';
import Spinner from 'react-native-loading-spinner-overlay';

const formatValue = (valor) => {
  return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
};

const Wrapper = styled.ScrollView`
  flex-direction: column;
  background-color: #ffb9a6;
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
  color: #fff;
`;

const TextHelp = styled.Text`
  color: #000;
  width: 90%;
  flex-wrap: wrap;
  margin: 0 auto;
  font-size: 24px;
  margin-top: 15px;
  font-family: raleway-regular;
`;

const TextData = styled.Text`
  color: #000;
  width: 90%;
  flex-wrap: wrap;
  margin: 0 auto;
  font-size: 16px;
  margin-top: 15px;
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

const RowStatesCases = styled.View`
  width: 50%;
  height: 60px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 6px;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const StateName = styled.Text`
  font-size: 22px;
  margin-left: 10px;
  font-weight: 600;
`;
const StateCases = styled.Text`
  font-size: 20px;
  margin-left: 20px;
`;

const Estatistics = () => {
  const [dataApi, setDataApi] = useState(null);
  const [graphicData, setGraphicData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        'https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true'
      );
      setDataApi(data);

      const graphic = data?.infectedByRegion?.map((item) => {
        return {
          name: item.state,
          cases: item.count,
        };
      });

      graphic && setGraphicData(graphic);
      return data;
    };
    fetchData();
  }, []);
  return (
    <Wrapper>
      <Title>Estatísticas</Title>
      {dataApi ? (
        <Divider>
          <SpanBold style={{ marginLeft: 100, marginRight: 100 }}>
            Casos no brazil:
          </SpanBold>
          <TextHelpFirst style={{ color: 'darkblue' }}>
            Recuperados: {formatValue(Number(dataApi.recovered || 0))}
          </TextHelpFirst>
          <TextHelpFirst style={{ color: 'darkgreen' }}>
            Casos confirmados: {formatValue(Number(dataApi.infected || 0))}
          </TextHelpFirst>
          <TextHelpFirst style={{ color: 'red' }}>
            Mortes: {formatValue(Number(dataApi.deceased || 0))}
          </TextHelpFirst>

          <TextData>
            Atualizado em:{' '}
            {moment(dataApi.lastUpdatedAtApify || new Date()).format(
              'DD/MM/YYYY'
            )}
          </TextData>
        </Divider>
      ) : (
        <Spinner visible={!dataApi} textContent={'Loading...'} textStyle={{}} />
      )}
      <SpanBold>Casos por estado:</SpanBold>

      {graphicData ? (
        graphicData.map((item) => (
          <RowStatesCases>
            <StateName>{item.name}</StateName>
            <StateCases>{formatValue(Number(item.cases || 0))}</StateCases>
          </RowStatesCases>
        ))
      ) : (
        <Spinner
          visible={!graphicData}
          textContent={'Loading...'}
          textStyle={{}}
        />
      )}
    </Wrapper>
  );
};

export default Estatistics;
