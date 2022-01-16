import React, {useState} from 'react';
import axios from 'axios'


export const Home = () => {
    const [person, setPerson] = useState()

    const get = async () => {
      const arr = []
      axios.get('https://swapi.dev/api/people/1').then(async (data) => {
        console.log('d1', data.data.name)
        await arr.push(data.data.name)
      });
      
      await axios.get('https://swapi.dev/api/people/4').then(async (data) => {
        console.log('d4', data.data.name)
        await arr.push(data.data.name)
      });
  
     setPerson(arr[0])
    }
  
    return (
      <div className="App">
        <h2>{person}</h2>
        <button onClick={() => get()}>aperta ai</button>
      </div>
    );
}
