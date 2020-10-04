import * as React from 'react';
import { Feature } from 'src/types';
import { FeaturesGroup } from 'src/types';

import FeatureIndicator from './FeatureIndicator';
import { PageWrapper, Image } from './styled';

type ExtendedFeature = Feature & {
  group: FeaturesGroup;
};

interface PageProps {
  pageAssetUrl: string;
  features: Array<ExtendedFeature>;
}

function Page({ pageAssetUrl, features }: PageProps) {
  return (
    <PageWrapper>
      <Image src={pageAssetUrl} alt="" />
      {features.map((feature) => (
        <FeatureIndicator
          key={feature.id}
          id={feature.id}
          featureGroup={feature.group}
          top={feature.meta.top}
          left={feature.meta.left}
        />
      ))}
    </PageWrapper>
  );
}

export default Page;
