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
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${animation} 1s;
  padding-bottom: 10px;
  > a {
    position: absolute;

    top: 50px;
    left: 30px;
    align-items: center;
    display: flex;
    align-items: center;
    transition: color 200ms;
    color: #4717f6;
    svg {
      margin-right: 10px;
    }
    &:hover {
      color: ${shade(0.2, '#4717f6')};
    }
  }
`;

export const Form = styled.div`
  margin-top: 100px;
  width: 100%;
  padding-bottom: 30px;
  height: auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #e7dfdd;
  width: 100%;
  min-height: 500px;
  padding: 30px;
  border-radius: 8px;

  align-items: center;

  h1 {
    color: #41414d;
    font-size: 50px;
    font-weight: 500;
    display: line;
  }

  .first {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    p {
      font-size: 20px;
      font-weight: 500;
      color: #41414d;
    }
  }

  .description {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    h2 {
      color: #41414d;
      align-self: center;
      margin-bottom: 10px;
    }
    p {
      left: 0;
      color: #000;
    }
  }

  .informations {
    display: flex;
    position: relative;
    width: 100%;
    margin-top: 20px;

    justify-content: space-between;
    p {
      font-size: 20px;
      font-weight: 500;
      color: #41414d;
    }
  }
`;
