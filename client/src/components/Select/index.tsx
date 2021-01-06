import React, { SelectHTMLAttributes, useMemo } from 'react';
import AsyncSelect from 'react-select';
import { Container } from './styles';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  data?: any;
  name?: string;
  handle(e: any): void;
}

const customTheme = (theme: any): any => {
  return {
    ...theme,
    colors: {
      ...theme.color,
      primary: '#4717f6',
    },
  };
};

export const Select: React.FC<ISelectProps> = ({ data, name, handle }) => {
  const customStyles = useMemo(
    () => ({
      option: (provided: any, state: any): any => ({
        ...provided,

        padding: 20,

        background: '#e7dfdd',
      }),
      control: (provided: any) => ({
        ...provided,
        background: '#e7dfdd',
        border: '2px solid transparent',
        height: '50px',
        borderRadius: '8px',
      }),
    }),
    [],
  );
  return (
    <Container>
      <AsyncSelect
        cacheOptions
        defaultOptions
        options={data}
        theme={customTheme}
        autoFocus
        onChange={handle}
        styles={customStyles}
        placeholder={name}
      />
    </Container>
  );
};
