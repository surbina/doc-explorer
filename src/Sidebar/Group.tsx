import * as React from 'react';

import { useDocumentState } from '../DocumentState';
import { Feature, DocumentStateActionTypes } from '../types';
import GroupItem from './GroupItem';
import { GroupWrapper, GroupTitle } from './styled';

interface GroupProps {
  title: string;
  features: Array<Feature>;
  footerActionType:
    | DocumentStateActionTypes.CONFIRM_FEATURE
    | DocumentStateActionTypes.UNCONFIRM_FEATURE;
}

function Group({ title, features, footerActionType }: GroupProps) {
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
        />
      ))}
    </GroupWrapper>
  );
}

export default Group;
