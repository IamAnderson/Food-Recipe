import React, { useState } from 'react'
import styled from 'styled-components'
import { RiMenu3Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'



const Container = styled.div`
    background-color: #00808024;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;
`

const Logo = styled.div`
    color: #000;
    font-size: 2rem;
    cursor: pointer;
    position: relative;
`

const Desc = styled.div`
    color: #000;
    font-size: 1.25rem;
    cursor: pointer;
    position: absolute;
    top: 11%;

    @media screen and (max-width: 450px) {
        top: 10%;
    }
`

const Search = styled(Link)`
    position: absolute;
    left: 82%;
`


const Navbar = () => {

    const [ click, setClick ] = useState(false);
    const Reload = () => {
        setClick(!click)
            window.location.reload(true)
    }


  return (
    <Container>
        <Logo onClick={Reload}>
            フードレシピ
        </Logo>

        <Desc onClick={Reload}>
            Food Recipe
        </Desc>

        <Search to='/recipe'>
            <RiMenu3Fill style={{fontSize: '2rem', color: '#2b2a2a'}} />
        </Search>
    </Container>
  )
}

export default Navbar