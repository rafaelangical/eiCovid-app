import React, { useState } from 'react';
import styled from 'styled-components';

const Error = styled.Text`
  color: red;
  font-family: roboto-regular;
`;

const Input = (props) => {
  const [error, setError] = useState(false);

  const InputText = styled.TextInput`
    width: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 1px solid ${error ? '#002F5C' : '#002F5C'};
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 16px;
    padding: 10px;
    color: #000;
    font-size: 20px;
  `;

  const onBlurInput = () => {
    if (props.value < props.lengthValidade) {
      setError(true);
    }
    setError(false);
  };
  return (
    <>
      <InputText
        onPress={props.onChange}
        value={props.value}
        placeholder={props.placeHolder || 'Digite aqui...'}
        onBlur={(e) => onBlurInput()}
      />
      {error === true ? (
        <Error>
          O campo deve conter pelomenos {props.lengthValidade} caracteres
        </Error>
      ) : null}
    </>
  );
};

export default Input;
