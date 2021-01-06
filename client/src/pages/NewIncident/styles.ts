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
  align-items: center;
  justify-content: center;

  animation: ${animation} 1s;

  .content {
    width: 100%;
    padding: 96px;
    background: transparent;

    border-radius: 8px;
    display: flex;
    justify-content: space-between;

    section {
      width: 100%;
      max-width: 380px;

      h1 {
        margin: 64px 0 20px;
        font-size: 32px;
      }

      p {
        font-size: 18px;
        color: #e7dfdd;
        line-height: 32px;
      }
      .link {
        display: flex;
        color: #737380;

        transition: color 200ms;
        align-items: center;
        margin-top: 40px;
        font-size: 18px;
        font-weight: 500;
        text-decoration: none;
        &:hover {
          color: ${shade(0.2, '#737380')};
        }
      }
    }
    form {
      width: 100%;
      max-width: 450px;
      display: flex;
      flex-direction: column;

      textarea {
        margin: 8px 0;
      }
    }
  }
  #value {
  }
`;
