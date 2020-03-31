/** @jsx jsx */

import { css, jsx } from '@emotion/core';

import Calculator from './components/Calculator';

const appStyle = css`
  align-items: center;
  background-color: #bbdefb;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 100vh;
`;

function App() {
  return (
    <div css={appStyle}>
      <Calculator />
    </div>
  );
}

export default App;
