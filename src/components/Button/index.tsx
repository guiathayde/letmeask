import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  theme?: 'light' | 'dark';
};

export function Button({ isOutlined = false, theme, ...props }: ButtonProps) {
  return (
    <Container
      className={`button ${isOutlined ? 'outlined' : ''} ${theme}`}
      {...props}
    />
  );
}
