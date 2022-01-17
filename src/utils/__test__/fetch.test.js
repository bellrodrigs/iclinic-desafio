import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {get} from '../fetch'

const axiosMock = new MockAdapter(axios);


it("Testing if get() is returning correctly value", async () => {
  const dataMock = 
    {
      id: 1,
      name: "Luke"
    };
  axiosMock.onGet().reply(200, dataMock);

  const data = await get();
  expect(data.name).toEqual("Luke");
});
