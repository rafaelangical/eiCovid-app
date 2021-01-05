import React, { useState } from 'react';
import styled from 'styled-components';

const Error = styled.Text`
    color: red;
    font-family: roboto-regular;
`;
export default function Input(props) {
    const [ error, setError ] = useState(false);

    console.log('ERROR input: ', error)
    const InputText = styled.TextInput`
        width: 90%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: 1px solid ${error ? "#002F5C" : "#002F5C"};
        border-radius: 8px;
        margin: 0 auto;
        margin-top: 16px;
        padding: 20px;
        color: #000;
        font-size: 20px;
    `;

    function onBlurInput() {
        if(props.value < props.lengthValidade){
            console.log('empty', props.value) 
            setError(true)
          }
          else {
            console.log(props.value) 
            setError(false)
        }
    }
    console.log('VALUE', props.value)
    return(
        <>
            <InputText 
                onPress={props.onChange} 
                value={props.value} 
                placeholder={props.placeHolder || 'Digite aqui...'} 
                onBlur={(e) => onBlurInput()}
            />
            {error === true ? <Error>O campo deve conter pelomenos {props.lengthValidade} caracteres</Error> : null}
        </>
    )
}