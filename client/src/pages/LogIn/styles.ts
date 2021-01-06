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

  .backHome {
    position: absolute;
    top: 40px;
    left: 50px;
  }

  form {
    margin: 80px 0;
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
    color: #4717f6;

    transition: color 200ms;

    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
    &:hover {
      color: ${shade(0.2, '#4717f6')};
    }
  }
`;
