import * as React from 'react';
import { Page as PageType } from 'src/types';

import { PageWrapper, Image } from './styled';

interface PageProps {
  page: PageType;
}

function Page({ page }: PageProps) {
  return (
    <PageWrapper>
      <Image src={page.pageAssetUrl} alt="" />
    </PageWrapper>
  );
}

export default Page;
