/** @jsx jsx */

import { css, jsx } from '@emotion/core';

const displayStyle = css`
  align-items: flex-end;
  background-color: #dbdacc;
  border: solid #294481;
  border-radius: 15px;
  color: #000;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  min-height: 80px;
  padding-left: 5px;
  padding-right: 5px;
`;

const inputStyle = css`
  overflow: hidden;
  text-align: end;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

const currentInputStyle = css`
  font-size: 1.5em;
`;

const historicInputStyle = css`
  font-size: 0.75em;
  margin-bottom: 5px;
  margin-top: auto;
`;

export interface IDisplayProps {
  currentInput: string;
  historicInput: string;
}

export default function Display(props: IDisplayProps) {
  return (
    <div css={displayStyle}>
      <span css={[inputStyle, currentInputStyle]} id="display">
        {props.currentInput}
      </span>
      <span css={[inputStyle, historicInputStyle]}>{props.historicInput}</span>
    </div>
  );
}
