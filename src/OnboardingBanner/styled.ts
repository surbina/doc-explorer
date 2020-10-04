import styled from 'styled-components';

export const OnboardingBannerWrapper = styled.div`
  grid-area: onboarding-banner;

  border-top: 1px solid #f0f0f0;
  position: fixed;
  padding: 4rem 0;
  bottom: 16px;
  background-color: #fff;
  text-align: center;
  width: calc(100% - 352px);
  left: 32px;
  opacity: 1;
  visibility: visible;
  transition: all 0.4s cubic-bezier(0.15, 0.9, 0.34, 0.95);
`;

export const OnboardingBannerTitle = styled.h2`
  font-family: 'MSemiBold';
  font-size: 2.2rem;
  color: #313131;
  margin-bottom: 1.5rem;
  opacity: 1;
  visibility: visible;
  transform: translate3d(0, 0, 0);
  transition: all 0.4s cubic-bezier(0.15, 0.9, 0.34, 0.95) 0.1s;
`;

export const OnboardingBannerMessage = styled.p`
  margin: 0 !important;
  color: #a1a1a1;
  font-size: 1.6rem;
  line-height: 2.4rem !important;
  opacity: 1;
  visibility: visible;
  transform: translate3d(0, 0, 0);
  transition: all 0.4s cubic-bezier(0.15, 0.9, 0.34, 0.95) 0.2s;
`;
