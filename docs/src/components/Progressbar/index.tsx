import type {ProgressbarStyles, ProgressbarType} from 'dooboo-ui';
import {Progressbar} from 'dooboo-ui';
import type {FC} from 'react';
import React, {useEffect, useState} from 'react';

type Props = {
  type: ProgressbarType;
  styles?: ProgressbarStyles;
};

const ProgressbarDefault: FC<Props> = ({type, styles}) => {
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

  return <Progressbar value={value} type={type} styles={styles} />;
};

export default ProgressbarDefault;
