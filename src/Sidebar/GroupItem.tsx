import * as React from 'react';

import { useDocumentDispatch } from '../DocumentState';
import { Feature, DocumentStateActionTypes, FeaturesGroup } from '../types';
import ActionMenu from './ActionMenu';
import {
  GroupItemWrapper,
  GroupItemTitle,
  GroupItemSubContent,
  GroupItemSubContentFooter,
  GroupItemSubContentFooterButton,
  DeleteButton,
} from './styled';

interface GroupItemProps {
  isActive: boolean;
  feature: Feature;
  featureGroup: FeaturesGroup | null;
  footerActionType:
    | DocumentStateActionTypes.CONFIRM_FEATURE
    | DocumentStateActionTypes.UNCONFIRM_FEATURE;
}

function GroupItem({
  feature,
  featureGroup,
  isActive,
  footerActionType,
}: GroupItemProps) {
  const [showAction, setShowAction] = React.useState(false);

  const dispatch = useDocumentDispatch();

  return (
    <GroupItemWrapper
      isActive={isActive}
      onMouseEnter={() =>
        dispatch({
          type: DocumentStateActionTypes.HOVER_FEATURE,
          id: feature.id,
        })
      }
      onMouseLeave={() =>
        dispatch({
          type: DocumentStateActionTypes.HOVER_FEATURE,
          id: null,
        })
      }>
      <GroupItemTitle
        onClick={() =>
          dispatch({
            type: DocumentStateActionTypes.SELECT_FEATURE,
            id: feature.id,
            featureGroup,
          })
        }
        isActive={isActive}
        onMouseEnter={() => setShowAction(true)}
        onMouseLeave={() => setShowAction(false)}>
        {isActive && (
          <DeleteButton
            isVisible={showAction}
            onClick={() => {
              dispatch({
                type: DocumentStateActionTypes.REMOVE_FEATURE,
                id: feature.id,
              });
            }}
          />
        )}
        {feature.humanName}
        {isActive && showAction && (
          <ActionMenu
            onCall={() => console.log('Call!')}
            onMessage={() => console.log('Message!')}
            onCalendar={() => console.log('Calendar!')}
          />
        )}
      </GroupItemTitle>
      <GroupItemSubContent isActive={isActive}>
        <GroupItemSubContentFooter>
          <GroupItemSubContentFooterButton
            href="#"
            onClick={() => {
              dispatch({
                type: footerActionType,
                id: feature.id,
              });
            }}>
            {footerActionType === DocumentStateActionTypes.CONFIRM_FEATURE
              ? 'Confirm'
              : 'Remove'}
          </GroupItemSubContentFooterButton>
        </GroupItemSubContentFooter>
      </GroupItemSubContent>
    </GroupItemWrapper>
  );
}

export default GroupItem;
