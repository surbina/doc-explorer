import * as React from 'react';

import { Feature, DocumentStateActionTypes } from '../types';
import Group from './Group';

interface CompletedFeaturesProps {
  features: Array<Feature>;
}

function CompletedFeatures({ features }: CompletedFeaturesProps) {
  return (
    <Group
      title="Done"
      features={features}
      footerActionType={DocumentStateActionTypes.UNCONFIRM_FEATURE}
    />
  );
}

export default CompletedFeatures;
