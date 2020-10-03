import * as React from 'react';

import { OutlineTitle, TabContainer, Tab } from './styled';

enum TabsEnum {
  REVIEW = 'REVIEW',
  DONE = 'DONE',
}

function Outline() {
  const [currentTab, setCurrentTab] = React.useState(TabsEnum.REVIEW);

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
      {currentTab === TabsEnum.REVIEW ? 'Show review' : 'Show done'}
    </>
  );
}

export default Outline;
