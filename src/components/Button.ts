import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: FC<ButtonProps> = ({ text, ...rest }) => {
  return <button {...rest}>{text}</button>;
};

export default Button;
