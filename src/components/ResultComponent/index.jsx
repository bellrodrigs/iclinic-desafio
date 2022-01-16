import React, {useEffect, useState, useCallback} from 'react';
import styled from 'styled-components'
import {get} from '../../utils/fetch'
import {Loading} from '../Loading'

export const ResultComponent = ({person, setPerson}) => {

    const [width, setWidth] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const w = window.screen.availWidth
        setWidth(w)
    },[])

    const lukeImg = 'https://raw.githubusercontent.com/iclinic/challenge-front/master/images-masters/luke-skywalker.png'
    const darthImg = 'https://raw.githubusercontent.com/iclinic/challenge-front/master/images-masters/darth-vader.png'


    const getResult = useCallback(() => {
        setLoading(true)
        return get().then((result) => {
          setLoading(false);
          setPerson(result)
        });
    },[setPerson]);

    const ButtonChoose  = () => {
    return (
        <ChooseButton disabled={loading} onClick={() => getResult()} id={person.id}>choose your path again, Padawan</ChooseButton>
        )
    }

  return (
      <Container id={person.id}>
          <BackContainer onClick={() => setPerson(null)} id={person.id}>
            <i className="fa fa-arrow-left" aria-hidden="true" /> <span>back</span>
          </BackContainer>
          <Body>
              {width > 800 && <ButtonChoose />}
              {loading ? <Loading id={person.id} /> :
                <ResultContianer>
                    <Image src={person.id === 1 ? lukeImg : darthImg} />
                    <TextContainer><ResultText id={person.id}>Your master is </ResultText><ResultTextStrong id={person.id}> {person?.name}</ResultTextStrong></TextContainer>
                    {width <= 800 && <ButtonChoose />}
                </ResultContianer>
                }
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
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({id}) => id === 1 ? '#FBFE63' : '#2A2A2A'};
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    @media (max-width: 800px)
    {
        margin-top: 34px;
    }
`

const ResultContianer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Image = styled.img`
    /* margin-top: 91px; */
    border-radius: 50%;
    width: 380px;
    @media (max-width: 800px)
    {
        width: 302px;
    }
`

const TextContainer = styled.div`
    display: flex;
    margin-top: 18px;
    @media (max-width: 800px)
    {
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
`

const ResultText = styled.div`
    font-size: 36px;
    line-height: 44px;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({id}) => id === 1 ? '#2A2A2A' : '#fff'};    
`

const ResultTextStrong = styled.div`
    font-size: 36px;
    line-height: 44px;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({id}) => id === 1 ? '#2A2A2A' : '#fff'};;
    font-weight: bold;
    margin-left: 10px;
    
`