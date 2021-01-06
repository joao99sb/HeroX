import styled, { css } from 'styled-components';
import { Tooltip } from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isFailed: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #e7dfdd;
  border-radius: 8px;
  padding: 5px;
  width: 100%;
  height: 200px;
  color: #0e0b16;
  border: 3px solid #e7dfdd;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 10px;
  }
  ${(props) =>
    props.isFailed &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #4117f6;
      border-color: #4117f6;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #4117f6;
    `}


  textarea {
    background: transparent;
    border: 0;
    height: 80%;
    flex: 1;
    align-items: center;
    padding: 16px;
    font-weight: 500;
    color: #212121;
    resize: inherit;
  }
  svg {
    margin-right: 16px;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
`;
