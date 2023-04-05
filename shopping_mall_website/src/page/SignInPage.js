import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignInPage = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  const signinUser = (event) => {
    event.preventDefault(); // <Form>태그의 새로고침 방지
    setAuthenticate(true);
    navigate('/');
  };

  return (
    <Container className='signinContainer'>
      <Form className='formContainer' onSubmit={(event) => signinUser(event)}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>이메일</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button variant='danger ' type='submit'>
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default SignInPage;
