import axios from 'axios'

export const get = async () => {
    const arr = []
    axios.get('https://swapi.dev/api/people/1').then(async (data) => {
      await arr.push({id:1 , name: data.data.name})
    }).catch(e => e.response);
    
    await axios.get('https://swapi.dev/api/people/4').then(async (data) => {
      await arr.push({id:4 , name: data.data.name})
    }).catch(e => e.response);

    return arr[0]
  }