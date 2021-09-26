import React from 'react';
import { Container } from 'react-bootstrap';

export default function Header() {
  return (
    <Container className="text-center py-5" style={{ color: 'white' }}>
      <h1>Find your donor</h1>
      <h3>Your need is $4000000000</h3>
    </Container>
  );
}
