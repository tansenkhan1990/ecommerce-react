import React from 'react'
import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightAltOutlined } from '@material-ui/icons';
import { sliderItems } from '../data';
import styled from 'styled-components'
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    height: 50px;
    width: 50px;
    background-color: whitesmoke;
    border-radius: 50%;
    display: flex;
    align-items: center;
    background-color: #f4f8f8;
    position: absolute;
    left: ${props => props.direction==='left' && "10px"};
    right: ${props => props.direction==='right' && "10px"};
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: .5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display:flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`
const ImageContainer = styled.div`
height: 100%;
   flex: 1;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Image = styled.div`
    height: 80%;
`
const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #${(props) => props.bg};
`
const Title = styled.h1`
font-size: 70px;
`
const Description = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
 };
  return (
    <div>
        <Container>
            <Arrow direction='left' onClick={()=>handleClick('left')}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=>(
                <Slide bg={item.bg}>
                <ImageContainer>
                    <Image src= {item.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>
                        {item.desc}
                    </Description>
                    <Button>shop now</Button>
                </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction='right'onClick={()=>handleClick('right')}>
               <ArrowRightAltOutlined />
            </Arrow>
        </Container>
    </div>
  )
}

export default Slider