import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 320px;
  grid-template-rows: 75px 1fr;
  grid-template-areas:
    'header sidebar'
    'document sidebar';
`;

export default Container;
