import * as React from 'react';
import DocumentReader from 'src/DocumentReader';
import { DocumentStateProvider } from 'src/DocumentState';
import Header from 'src/Header';
import Sidebar from 'src/Sidebar';
import Container from 'src/styled/Container';
import useDocument from 'src/useDocument';

export default function DocExplorer() {
  const { data, isLoading } = useDocument('1');

  if (isLoading) {
    // TODO: handle loading states better (show an spinner or something)
    return null;
  }

  return (
    <Container>
      <DocumentStateProvider document={data}>
        <Header />
        <DocumentReader document={data} />
        <Sidebar />
      </DocumentStateProvider>
    </Container>
  );
}
