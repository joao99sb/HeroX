import styled, { keyframes } from 'styled-components';

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
  .scroll {
    ::-webkit-scrollbar {
      width: 8px;
    }
    height: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: 25px;
  margin-top: 80px;
  background: transparent;
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  a {
    color: #fff;
  }
`;

export const List = styled.div`
  width: 700px;
  height: 150px;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  font-weight: 500;
  color: #41414d;
  transition: transform 0.2s;
  margin-left: 10px;

  display: flex;
  justify-content: space-between;

  .first {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .second {
    top: 0;
  }

  &:hover {
    transform: translateX(10px);
  }
`;

export const Incidents = styled.div`
  overflow-y: scroll;
  width: 800px;
  height: 500px;

  ::-webkit-scrollbar {
    width: 8px;
  }
`;
