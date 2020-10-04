import * as React from 'react';

import { useDocumentDispatch } from '../DocumentState';
import { Feature, DocumentStateActionTypes } from '../types';
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
}

function GroupItem({ feature, isActive }: GroupItemProps) {
  const [showAction, setShowAction] = React.useState(false);

  const dispatch = useDocumentDispatch();

  return (
    <GroupItemWrapper isActive={isActive}>
      <GroupItemTitle
        onClick={() =>
          dispatch({
            type: DocumentStateActionTypes.SELECT_FEATURE,
            id: feature.id,
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
                type: DocumentStateActionTypes.CONFIRM_FEATURE,
                id: feature.id,
              });
            }}>
            Confirm
          </GroupItemSubContentFooterButton>
        </GroupItemSubContentFooter>
      </GroupItemSubContent>
    </GroupItemWrapper>
  );
}

export default GroupItem;
