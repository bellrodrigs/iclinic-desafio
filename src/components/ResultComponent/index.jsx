import React from 'react';
import styled from 'styled-components'

export const ResultComponent = ({person, setPerson}) => {

    const lukeImg = 'https://raw.githubusercontent.com/iclinic/challenge-front/master/images-masters/luke-skywalker.png'
    const darthImg = 'https://raw.githubusercontent.com/iclinic/challenge-front/master/images-masters/darth-vader.png'

  return (
      <Container id={person.id}>
          <BackContainer onClick={() => setPerson(null)} id={person.id}>
            <i class="fa fa-arrow-left" aria-hidden="true" /> <span>back</span>
          </BackContainer>
          <Body>
              <ChooseButton onClick={() => setPerson(null)} id={person.id}>choose your path again, Padawan</ChooseButton>
              <ResultContianer>
                <Image src={person.id === 1 ? lukeImg : darthImg} />
                <ResultText id={person.id}>Your master is <span>{person?.name}</span></ResultText>
              </ResultContianer>
          </Body>
      </Container>
  );
}

const Container = styled.div`
    background-color: ${({id}) => id === 1 ? '#FBFE63' : '#2B2B2B'};
    color: ${({id}) => id === 1 ? '#2A2A2A' : '#fff'};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const BackContainer = styled.div`
    padding: 45px 0px 0px 52px;
    display: flex;
    align-items: center;
    cursor: pointer;
    i {
        font-size: 26px;
        color: ${({id}) => id === 1 ? '#2A2A2A' : '#fff'};
        margin-right: 8px;
    }
    span {
        font-size: 18px;
    }
`

const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* margin-top: 93px; */
    height: 85vh;
    justify-content: space-evenly;
`
const ChooseButton = styled.button`
    width: 347px;
    height: 56px;
    background: ${({id}) => id === 1 ? '#2A2A2A' : '#fff'};;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: ${({id}) => id === 1 ? '#FBFE63' : '#2A2A2A'};;
`

const ResultContianer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Image = styled.img`
    /* margin-top: 91px; */
    border-radius: 50%;
`
const ResultText = styled.p`
    font-size: 36px;
    line-height: 44px;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({id}) => id === 1 ? '#2A2A2A' : '#fff'};;
    span {
        margin-left: 8px;
        font-weight: bold;
    }
`