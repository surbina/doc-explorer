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

export const GroupWrapper = styled.div`
  margin-bottom: 3rem;
  transform: translateZ(0);
`;

export const GroupTitle = styled.a`
  display: table;
  padding-left: 3rem;
  text-transform: uppercase;
  font-family: 'MSemiBold';
  color: #a9a9a9;
  margin-bottom: 0.5rem;
  font-size: 0.975rem;
  letter-spacing: 1px;
`;

export const GroupItemWrapper = styled.div`
  margin: auto;
  transition: all 0.4s cubic-bezier(0.15, 0.9, 0.34, 0.95);
  width: ${({ isActive }) => (isActive ? '90%' : '100%')};
  transform: translateZ(0);
  max-height: ${({ isActive }) => (isActive ? '15rem' : '5rem')};
  position: relative;
  ${({ isActive }) =>
    isActive
      ? `
        box-shadow: -9px 10px 17px 0px rgba(243,243,243,1);
        padding-top: 1.5rem;
        z-index: 2;
        `
      : ''}
`;

export const GroupItemTitle = styled.span`
  cursor: pointer;
  display: table;
  width: 85%;
  font-size: 1.4rem;
  padding-left: 3rem;
  padding-top: 1.4rem;
  border-bottom: 1px solid
    ${({ isActive }) => (isActive ? '#f0f0f0' : 'transparent')};
  padding-bottom: 1.4rem;
  font-family: 'MMedium';
  color: #313131;
  position: relative;
  transition: all 0.2s cubic-bezier(0.15, 0.9, 0.34, 0.95);
  transform: translate3d(0, 0, 0);

  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? 'transparent' : '#f6f6f6'};
    border-color: #f6f6f6;
    padding-left: ${({ isActive }) => (isActive ? '4rem' : '3rem')};
  }
`;

export const GroupItemSubContent = styled.div`
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  transition: all 0.3s cubic-bezier(0.15, 0.9, 0.34, 0.95);
`;

export const GroupItemSubContentFooter = styled.div`
  display: flex;
  padding: 2rem 3rem;
  justify-content: flex-end;
`;

export const GroupItemSubContentFooterButton = styled.a`
  font-family: 'MSemiBold';
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #303030;
`;

export const DeleteButton = styled.span`
  display: block;
  position: absolute;
  left: 1.5rem;
  top: 40%;
  transform: translate3d(0, -50%, 0);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transition: all 0.3s cubic-bezier(0.15, 0.9, 0.34, 0.95);
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    height: 1.3rem;
    width: 1.3rem;
    background: url(/trash.svg) no-repeat center;
    background-size: contain;
  }
`;

export const ActionMenuWrapper = styled.span`
  position: absolute;
  right: 3rem;
  opacity: 1;
  visibility: visible;
  transition: all 0.3s cubic-bezier(0.15, 0.9, 0.34, 0.95);
`;

export const ActionMenuTitle = styled.span`
  text-transform: uppercase;
  font-size: 9.75px;
  color: #a9a9a9;
  font-family: 'MSemiBold';
  letter-spacing: 1px;
  transition: all 0.3s cubic-bezier(0.15, 0.9, 0.34, 0.95);
  &:hover {
    color: #313131;
  }
`;

export const ActionMenuItems = styled.span`
  box-shadow: -9px 10px 17px 0px rgba(243, 243, 243, 1);
  position: absolute;
  width: 16rem;
  background-color: #fff;
  right: 0;
  top: 2rem;
  border-radius: 4px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  z-index: 5;
`;

export const ActionMenuItem = styled.span`
  display: flex;
  justify-content: space-between;
  font-family: 'MMedium';
  font-size: 1.2rem;
  color: #a1a1a1;
  height: 4rem;
  line-height: 4rem;
  padding-right: 3rem;
  padding-left: 3rem;

  &:hover {
    background-color: #f6f6f6;
  }
`;
