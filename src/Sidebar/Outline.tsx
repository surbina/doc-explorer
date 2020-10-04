import { useRouter } from 'next/router';
import * as React from 'react';

import { useDocumentState } from '../DocumentState';
import { Feature, FeaturesGroup, FeatureMap } from '../types';
import useDocument from '../useDocument';
import CompletedFeatures from './CompletedFeatures';
import PendingReviewFeatures from './PendingReviewFeatures';
import { OutlineTitle, TabContainer, Tab } from './styled';

function getPendingReviewFeaturesByGroup(
  pendingReviewFeatures: Array<string>,
  features: Record<string, Feature>
) {
  const groupedFeatures = {
    [FeaturesGroup.FLAG]: [],
    [FeaturesGroup.PROBLEM]: [],
    [FeaturesGroup.ALLERGY]: [],
    [FeaturesGroup.MEDICATION]: [],
  };

  pendingReviewFeatures.forEach((id) => {
    const feature = features[id];
    groupedFeatures[FeatureMap[feature.type]].push(feature);
  });

  return groupedFeatures;
}

enum TabsEnum {
  REVIEW = 'REVIEW',
  DONE = 'DONE',
}

function Outline() {
  const [currentTab, setCurrentTab] = React.useState(TabsEnum.REVIEW);
  const {
    query: { id },
  } = useRouter();
  const {
    data: { features },
  } = useDocument((id as string) || '1'); //
  const { pendingReviewFeatures, completedFeatures } = useDocumentState();

  return (
    <>
      <OutlineTitle>Outline</OutlineTitle>
      <TabContainer>
        <Tab
          onClick={() => setCurrentTab(TabsEnum.REVIEW)}
          active={currentTab === TabsEnum.REVIEW}>
          Review
        </Tab>
        <Tab
          onClick={() => setCurrentTab(TabsEnum.DONE)}
          active={currentTab === TabsEnum.DONE}>
          Done
        </Tab>
      </TabContainer>
      {currentTab === TabsEnum.REVIEW ? (
        <PendingReviewFeatures
          featureGroups={getPendingReviewFeaturesByGroup(
            pendingReviewFeatures,
            features
          )}
        />
      ) : (
        <CompletedFeatures
          features={completedFeatures.map((id) => features[id])}
        />
      )}
    </>
  );
}

export default Outline;
