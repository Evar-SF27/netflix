import React, { useState } from 'react';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import { auth } from '../lib/firebaseProd';
import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export default function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || password === '' || emailAddress === '';

  const handleSignUp = async (event) => {
    event.preventDefault();

    await createUserWithEmailAndPassword(auth, emailAddress, password)
    .then((result) => {
      updateProfile(result.user, {
        displayName: firstName,
        photoURL: Math.floor(Math.random() * 5) + 1
      })
    })
    .then(() => {
      navigate(ROUTES.BROWSE)
    })
    .catch((error) => {
      setFirstName('');
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    })

    // try {
    //   const user = await createUserWithEmailAndPassword(auth, emailAddress, password);
    //   console.log(user.user);
    //   navigate(ROUTES.BROWSE);
      
    // }catch(error) {
    //   setFirstName('');
    //   setEmailAddress('');
    //   setPassword('');
    //   setError(error.message);
    // }finally {
    //   setFirstName('');
    //   setEmailAddress('');
    //   setPassword('');
    // }
    
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
          <Form.Input placeholder="First Name" value={firstName} onChange={({ target }) => setFirstName(target.value)}/>
            <Form.Input placeholder="Email Address" value={emailAddress} onChange={({ target }) => setEmailAddress(target.value)}/>
            <Form.Input placeholder="Password" type="password" autocomplete="off" value={password} onChange={({ target }) => setPassword(target.value)}/>
            <Form.Submit disabled={isInvalid} type="submit">Register</Form.Submit>
            <Form.Text>
              Already have an account? 
              <Form.Link to={"/signin"}> Sign In</Form.Link>
              </Form.Text>
              <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a robot. Learn More.</Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}

