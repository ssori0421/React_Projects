import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const SignInPage = () => {
  return (
    <Container className='signinContainer'>
      <Form className='formContainer'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>이메일</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'></Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        {/* <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group> */}
        <Button variant='danger ' type='submit'>
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default SignInPage;
