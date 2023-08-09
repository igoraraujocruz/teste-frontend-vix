import { styled } from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

export const Content = styled.div`
  padding: 15px 9%;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 15px;
  width: 100%;
`;
