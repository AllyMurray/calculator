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
  decimalEntry: () => void;
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
      <Button css={clearButtonStyle} onClick={props.allClear} id="clear">
        AC
      </Button>
      <Button css={clearButtonStyle} onClick={props.clearEntry}>
        CE
      </Button>
      <Button value={'/'} onClick={handleModifierEntry} id="divide">
        &divide;
      </Button>
      <Button value={'*'} onClick={handleModifierEntry} id="multiply">
        x
      </Button>
      <Button value={'7'} onClick={handleNumberEntry} id="seven">
        7
      </Button>
      <Button value={'8'} onClick={handleNumberEntry} id="eight">
        8
      </Button>
      <Button value={'9'} onClick={handleNumberEntry} id="nine">
        9
      </Button>
      <Button value={'-'} onClick={handleModifierEntry} id="subtract">
        -
      </Button>
      <Button value={'4'} onClick={handleNumberEntry} id="four">
        4
      </Button>
      <Button value={'5'} onClick={handleNumberEntry} id="five">
        5
      </Button>
      <Button value={'6'} onClick={handleNumberEntry} id="six">
        6
      </Button>
      <Button value={'+'} onClick={handleModifierEntry} id="add">
        +
      </Button>
      <Button value={'1'} onClick={handleNumberEntry} id="one">
        1
      </Button>
      <Button value={'2'} onClick={handleNumberEntry} id="two">
        2
      </Button>
      <Button value={'3'} onClick={handleNumberEntry} id="three">
        3
      </Button>
      <Button css={tallButtonStyle} onClick={props.calculateResult} id="equals">
        =
      </Button>
      <Button
        css={wideButtonStyle}
        value={'0'}
        onClick={handleNumberEntry}
        id="zero"
      >
        0
      </Button>
      <Button onClick={props.decimalEntry} id="decimal">
        .
      </Button>
    </div>
  );
}
