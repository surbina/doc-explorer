import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  grid-area: header;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
`;

export const Button = styled.a`
  box-sizing: border-box;
  height: 38px;
  margin-left: 10px;
  background-color: #f6f6f6;
  border-radius: 5px;
  color: #303030;
  font-family: 'MSemiBold';
  font-size: 1.25rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 1rem 1.5rem;
`;
