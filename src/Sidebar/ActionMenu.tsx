import * as React from 'react';

import {
  ActionMenuItem,
  ActionMenuItems,
  ActionMenuTitle,
  ActionMenuWrapper,
} from './styled';

interface ActionMenuProps {
  onCall: () => void;
  onMessage: () => void;
  onCalendar: () => void;
}

function ActionMenu({ onCall, onMessage, onCalendar }: ActionMenuProps) {
  const [showActions, setShowActions] = React.useState(false);

  return (
    <ActionMenuWrapper
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}>
      <ActionMenuTitle>Action</ActionMenuTitle>
      <ActionMenuItems isVisible={showActions}>
        <ActionMenuItem
          onClick={() => {
            setShowActions(false);
            onCall();
          }}>
          Call
        </ActionMenuItem>
        <ActionMenuItem
          onClick={() => {
            setShowActions(false);
            onMessage();
          }}>
          Message
        </ActionMenuItem>
        <ActionMenuItem
          onClick={() => {
            setShowActions(false);
            onCalendar();
          }}>
          Calendar
        </ActionMenuItem>
      </ActionMenuItems>
    </ActionMenuWrapper>
  );
}

export default ActionMenu;
