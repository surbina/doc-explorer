import * as React from 'react';
import { useDocumentState } from 'src/DocumentState';

import { FeaturesGroup } from '../types';
import {
  OnboardingBannerWrapper,
  OnboardingBannerTitle,
  OnboardingBannerMessage,
} from './styled';

const onboardingMessage = {
  [FeaturesGroup.FLAG]: {
    title: 'Flag',
    message: [
      'Lens reads the patients existing medical',
      'records, and flags any mention of severe conditions.',
    ],
  },
  [FeaturesGroup.MEDICATION]: {
    title: 'Medications',
    message: [
      'Lens can recognize medications that have not',
      'been added to existing medical records.',
    ],
  },
  [FeaturesGroup.PROBLEM]: {
    title: 'Problem',
    message: [
      'Lens can recognize problems that are not included',
      'in the existing medical records.',
    ],
  },
};

function OnboardingBanner() {
  const [onboardingReady, setOnboardingReady] = React.useState({
    [FeaturesGroup.FLAG]: false,
    [FeaturesGroup.MEDICATION]: false,
    [FeaturesGroup.PROBLEM]: false,
    [FeaturesGroup.ALLERGY]: true, // I don't have a message for this, so I will just disable it
  });
  const bannerRef = React.useRef(null);
  const { showBanner } = useDocumentState();

  // Detect if the user clicked outside the banner in order to close
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (bannerRef.current && !bannerRef.current.contains(event.target)) {
        setOnboardingReady({
          ...onboardingReady,
          [showBanner]: true,
        });
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [bannerRef, onboardingReady, showBanner]);

  // If we already showed this onboarding message then we bail out
  if (!showBanner || onboardingReady[showBanner]) {
    return null;
  }

  const { title, message } = onboardingMessage[showBanner];

  return (
    <OnboardingBannerWrapper ref={bannerRef}>
      <OnboardingBannerTitle>{title}</OnboardingBannerTitle>
      {message.map((messageLine) => (
        <OnboardingBannerMessage key={messageLine}>
          {messageLine}
        </OnboardingBannerMessage>
      ))}
    </OnboardingBannerWrapper>
  );
}

export default OnboardingBanner;
