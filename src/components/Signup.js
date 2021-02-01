import React from 'react';
import { Card, Form, button } from 'react-bootstrap';

export default function Signup() {
  return (
    <>
      <Card>
        <Card.body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.label>Email</Form.label>
              <Form.control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.label>Password</Form.label>
              <Form.control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.label>Password Confirmation</Form.label>
              <Form.control type="password" ref={PasswordConfirmRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log in
      </div>
    </>
  );
}
