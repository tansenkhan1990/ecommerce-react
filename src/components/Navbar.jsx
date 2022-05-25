import React, { Component } from 'react'
import styled from 'styled-components'
import { Search, ShopOutlined } from '@material-ui/icons'
import {Badge} from '@material-ui/core'
// import MenuItem from 'style-components/dist/components/Menu/menuItem'

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
display: flex;
align-items: center;
justify-content: flex-end;
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
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`
const Navbar = () => {
  return (
    <Container><Wrapper>
        <Left><Language>EN</Language>
        <SearchContainer><Input />
        <Search /></SearchContainer>
        </Left>
        <Center><Logo>My Business</Logo></Center>
        <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>SignIn</MenuItem>
            <MenuItem>
            <Badge badageContent={4} color = 'primary'>
                <ShopOutlined />
            </Badge>
            </MenuItem>
        </Right>
        </Wrapper></Container>
  )
}
export default Navbar;