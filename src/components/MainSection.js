import React from 'react';
import styled from 'styled-components';

const BackgroundImage = styled.img`
    width: 100%;
`

const WrapperContent = styled.div`
    text-align: center;
`
const BodyText = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bolder;
    font-size: 80px;
    color: #FFFFFF; 
    ::after {
        content: "Welcome To Nepal"
    } 
`

const MainSection = () => {
    return (
        <WrapperContent>
            <BackgroundImage src="https://i.ibb.co/gwJvLVm/sampleimage.jpg" /> 
            <BodyText />
        </WrapperContent>
           
    );
}

export default MainSection;