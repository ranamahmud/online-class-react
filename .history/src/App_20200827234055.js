import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Container, Row, Col } from 'react-bootstrap';
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