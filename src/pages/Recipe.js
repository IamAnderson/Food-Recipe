import React from 'react'
import styled from 'styled-components'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    margin: 0 auto;
    color: #000;
    background: #00808024;

    position: relative;
`

const MainA = styled(Link)`
    position: absolute;
    top: 10%;
    left: 5%;

    text-decoration: none;
`

const SCont = styled.div`
    
`

const Title = styled.div`
    font-size: 1.75rem;
    font-weight: 600;
    padding: 2.5rem 0;
`

const Items = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 1.25rem;

`

const Recipe = () => {
  return (
    <Container>
        <MainA to='/'>
            <AiOutlineArrowLeft style={{fontSize: '2rem', color: '#000'}} />
        </MainA>

        <SCont>
            <Title>
                List of items that can be searched
            </Title>

            <Items>
                carrot, 
                broccoli, 
                asparagus, 
                cauliflower, 
                corn, 
                cucumber, 
                green pepper, 
                lettuce, 
                mushrooms, 
                onion, 
                potato, 
                pumpkin, 
                red pepper, 
                tomato, 
                beetroot, 
                brussel sprouts, 
                peas, 
                zucchini, 
                radish, 
                sweet potato, 
                artichoke, 
                leek, 
                cabbage, 
                celery, 
                chili, 
                garlic, 
                basil, 
                coriander, 
                parsley, 
                dill, 
                rosemary, 
                oregano, 
                cinnamon, 
                saffron, 
                green bean, 
                bean, 
                chickpea, 
                lentil, 
                apple, 
                apricot, 
                avocado, 
                banana, 
                blackberry, 
                blackcurrant, 
                blueberry, 
                boysenberry, 
                cherry, 
                coconut, 
                fig, 
                grape, 
                grapefruit, 
                kiwifruit, 
                lemon, 
                lime, 
                lychee, 
                mandarin, 
                mango, 
                melon, 
                nectarine, 
                orange, 
                papaya, 
                passion fruit, 
                peach, 
                pear, 
                plum, 
                pomegranate, 
                quince, 
                raspberry, 
                strawberry, 
                watermelon, 
                salad, 
                pizza, 
                pasta, 
                popcorn, 
                lobster, 
                steak, 
                bbq, 
                pudding, 
                hamburger, 
                pie, 
                cake, 
                sausage, 
                tacos, 
                kebab
                poutine, 
                seafood, 
                chips, 
                fries, 
                masala, 
                paella, 
                som tam, 
                chicken, 
                toast, 
                marzipan, 
                tofu, 
                ketchup, 
                hummus, 
                chili, 
                maple syrup, 
                parma ham, 
                fajitas, 
                champ, 
                lasagna, 
                poke, 
                chocolate, 
                croissant, 
                arepas, 
                bunny chow, 
                pierogi, 
                donuts, 
                rendang, 
                sushi, 
                ice cream, 
                duck, 
                curry, 
                beef, 
                goat, 
                lamb, 
                turkey, 
                pork, 
                fish, 
                crab, 
                bacon, 
                ham, 
                pepperoni, 
                salami, 
                ribs, 
            </Items>
        </SCont>
    </ Container>
  )
}

export default Recipe