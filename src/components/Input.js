import React from 'react';
import styled from 'styled-components';

const InputText = styled.TextInput`
    width: 88.8%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 1px solid ${props => props.primary ? "#0377fc" : "#002F5C"};
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 16px;
    padding: 20px;
    color: #fff;
    font-size: 20px;
`;

export default function Input(props) {
    return(
        <InputText onPress={props.onChange} value={props.value} placeholder={props.placeHolder || 'Digite aqui...'}/>
    )
}