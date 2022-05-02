import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'

const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div `
    width: 50px;
    height: 50px;
    background-color: lightgray;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    opacity: 0.50;
    z-index: 2;

`

const Wrapper = styled.div `
    height: 100%;
    display: flex;
    transform: translateX( ${props => props.slideIndex * -100}vw);
    transition: all 1s ease;
`

const Slide = styled.div `
    width: 100vw;
    height: 100vh;
    align-items: center;
    display: flex;
    background-color: ${props => props.bg};
`

const ImgContainer = styled.div `
    height: 100%;
    flex: 1;
    text-align: center;
`
const Image = styled.img `
    height: 80%;
`

const InfoContainer = styled.div `
    padding: 50px;
    flex: 1;
`

const Title = styled.h1 `
    font-size: 7em;
`

const Description = styled.p `
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 5px;
`

const Button = styled.button `
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(0)

    function handleClick(direction) {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : sliderItems.length-1)
        }
        else {
            setSlideIndex (slideIndex < sliderItems.length-1 ? slideIndex+1 : 0)
        }
    }

  return (
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined></ArrowLeftOutlined>
        </Arrow>

        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
                <Slide key={item.id} bg={item.bg}>
                    <ImgContainer>
                        <Image src={item.img}></Image>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.description}</Description>
                        <Button>{item.button}</Button>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>

        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined></ArrowRightOutlined>
        </Arrow>
      </Container>
  )
}
