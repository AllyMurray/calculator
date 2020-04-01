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

const arithmeticOperators = {
  add: '+',
  subtract: '-',
  multiply: '*',
  divide: '/',
  decimal: '.',
  equals: '='
};

export default function Calculator() {
  const [currentInput, setCurrentInput] = useState('0');
  const [historicInput, setHistoricInput] = useState('');

  const calculateResult = () => {
    if (
      historicInput === undefined ||
      currentInput === undefined ||
      historicInput.includes(arithmeticOperators.equals)
    ) {
      return;
    }

    const result = evaluate(historicInput + currentInput);
    setHistoricInput(`${historicInput}${currentInput} = ${result}`);
    setCurrentInput(result.toString());
  };

  const modifierEntry = (value: string) => {
    const lastCharEntered = historicInput.slice(-1) as any;

    // Don't allow the user to enter consecutive minus characters
    if (
      lastCharEntered === arithmeticOperators.subtract &&
      value === arithmeticOperators.subtract
    ) {
      return;
    }

    // Strip off any trailing modifiers
    let _historicInput = historicInput;
    if (
      historicInput.length !== 0 &&
      currentInput.length === 0 &&
      value !== arithmeticOperators.subtract &&
      isNaN(lastCharEntered)
    ) {
      // If the user previous entered a modifier followed by a minus the
      // second last character will also need replaced here.
      const sliceEnd = isNaN(
        historicInput.slice(historicInput.length - 2, -1) as any
      )
        ? -2
        : -1;

      _historicInput = historicInput.slice(0, sliceEnd);
    }

    if (historicInput.includes(arithmeticOperators.equals)) {
      setHistoricInput(currentInput + value);
    } else {
      setHistoricInput(_historicInput + currentInput + value);
    }
    setCurrentInput('');
  };

  const numberEntry = (value: string) => {
    setCurrentInput((currentInput === '0' ? '' : currentInput) + value);
  };

  const decimalEntry = () => {
    if (currentInput.includes(arithmeticOperators.decimal)) return;
    setCurrentInput(currentInput + arithmeticOperators.decimal);
  };

  const allClear = () => {
    setHistoricInput('');
    setCurrentInput('0');
  };

  const clearEntry = () => {
    setCurrentInput('0');
  };

  return (
    <div css={calculatorStyle}>
      <Display currentInput={currentInput} historicInput={historicInput} />
      <Buttons
        calculateResult={calculateResult}
        modifierEntry={modifierEntry}
        numberEntry={numberEntry}
        decimalEntry={decimalEntry}
        allClear={allClear}
        clearEntry={clearEntry}
      />
    </div>
  );
}
