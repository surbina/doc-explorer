import * as React from 'react';
import { Document } from 'src/types';

import Page from './Page';
import { DocumentReaderWrapper } from './styled';

interface DocumentReaderProps {
  document: Document;
}

function DocumentReader({
  document: { pages, features },
}: DocumentReaderProps) {
  return (
    <DocumentReaderWrapper>
      {pages.map((page) => {
        const featureIds = [
          ...(page.medications || []),
          ...(page.allergies || []),
          ...(page.problems || []),
          ...(page.flags || []),
        ];

        return (
          <Page
            key={page.id}
            pageAssetUrl={page.pageAssetUrl}
            features={featureIds.map((id) => features[id])}
          />
        );
      })}
    </DocumentReaderWrapper>
  );
}

export default DocumentReader;
