import { styled } from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  text-align: center;
  padding: 30px 20px;
  cursor: pointer;

  h1 {
    color: #444;
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.3rem;
  }
  img {
    width: 250px;
  }
`;

export const SnipperStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
