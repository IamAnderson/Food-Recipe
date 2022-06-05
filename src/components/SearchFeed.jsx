import React from 'react'
import styled from 'styled-components'
import { BiSearchAlt } from 'react-icons/bi'


const Container = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
`

const Icon = styled.button`
  margin-left: 0.5rem;
  background-color: #008080a4;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.45rem 0.5rem;


  cursor: pointer;
  border: none;
  outline: none;
 

 &:hover{
   background-color: #008080c5;
 }
`

const SearchFeed = ({ endPoint, onChangeHandler, handleOnSubmit }) => {
  
  return (
    <Container onSubmit={handleOnSubmit}>

    <input type="text" placeholder='search my recipes please' value={endPoint} onChange={onChangeHandler} style={{padding: '0.5rem 1rem'  }} />

    <Icon type='submit'>
      <BiSearchAlt style={{color: '#fff'}}/>
    </Icon>
    </Container>
  )
}

export default SearchFeed