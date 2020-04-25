import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.TouchableOpacity`
    width: 88.8%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.primary ? "#0377fc" : "#002F5C"};
    border: 2px solid #002F5C;
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 16px;
    padding: 20px;
`;

const Message = styled.Text`
    color: white;
    font-size: 24px;
    font-family: roboto-bold;
`;

export default function Button(props) {
    return(
        <Wrapper onPress={props.onPress}>
            {props.children}
            <Message>{props.message}</Message>
        </Wrapper>
    )
}