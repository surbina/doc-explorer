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

export const Dot = styled.span`
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;

  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 0 rgba(16, 104, 212, 0.4);
      box-shadow: 0 0 0 0 rgba(16, 104, 212, 0.4);
    }
    70% {
      -moz-box-shadow: 0 0 0 10px rgba(16, 104, 212, 0);
      box-shadow: 0 0 0 10px rgba(16, 104, 212, 0);
    }
    100% {
      -moz-box-shadow: 0 0 0 0 rgba(16, 104, 212, 0);
      box-shadow: 0 0 0 0 rgba(16, 104, 212, 0);
    }
  }

  background-color: ${({ isSelected }) => (isSelected ? '#1068d4' : '#fff')};
  position: absolute;
  height: 2rem;
  width: 2rem;
  border: 2px solid #fff;
  box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
    rgba(0, 0, 0, 0.18) 0px 2px 10px 3px;
  border-radius: 50%;
  display: block;
  z-index: 1;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.15, 0.9, 0.34, 0.95);

  &:after {
    border-radius: 50%;
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    height: calc(100% + 4px);
    width: calc(100% + 4px);
    transform: translateX(-50%) translateY(-50%);
    animation: pulse 2s infinite;
    opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
    visibility: ${({ isHovered }) => (isHovered ? 'visible' : 'hidden')};
  }
  ${({ isHovered }) => (isHovered ? 'transform: scale(1.3);' : '')}
`;
