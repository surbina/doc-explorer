import * as React from 'react';
import { Document } from 'src/types';

import Page from './Page';
import { DocumentReaderWrapper } from './styled';

interface DocumentReaderProps {
  document: Document;
}

function DocumentReader({ document }: DocumentReaderProps) {
  return (
    <DocumentReaderWrapper>
      {document.pages.map((page) => (
        <Page key={page.id} page={page} />
      ))}
    </DocumentReaderWrapper>
  );
}

export default DocumentReader;
