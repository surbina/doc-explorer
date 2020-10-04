import * as React from 'react';
import { Feature } from 'src/types';

import FeatureIndicator from './FeatureIndicator';
import { PageWrapper, Image } from './styled';

interface PageProps {
  pageAssetUrl: string;
  features: Array<Feature>;
}

function Page({ pageAssetUrl, features }: PageProps) {
  return (
    <PageWrapper>
      <Image src={pageAssetUrl} alt="" />
      {features.map((feature) => (
        <FeatureIndicator
          key={feature.id}
          id={feature.id}
          top={feature.meta.top}
          left={feature.meta.left}
        />
      ))}
    </PageWrapper>
  );
}

export default Page;
