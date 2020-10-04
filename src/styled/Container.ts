import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 320px;
  grid-template-rows: 75px 1fr min-content;
  grid-template-areas:
    'header sidebar'
    'document sidebar'
    'onboarding-banner sidebar';

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'document'
      'onboarding-banner';
  }
`;

export default Container;
