import * as React from 'react';

import { useDocumentState } from '../DocumentState';
import { Feature } from '../types';
import GroupItem from './GroupItem';
import { GroupWrapper, GroupTitle } from './styled';

interface GroupProps {
  title: string;
  features: Array<Feature>;
}

function Group({ title, features }: GroupProps) {
  const { selectedFeature } = useDocumentState();

  return (
    <GroupWrapper>
      <GroupTitle>{title}</GroupTitle>
      {features.map((feature) => (
        <GroupItem
          key={feature.id}
          isActive={selectedFeature === feature.id}
          feature={feature}
        />
      ))}
    </GroupWrapper>
  );
}

export default Group;
