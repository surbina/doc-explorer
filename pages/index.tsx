import { useRouter } from 'next/router';
import * as React from 'react';

export default function DocExplorer() {
  const { push } = useRouter();

  React.useEffect(() => {
    push('/document/1');
  }, [push]);

  return null;
}
