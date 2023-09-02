import {css, Global} from '@emotion/react';

export default function GlobalStyles(): JSX.Element {
  return (
    <Global
      styles={css`
        input:autofill,
        input:autofill:hover,
        input:autofill:focus,
        input:autofill:active {
          -webkit-text-fill-color: #787878;
          box-shadow: 0 0 0px 1000px #ededed inset;
          transition: background-color 5000s ease-in-out 0s;
        }
        ::-webkit-scrollbar {
          display: none;
        }
      `}
    />
  );
}
