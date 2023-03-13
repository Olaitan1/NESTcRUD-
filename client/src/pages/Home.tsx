import React, { useContext, useEffect } from 'react'

import { DataContext } from '../context/DataContext';
import Dashboard from './Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedIn } from '../redux/Action';
import { AllContext } from '../context/types';
import Login from '../components/Login/Login';
import Navbar from '../components/Navbar/Navbar';
import Signup from '../components/Login/Signup';


const Home = () =>
{
  const { showForm } = useContext(DataContext) as AllContext;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: any) => state.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() =>
  {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  }, [isLoggedIn]);

  const handleLogin = () =>
  {
    // Perform login action
    dispatch(setLoggedIn(true));
  };

  const handleLogout = () =>
  {
    // Perform logout action
    dispatch(setLoggedIn(false));
  };

  return (
    <>
      {/* <Navbar onLogout={handleLogin} 
      {showForm === 'login' ? <Login onLogin={handleLogin} /> : <Signup />} */}
      <Navbar onLogin={handleLogin} onLogout={handleLogout} />
      {showForm === 'login' ? <Login onLogin={handleLogin} /> : <Signup />}
    </>
  );
};

export default Home;
