import * as React from 'react';

import { useDocumentState } from '../DocumentState';
import { Feature, DocumentStateActionTypes, FeaturesGroup } from '../types';
import GroupItem from './GroupItem';
import { GroupWrapper, GroupTitle } from './styled';

interface GroupProps {
  title: string;
  features: Array<Feature>;
  featureGroup: FeaturesGroup | null;
  footerActionType:
    | DocumentStateActionTypes.CONFIRM_FEATURE
    | DocumentStateActionTypes.UNCONFIRM_FEATURE;
}

function Group({
  title,
  features,
  featureGroup,
  footerActionType,
}: GroupProps) {
  const { selectedFeature } = useDocumentState();

  return (
    <GroupWrapper>
      <GroupTitle>{title}</GroupTitle>
      {features.map((feature) => (
        <GroupItem
          key={feature.id}
          isActive={selectedFeature === feature.id}
          feature={feature}
          footerActionType={footerActionType}
          featureGroup={featureGroup}
        />
      ))}
    </GroupWrapper>
  );
}

export default Group;
