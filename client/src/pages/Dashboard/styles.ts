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
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  animation: ${animation} 1s;

  header {
    display: flex;
    align-items: center;
    span {
      font-size: 20px;
      margin-left: 24px;
      color: #e7dfdd;
    }

    a {
      width: 260px;
      margin-left: auto;
      margin-top: 0;
      color: #e7dfdd;

      transition: color 200ms;
    }
    a:hover {
      color: ${shade(0.2, '#e7dfdd')};
    }
    button {
      width: 60px;
      height: 60px;
      border-radius: 8px;
      margin-left: 24px;
      border: 1.5px solid #a239ca;
      background: transparent;
      transition: filter 200ms;
    }
    button:hover {
      filter: brightness(0.8);
    }
  }
  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
    color: #e7dfdd;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    list-style: none;
    li {
      background: #e7dfdd;
      padding: 24px;
      border-radius: 8px;
      position: relative;

      svg {
        background: transparent;
      }

      button {
        position: absolute;
        right: 24px;
        top: 24px;
        border: 0;
        background: transparent;
      }
      button:hover {
        opacity: 0.8;
      }
      strong {
        display: block;
        margin-bottom: 16px;
        color: #41414d;
      }
      p + strong {
        margin-top: 32px;
      }
      p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
      }
    }
  }
`;
