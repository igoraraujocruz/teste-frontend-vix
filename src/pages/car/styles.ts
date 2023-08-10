import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #444;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;

  .description {
    margin-top: 1rem;
  }

  .characteristics {
    margin-top: 2rem;
    background: #444;
    color: #fff;
  }
`;
