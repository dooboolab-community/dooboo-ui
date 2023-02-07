import type {ProgressBarStyles, ProgressBarType} from 'dooboo-ui';
import React, {useEffect, useState} from 'react';

import {ProgressBar} from 'dooboo-ui';
import type {ReactElement} from 'react';

type Props = {
  type: ProgressBarType;
  styles?: ProgressBarStyles;
};

function ProgressBarDefault({type, styles}: Props): ReactElement {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const timeoutCallback = (): void => {
      setValue((prevProgress: number): number => {
        const nextProgress = prevProgress + 1;

        timeout = setTimeout(timeoutCallback, 100);

        if (prevProgress >= 100) {
          return 0;
        }

        return nextProgress;
      });
    };

    timeout = setTimeout(timeoutCallback, 100);

    return () => clearTimeout(timeout);
  }, []);

  return <ProgressBar value={value} type={type} styles={styles} />;
}

export default ProgressBarDefault;
