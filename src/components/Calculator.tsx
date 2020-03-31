/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import Buttons from './Buttons';
import Display from './Display';
import { evaluate } from 'mathjs';
import { useState } from 'react';

const calculatorStyle = css`
  background: #375cad;
  border: solid #294481;
  border-radius: 15px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  box-sizing: border-box;
  max-width: 330px;
  width: 90%;
`;

export default function Calculator() {
  const [currentInput, setCurrentInput] = useState('');
  const [historicInput, setHistoricInput] = useState('');

  const calculateResult = () => {
    const result = evaluate(historicInput + currentInput);
    setHistoricInput(`${historicInput}${currentInput} = ${result}`);
    setCurrentInput(result);
  };

  const modifierEntry = (value: string) => {
    if (historicInput.includes('=')) {
      setHistoricInput(currentInput + value);
    } else {
      setHistoricInput(historicInput + currentInput + value);
    }
    setCurrentInput('');
  };

  const numberEntry = (value: string) => {
    setCurrentInput(currentInput + value);
  };

  const allClear = () => {
    setHistoricInput('');
    setCurrentInput('');
  };

  const clearEntry = () => {
    setCurrentInput('');
  };

  return (
    <div css={calculatorStyle}>
      <Display currentInput={currentInput} historicInput={historicInput} />
      <Buttons
        calculateResult={calculateResult}
        modifierEntry={modifierEntry}
        numberEntry={numberEntry}
        allClear={allClear}
        clearEntry={clearEntry}
      />
    </div>
  );
}
