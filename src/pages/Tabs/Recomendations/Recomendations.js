import React from 'react';
import styled from 'styled-components';

const WrapperImage = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 30px;
  letter-spacing: 1px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 30px;
  font-family: roboto-bold;
  color: #ffb9a6;
`;

const TextHelp = styled.Text`
  color: #000;
  width: 90%;
  flex-wrap: wrap;
  margin: 0 auto;
  font-size: 24px;
  font-family: raleway-regular;
  text-align: justify;
`;

const Paragraphs = styled(TextHelp)`
  font-size: 30px;
  color: darkblue;
  font-family: indie-flower;
  text-align: justify;
  margin-top: 25px;
`;

const ImagePrevencao = styled.Image`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  height: 1000px;
  margin-top: 35px;
`;

export default function Recomendations() {
  return (
    <WrapperImage>
      <Title>Recomendações</Title>
      <TextHelp>
        Para combater que a pandemia se plolifere mais ainda todos nós devemos
        fazer nossa parte.
      </TextHelp>
      <Paragraphs>Com isso devemos:</Paragraphs>
      <WrapperImage
        contentContainerStyle={{
          paddingBottom: 50,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <ImagePrevencao
          source={require('../../../../assets/prevenção.png')}
          resizeMode={'cover'}
        />
      </WrapperImage>
    </WrapperImage>
  );
}
