import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-top mt-auto">
      <Container>
        <Row className="py-3 align-items-center">
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p className="text-muted small mb-0">
              © {currentYear} State2State. <br className="d-md-none" /> <br />
              Todos os direitos reservados.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a
              href="https://github.com/aubaro01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted small text-decoration-none"
            >
              Github
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
