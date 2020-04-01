/** @jsx jsx */

import { MouseEvent, ReactNode } from 'react';
import { css, jsx } from '@emotion/core';

const buttonStyle = css`
  background-color: #333333;
  border-color: #333333;
  border-radius: 15px;
  color: #fff;
  min-height: 50px;
  outline: none;
  min-width: 55px;

  &:hover {
    cursor: pointer;
  }
`;

export interface IButtonProps {
  children: ReactNode;
  value?: string | string[] | number;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  id?: string;
}

export default function Button(props: IButtonProps) {
  return (
    <button css={buttonStyle} {...props}>
      {props.children}
    </button>
  );
}
