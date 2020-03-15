import React from 'react';
import Text from './text';
import styled from 'styled-components';

const Wrapper = styled.div`
    left: 0;
    bottom: 0;
    top: 0;
    width: 100%;
    background-color: #061a40;
    text-align: center;
    color:  #FFFFFF;
    height: 70px;
`

const Footer = () => {
    return (
        <Wrapper>
            <Text align={'center'} bold color={'#FFFFFF'} pt={24} pleft={10} fs={20}>&copy; Powered by VISIT NEPAL 2020</Text>
        </Wrapper>
    );
}

export default Footer;