import * as React from 'react';
import Document from 'src/Document';
import Header from 'src/Header';
import Sidebar from 'src/Sidebar';
import Container from 'src/styled/Container';

export default function DocExplorer() {
  return (
    <Container>
      <Header />
      <Document />
      <Sidebar />
    </Container>
  );
}
