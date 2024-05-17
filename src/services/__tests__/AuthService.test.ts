/* import BrowserRouter  from 'react-router-dom';
import  Login from '../../components/login/Login';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Login Component', () => {
  test('submits the form with valid credentials and redirects to profile page', async () => {
    render(
      <BrowserRouter>
        
      </BrowserRouter>
    );

   
    userEvent.type(screen.getByLabelText('E-mail'), 'validemail@example.com');
    userEvent.type(screen.getByLabelText('Password'), 'validpassword');

    
    fireEvent.click(screen.getByText('Sign In'));

    
    await waitFor(() => {
      expect(window.location.pathname).toEqual('/profile');
    });
  });
});

 */