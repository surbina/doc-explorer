import { Player } from '@lottiefiles/react-lottie-player';
import * as React from 'react';

import { useDocumentState, useDocumentDispatch } from '../DocumentState';
import { DocumentStateActionTypes } from '../types';
import Outline from './Outline';
import { SidebarWrapper, UndoWrapper, RedoWrapper } from './styled';

// Unfortunately I can not use the same library for the lottie player as the source provided
// This is because it's using web-components which do not behave well with NextJS
// I tried replacing it with another library but it seems to be buggy (hover property is not working, the stop event is never fired)
// I don't have enough time to debug though, so I decided to do the following:
//    - Leave one implementation example of what I tried to do using the Undo button
//    - Replace the rest of the lottie animations with static images

function Sidebar() {
  const undoPlayer = React.useRef<any>(); // eslint-disable-line
  const sidebarRef = React.useRef(null);
  const { showOutline } = useDocumentState();
  const dispatch = useDocumentDispatch();

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        dispatch({
          type: DocumentStateActionTypes.SET_OUTLINE_STATE,
          showOutline: false,
        });
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch]);

  return (
    <SidebarWrapper isOpen={showOutline} ref={sidebarRef}>
      <UndoWrapper
        onMouseEnter={() => undoPlayer.current.play()}
        onMouseLeave={() => {
          undoPlayer.current.stop();
          undoPlayer.current.setSeeker(0);
        }}>
        <Player
          autoplay={false}
          src="https://assets1.lottiefiles.com/packages/lf20_UVTMOm.json"
          style={{ width: '28px', height: '28px' }}
          ref={undoPlayer}
        />
      </UndoWrapper>

      <RedoWrapper />

      <Outline />
    </SidebarWrapper>
  );
}

export default Sidebar;
