import React, {useState} from 'react';
import styled from 'styled-components'
import {ResultComponent} from '../ResultComponent'
import {get} from '../../utils/fetch'


export const Home = () => {
    const [person, setPerson] = useState(null)

    const getResult = async () => {
         const result = await get();
         setPerson(result)
    }
    
  
    return (
      <Container>
        {
            person === null ?
            <>
                <div>
                    <Title>Welcome to <strong>iClinic</strong></Title>
                    <Subtitle>Frontend Challenge</Subtitle>
                </div>
                <StartButton onClick={() => getResult()}>start</StartButton>
            </>
            :
            <>
                {
                    person !== null && <ResultComponent person={person} setPerson={setPerson}  />
                }
            </>
        }
        
      </Container>
    );
}

const Container = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    height: 100vh;
`

const Title = styled.div`
    font-size: 72px;
    line-height: 88px;
    margin-top: 210px;
    color:#2C97D1;
    text-align: center;

`
const Subtitle = styled.div`
    font-size: 14px;
    line-height: 17px;
    color:#2C97D1;
    text-transform: uppercase;
    text-align: center;
 
`
const StartButton = styled.button`
    text-transform: uppercase;
    width: 189px;
    height: 56px;
    background: #2C97D1;
    border-radius: 10px;
    color: #FFFFFF;
    text-align: center;
    border: none;
    font-size: 18px;
    cursor: pointer;
    margin-top: 274px;
`