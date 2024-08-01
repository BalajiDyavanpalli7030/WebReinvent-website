import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../slices/user/userSlice';
import { signIn } from '../services/api';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await signIn(email, password);
      dispatch(login({ email, data }));
      navigate('/dashboard')
    } catch (error) {
      console.error('Failed to sign in', error);
      setError("Please enter a valid credentials")
    }
  };

  return (
    <Form onSubmit={handleSignIn}>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <Button type="submit">Sign In</Button>
      {error && <h1>{error}</h1>}
      <Link to="/signup"
            className="block mt-4 text-blue-500 hover:text-blue-700 text-center">
            Sign Up?
      </Link>

    </Form>
  );
};

export default SignIn;
