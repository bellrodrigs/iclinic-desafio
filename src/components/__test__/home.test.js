import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import {Home} from '../Home'

test('Should have a welcome text and start button', async () => {
    render(<Home />);
    const welcome = screen.getByText(/welcome to/i);
    const iclinic = screen.getByText(/iclinic/i);
    const button = screen.getByText(/start/i);
    
    expect(welcome).toBeInTheDocument();
    expect(iclinic).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("When press start button should show a loading text", async () => {
    render(<Home />);
    const button = screen.getByText(/start/i);
      
    await userEvent.click(button);
    const loading = screen.getByText(/loading/i);
    await expect(loading).toBeInTheDocument();

  });