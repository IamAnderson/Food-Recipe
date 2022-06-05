import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Navbar from '../components/Navbar'
import SearchFeed from '../components/SearchFeed'

const Container = styled.div `

`

const Grid = styled.div `
  /*display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  grid-gap: 2rem;
  padding: 3rem 4rem;*/

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 3rem 4rem
  grid-template-columns: repeat(2, 1fr);

`


const RecipeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    margin: 2rem 1rem;
    //border: 1px solid #000;
    box-shadow: 1px 1px 3px #002c2c ;
`

const ImgArea = styled.div`
    width: 20rem;
    height: 400px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const DescArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`

const Title = styled.h3`
    font-size: 1.2rem;
    color: #024444;
    cursor: default;
`

const Publisher = styled.div`
    display: flex;
    align-items: center;
`

const PublisherLink = styled.a`
    font-size: 1.2rem;
    margin-left: 0.5rem;
    font-weight: 600;
    color: #024444;
    text-decoration: none;

    &:hover{
        color: #ff3c00;
    }
`

const BtnArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`

const ViewMore = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.2rem;
    padding: 1.25rem 2rem;
    color: #000;
    border: 1px solid #00808024;
    border-bottom-right-radius: 50%;
    outline: none;
`

const SourceUrl = styled.a`

`

const Main = () => {

  const [endPoint, setEndPoint] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [stop, setStop] = useState('');
  
  useEffect(() => {
   doc();
  }, [stop])



const doc = () => {
  axios.get(`https://forkify-api.herokuapp.com/api/search?q=${endPoint}`)
  .then((response) => {
    console.log(response.data.recipes);
    setRecipes(response.data.recipes);
  })

  .catch((error) => {
    console.error('error is present...', error);
  });
}

const onChangeHandler = (e) => {
  setEndPoint(e.target.value);
}

const handleOnSubmit = (e) => {
  e.preventDefault();
  setStop(endPoint);
} 


  return (
    <Container>
      <Navbar />
      <SearchFeed endPoint={endPoint} onChangeHandler={onChangeHandler} handleOnSubmit={handleOnSubmit}/>

      <Grid>
        <>
            {recipes.map((item) => {
                return(
                  <RecipeContainer key={item.recipe_id}>
                    <ImgArea>
                        <Img src={item.image_url} alt={item.title} />
                    </ImgArea>

                    <DescArea> 
                        <Title>
                            { item.title.length < 20 ? item.title : `${item.title.substring(0, 25)}...` }
                        </Title>

                    <Publisher>
                        <p style={{fontSize: '1.2rem', color: '#024444', fontWeight: '600'}}>Publisher:</p> 
                        <PublisherLink target='_blank' href={item.publisher_url}>
                            { item.publisher }
                        </PublisherLink> 
                    </Publisher>

                    </DescArea>

                    <BtnArea>    
                        <ViewMore>
                            <SourceUrl href={item.source_url} target='_blank'  style={{textDecoration: 'none', color: '#024444'}}>
                                View More
                            </SourceUrl>
                        </ViewMore>
                    </BtnArea>
                  </RecipeContainer>
                )
            })}
        </>
          </Grid> 

  </Container>
  )
}

export default Main