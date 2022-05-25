import React from 'react'
import { ArrowLeftOutlined, ArrowRightAltOutlined } from '@material-ui/icons';
import styled from 'styled-components'
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
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
`
const Wrapper = styled.div`
    height: 100%;
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
  return (
    <div>
        <Container>
            <Arrow direction='left'>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide>
                <ImageContainer>
                    <Image src="public/img/how-ecommerce-companies-can-care-for-their-customers-5eb56dfe6c64e-1520x800-1.png"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>This is a ecommerce side</Title>
                    <Description>jajajjehfkwjhvl;jwhvlkjrwhvlkerwjhv
                        slfjvnkljfdvkjeovjlkjv
                    </Description>
                    <Button>shop now</Button>
                </InfoContainer>
                </Slide>
                <Slide>
                <ImageContainer>
                    <Image src="public/img/how-ecommerce-companies-can-care-for-their-customers-5eb56dfe6c64e-1520x800-1.png"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>This is a ecommerce side</Title>
                    <Description>jajajjehfkwjhvl;jwhvlkjrwhvlkerwjhv
                        slfjvnkljfdvkjeovjlkjv
                    </Description>
                    <Button>shop now</Button>
                </InfoContainer>
                </Slide>
                <Slide>
                <ImageContainer>
                    <Image src="public/img/how-ecommerce-companies-can-care-for-their-customers-5eb56dfe6c64e-1520x800-1.png"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>This is a ecommerce side</Title>
                    <Description>jajajjehfkwjhvl;jwhvlkjrwhvlkerwjhv
                        slfjvnkljfdvkjeovjlkjv
                    </Description>
                    <Button>shop now</Button>
                </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction='right'>
               <ArrowRightAltOutlined />
            </Arrow>
        </Container>
    </div>
  )
}

export default Slider