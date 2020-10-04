import * as React from 'react';

import { Feature, FeaturesGroup } from '../types';
import Group from './Group';

interface PendingReviewFeaturesProps {
  featureGroups: {
    FLAG: Array<Feature>;
    PROBLEM: Array<Feature>;
    ALLERGY: Array<Feature>;
    MEDICATION: Array<Feature>;
  };
}

function PendingReviewFeatures({ featureGroups }: PendingReviewFeaturesProps) {
  const flags = featureGroups[FeaturesGroup.FLAG];
  const problems = featureGroups[FeaturesGroup.PROBLEM];
  const allergies = featureGroups[FeaturesGroup.ALLERGY];
  const medications = featureGroups[FeaturesGroup.MEDICATION];

  return (
    <>
      {flags.length > 0 && <Group title="Flag" features={flags} />}
      {problems.length > 0 && <Group title="Problem" features={problems} />}
      {allergies.length > 0 && <Group title="Allergy" features={allergies} />}
      {medications.length > 0 && (
        <Group title="Medication" features={medications} />
      )}
    </>
  );
}

export default PendingReviewFeatures;
