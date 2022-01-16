import axios from 'axios'

export const get = async () => {
    const arr = []
    axios.get('https://swapi.dev/api/people/1').then(async (data) => {
      await arr.push({id:1 , name: data.data.name})
    });
    
    await axios.get('https://swapi.dev/api/people/4').then(async (data) => {
      await arr.push({id:4 , name: data.data.name})
    });

    return arr[0]
  }