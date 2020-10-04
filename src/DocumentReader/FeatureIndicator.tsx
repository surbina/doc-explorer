import * as React from 'react';
import { useDocumentState, useDocumentDispatch } from 'src/DocumentState';
import { DocumentStateActionTypes, FeaturesGroup } from 'src/types';

import { Dot } from './styled';

interface FeatureIndicatorProps {
  id: string;
  featureGroup: FeaturesGroup;
  top: number;
  left: number;
}

function FeatureIndicator({
  id,
  top,
  left,
  featureGroup,
}: FeatureIndicatorProps) {
  const { selectedFeature, hoveredFeature } = useDocumentState();
  const dispatch = useDocumentDispatch();
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
      onMouseEnter={() =>
        dispatch({
          type: DocumentStateActionTypes.HOVER_FEATURE,
          id,
        })
      }
      onMouseLeave={() =>
        dispatch({
          type: DocumentStateActionTypes.HOVER_FEATURE,
          id: null,
        })
      }
      onClick={() =>
        dispatch({
          type: DocumentStateActionTypes.SELECT_FEATURE,
          id,
          featureGroup,
        })
      }
    />
  );
}

export default FeatureIndicator;
