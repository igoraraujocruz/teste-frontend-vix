import { styled } from 'styled-components';

export const Container = styled.main`
  weight: 100%;
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  .linkBack {
    display: flex;
    margin: -8rem 0 0 0;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 15rem;
    height: 3rem;
    border: 0;
  }

  button {
    background: #2d5498;
    margin-top: 2rem;
    color: #fff;
    padding: 1rem;
    border: 0;
  }
`;
