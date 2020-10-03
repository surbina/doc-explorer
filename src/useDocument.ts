import axios from 'axios';
import { useQuery } from 'react-query';
import { Document } from 'src/types';

async function fetchDocument(key: string, { id }: { id: string }) {
  const response = await axios.get(`/api/document/${id}`);

  return response.data;
}

function useDocument(id: string) {
  return useQuery<Document>(['document', { id }], fetchDocument, {
    staleTime: 1000 * 5,
    cacheTime: 1000 * 5,
  });
}

export default useDocument;
