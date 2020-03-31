/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import Button from './Button';
import { MouseEvent } from 'react';

const buttonsStyle = css`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(4, auto);
  padding: 1rem;
`;

const clearButtonStyle = css`
  background-color: #b52d2d;
  border-color: #b52d2d;
`;

const wideButtonStyle = css`
  grid-column-start: span 2;
`;

const tallButtonStyle = css`
  grid-row-start: span 2;
`;

export interface IButtonsProps {
  calculateResult: () => void;
  modifierEntry: (value: string) => void;
  numberEntry: (value: string) => void;
  allClear: () => void;
  clearEntry: () => void;
}

export default function Buttons(props: IButtonsProps) {
  const handleNumberEntry = (e: MouseEvent<HTMLButtonElement>) =>
    props.numberEntry((e.target as HTMLButtonElement).value);

  const handleModifierEntry = (e: MouseEvent<HTMLButtonElement>) =>
    props.modifierEntry((e.target as HTMLButtonElement).value);

  return (
    <div css={buttonsStyle}>
      <Button css={clearButtonStyle} onClick={props.allClear}>
        AC
      </Button>
      <Button css={clearButtonStyle} onClick={props.clearEntry}>
        CE
      </Button>
      <Button value={'/'} onClick={handleModifierEntry}>
        &divide;
      </Button>
      <Button value={'*'} onClick={handleModifierEntry}>
        x
      </Button>
      <Button value={7} onClick={handleNumberEntry}>
        7
      </Button>
      <Button value={8} onClick={handleNumberEntry}>
        8
      </Button>
      <Button value={9} onClick={handleNumberEntry}>
        9
      </Button>
      <Button value={'-'} onClick={handleModifierEntry}>
        -
      </Button>
      <Button value={4} onClick={handleNumberEntry}>
        4
      </Button>
      <Button value={5} onClick={handleNumberEntry}>
        5
      </Button>
      <Button value={6} onClick={handleNumberEntry}>
        6
      </Button>
      <Button value={'+'} onClick={handleModifierEntry}>
        +
      </Button>
      <Button value={1} onClick={handleNumberEntry}>
        1
      </Button>
      <Button value={2} onClick={handleNumberEntry}>
        2
      </Button>
      <Button value={3} onClick={handleNumberEntry}>
        3
      </Button>
      <Button css={tallButtonStyle} onClick={props.calculateResult}>
        =
      </Button>
      <Button css={wideButtonStyle} value={0} onClick={handleNumberEntry}>
        0
      </Button>
      <Button value={'.'} onClick={handleNumberEntry}>
        .
      </Button>
    </div>
  );
}
