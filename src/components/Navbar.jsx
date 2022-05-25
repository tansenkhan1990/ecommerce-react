import React, { Component } from 'react'
import styled from 'styled-components'
import { Search } from '@material-ui/icons'

const Container = styled.div`
height : 60px;
`
const Wrapper = styled.div`
padding : 10px 20px;
display : flex;
justify-content : space-between;
align-items: center;
`
const Left = styled.div`
flex : 1;
display : flex;
align-items: center;
`
const Center = styled.div`
flex : 1;
`
const Right = styled.div`
flex : 1;
`
const Language = styled.span`
font-size : 14px;
cursor : pointer;
`
const SearchContainer = styled.div`
border : .5px solid darkgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input`
border: none;
`
const Logo = styled.h1`
    text-align: center;
    font-weight: bold;
`
const Navbar = () => {
  return (
    <Container><Wrapper>
        <Left><Language>EN</Language>
        <SearchContainer><Input />
        <Search /></SearchContainer>
        </Left>
        <Center><Logo>My Business</Logo></Center>
        <Right>Right</Right>
        </Wrapper></Container>
  )
}
export default Navbar;