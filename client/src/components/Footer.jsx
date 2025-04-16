import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <div className="row align-items-center">
              <div className="col-md-6 mb-3 mb-md-0">
                <p className="text-muted small mb-0">
                  © {currentYear} State2State. <br /> Todos os direitos reservados.
                </p>
              </div>
              <div className="col-md-6">
                <ul className="nav justify-content-md-end">
                  <li className="nav-item">
                    <a href="https://github.com/aubaro01" className="nav-link text-muted small">
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
