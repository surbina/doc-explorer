import * as React from 'react';
import { useDocumentState } from 'src/DocumentState';

import { Dot } from './styled';

interface FeatureIndicatorProps {
  id: string;
  top: number;
  left: number;
}

function FeatureIndicator({ id, top, left }: FeatureIndicatorProps) {
  const { selectedFeature, hoveredFeature } = useDocumentState();
  const dotRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (id === selectedFeature) {
      dotRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id, selectedFeature, dotRef]);

  return (
    <Dot
      top={top}
      left={left}
      isSelected={id === selectedFeature}
      isHovered={id === hoveredFeature}
      ref={dotRef}
    />
  );
}

export default FeatureIndicator;
