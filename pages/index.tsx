import axios from 'axios';
import * as React from 'react';
import { useQuery } from 'react-query';
import DocumentReader from 'src/DocumentReader';
import Header from 'src/Header';
import Sidebar from 'src/Sidebar';
import Container from 'src/styled/Container';
import { Document } from 'src/types';

async function fetchDocument(key: string, { id }: { id: string }) {
  const response = await axios.get(`/api/document/${id}`);

  return response.data;
}

export default function DocExplorer() {
  const { data, isLoading } = useQuery<Document>(
    ['document', { id: '1' }],
    fetchDocument
  );

  if (isLoading) {
    // TODO: handle loading states better (show an spinner or something)
    return null;
  }

  return (
    <Container>
      <Header />
      <DocumentReader document={data} />
      <Sidebar />
    </Container>
  );
}
