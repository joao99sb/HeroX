import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: #000;
  & + div {
    margin-left: 5px;
  }
  select {
    background: #e7dfdd;
    width: 100%;
    appearance: none;
    flex: 1;

    border-radius: 8px;
    border: 0;
    padding: 15px 23px;

    option {
      font-weight: 500;
    }
  }
`;
