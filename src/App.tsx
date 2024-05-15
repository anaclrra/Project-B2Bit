import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './components/login/Login';
import UserProfile from './components/profile/UserProfile';
import './App.css';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
  </BrowserRouter>
    </>
  )
}

export default App;
