import React, { useState } from 'react';
import { signUp } from '../services/api';
import Form from '../components/Form';
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await signUp(email, password);
      // Handle success (e.g., navigate to sign in)
      setError("Sign Up successful! Please sign to see dashboard")
      console.log(data)
    } catch (error) {
      console.error('Failed to sign up', error);
      setError("Please enter a valid details")
    }
  };

  return (
    <Form onSubmit={handleSignUp}>
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
      <Button type="submit">Sign Up</Button>
      {error && <h1>{error}</h1>}
      <Link to="/signin"
            className="block mt-4 text-blue-500 hover:text-blue-700 text-center">
            Sign In?
      </Link>
    </Form>
  );
};

export default SignUp;
