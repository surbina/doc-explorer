import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  grid-area: sidebar;
  overflow: auto;
  padding-top: 7.5rem;
  transform: translateZ(0);
  border-left: 1px solid #f0f0f0;
`;

// Styled migrated from the provided source code
export const UndoWrapper = styled.div`
  position: absolute;
  top: 3rem;
  right: 7rem;
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    left: 4px;
    height: 100%;
    width: 100%;
    background: url(/undo.svg) no-repeat center;
    background-size: contain;
  }

  &:hover {
    &:before {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

// Styled migrated from the provided source code
export const RedoWrapper = styled.div`
  position: absolute;
  top: 3rem;
  right: 2rem;
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    left: 5px;
    height: 100%;
    width: 100%;
    background: url(/redo.svg) no-repeat center;
    background-size: contain;
  }
`;

export const OutlineTitle = styled.h3`
  margin-left: 3rem;
`;

export const TabContainer = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

// Styled migrated from the provided source code
export const Tab = styled.a`
  border-bottom: 1px solid #f0f0f0;
  color: ${({ active }) => (active ? '#313131' : '#767676')};
  background-color: ${({ active }) => (active ? '#f6f6f6' : 'inherit')};
  font-family: 'MMedium';
  height: 5rem;
  width: 50%;
  font-size: 1.4rem;
  text-align: center;
  line-height: 5rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.15, 0.9, 0.34, 0.95);

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: #313131;
    opacity: ${({ active }) => (active ? 1 : 0)};
    visibility: ${({ active }) => (active ? 'visible' : 'hidden')}hidden;
    transition: all 0.4s cubic-bezier(0.15, 0.9, 0.34, 0.95);
  }

  &:hover {
    &:after {
      opacity: 1;
      visibility: visible;
    }
  }
`;
