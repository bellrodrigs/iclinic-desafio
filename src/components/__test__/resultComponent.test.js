import { render, screen } from '@testing-library/react';
import React from 'react'
import userEvent from "@testing-library/user-event";
import {ResultComponent} from '../ResultComponent'

test('Should have a text result and the name need to be equal than we pass in the props', () => {
   const person = {id:1, name:'Luke'}
    render(<ResultComponent person={person} />);
    
    const text = screen.getByText(/Your master is/i);
    const name = screen.getByTestId('result-name')
    expect(name).toHaveTextContent(person.name)
    expect(text).toBeInTheDocument();
  });
  