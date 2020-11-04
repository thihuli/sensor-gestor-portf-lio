import axios from 'axios';
import { useEffect, useState } from 'react';
import { SERVER_URL } from '../utils/server';

export const useAuth = () => {
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  const [ logged, setLogged ] = useState(null);

  useEffect(() => {
    //TODO mudar === para !== quando estiver na integração
    setLogged(localStorage.getItem('token') === null);
    setLoading(false);
  }, []);

  const login = (email, password) => {
    setLoading(true);
    
    const params = { email, password };
    
    axios.post(`${SERVER_URL}/signin`, params)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      setLogged(true);
      setError(null);
      setLoading(false);
    })
    .catch(err => {
      setError(err.response.data);
      setLoading(false);
    });
  }

  const logout = () => {
    localStorage.removeItem('token');
    setLogged(false);
  }

  return {login, logout, logged, error, loading};
}