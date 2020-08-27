import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import Header from '../src/Component/Header/Header'
import Class from '../src/Component/Class/Class'
function App() {
  return (
    <Container>
      <Header></Header>
      <Class></Class>
    </Container>
  );
}

export default App;