import React, {useState} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import {ResultComponent} from '../ResultComponent'


export const Home = () => {
    const [person, setPerson] = useState(null)

    const get = async () => {
      const arr = []
      axios.get('https://swapi.dev/api/people/1').then(async (data) => {
        console.log('d1', data.data.name)
        await arr.push({id:1 , name: data.data.name})
      });
      
      await axios.get('https://swapi.dev/api/people/4').then(async (data) => {
        console.log('d4', data.data.name)
        await arr.push({id:4 , name: data.data.name})
      });
  
     setPerson(arr[0])
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
                <StartButton onClick={() => get()}>start</StartButton>
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