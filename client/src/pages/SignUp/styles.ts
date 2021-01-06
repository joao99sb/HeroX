import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const animation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  animation: ${animation} 1s;

  form {
    margin: 80px 0 50px 0;
    width: 340px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    h1 {
      margin-bottom: 30px;
      color: #e7dfdd;
    }
  }
  a {
    color: #e7dfdd;
    display: block;
    transition: color 200ms;

    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
    &:hover {
      color: ${shade(0.2, '#e7dfdd')};
    }
  }
`;

export const StateField = styled.div`
  display: flex;
  width: 100%;
`;
