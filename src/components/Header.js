import React from 'react';
import styled from 'styled-components';
import Text from './text';

const Wrapper = styled.div`
    left: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    background-color: #041330;
    text-align: center;
    color:  #FFFFFF;
    height: 80px;
`

const Button = styled.a`
    background-color:#44c767;
    border-radius:28px;
    border:1px solid #18ab29;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:17px;
    padding:9px 14px;
    text-decoration:none;
    text-shadow:0px 1px 0px #2f6627;
    float: right;
    margin-right: 10px;
    :hover {
        background-color:#5cbf2a;
    }

    :active {
        top:1px;
    }
`

const clicked = (event) => {
    alert('Thanks for learning Styled Components!')
}

const Header = () => {
    return (
        <Wrapper>
            <Text align={'left'} bold color={'FFFFFF'} pt={24} pleft={40} fs={30}>
                VISIT NEPAL 2020
                <Button onClick={()=>clicked()}>Click Me</Button>
                </Text>
            
        </Wrapper>
    );
}

export default Header;