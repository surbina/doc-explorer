import * as React from 'react';
import { Document, FeaturesGroup } from 'src/types';

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
        const extendedFeatures = [
          ...(page.medications || []).map((id) => ({
            ...features[id],
            group: FeaturesGroup.MEDICATION,
          })),
          ...(page.allergies || []).map((id) => ({
            ...features[id],
            group: FeaturesGroup.ALLERGY,
          })),
          ...(page.problems || []).map((id) => ({
            ...features[id],
            group: FeaturesGroup.PROBLEM,
          })),
          ...(page.flags || []).map((id) => ({
            ...features[id],
            group: FeaturesGroup.FLAG,
          })),
        ];

        return (
          <Page
            key={page.id}
            pageAssetUrl={page.pageAssetUrl}
            features={extendedFeatures}
          />
        );
      })}
    </DocumentReaderWrapper>
  );
}

export default DocumentReader;
