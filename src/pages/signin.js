import React, { useState } from 'react';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import { auth } from '../lib/firebaseProd';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';


export default function SignIn() {
  const navigate = useNavigate();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAddress === '';

  const handleSignIn = async (event) => {
    event.preventDefault();

    //Firebase Authentication
    // db
    //   .auth()
    //   .SignInWithEmailAndPassword(emailAddress, password)
    //   .then(() => {
    //     // push to the browser page
    //     navigate(ROUTES.BROWSE);
    //   })
    
    try {
      const user = await signInWithEmailAndPassword(auth, emailAddress, password);
      console.log(user.user);
      navigate(ROUTES.BROWSE);
    }catch(error) {
      setEmailAddress('');
      setPassword('');
      setError(error.message);
    }finally {
      setEmailAddress('');
      setPassword('');
    }

  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input placeholder="Email Address" value={emailAddress} onChange={({ target }) => setEmailAddress(target.value)}/>
            <Form.Input placeholder="Password" type="password" autocompletee="off" value={password} onChange={({ target }) => setPassword(target.value)}/>
            <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
            <Form.Text>
              New to Netflix? 
              <Form.Link to={"/signup"}> Sign Up now</Form.Link>
              </Form.Text>
              <Form.TextSmall>This page is protected by Google reCAPTCHA to ensure you're not a robot. Learn More.</Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
    
  )
}

