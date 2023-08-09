import { styled } from 'styled-components';

export const Container = styled.div`
  .results {
    padding: 2rem;
    height: 15rem;
    background: #fff;
    overflow-y: auto;

    .button {
      display: flex;
      justify-content: flex-end;
    }

    button {
      color: #444;
      background: none;
      border: none;
      font-size: 1.5rem;
    }
  }

  .car {
    display: flex;
    justify-content: space-between;
  }

  .car:not(:first-child) {
    margin-top: 2rem;
  }

  .description {
    h1,
    h2 {
      color: #444;
      font-size: 1.5rem;
    }
  }
`;

export const Content = styled.div`
  width: 25rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #fff;

  .loading {
    display: flex;
    justify-content: center;
    width: 4rem;
  }

  .svg {
    display: flex;
    justify-content: center;
    width: 4rem;
  }

  svg {
    width: 1rem;
    color: #444;
  }

  input {
    width: 20rem;
    height: 3rem;
    border: none;
  }
`;
