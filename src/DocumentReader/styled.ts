import styled from 'styled-components';

export const DocumentReaderWrapper = styled.main`
  grid-area: document;
  overflow-y: auto;
`;

export const PageWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 10px 4px 4px rgba(245, 245, 245, 0.8);
  width: 48%;
  margin: 3.2rem auto;
  position: relative;
  transform-origin: top center;
  transition: all 0.5s cubic-bezier(0.15, 0.9, 0.34, 0.95);
  transform: translateZ(0);
`;

export const Image = styled.img`
  max-width: 100%;
`;
