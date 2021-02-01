import React from 'react';
import { Card, Form, button } from 'react-bootstrap';

export default function Signup() {
  return (
    <>
      <Card>
        <Card.body>
          <h2 className="text-center mb-4">Sign Up</h2>
        </Card.body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log in
      </div>
    </>
  );
}
