import type {ReactElement} from 'react';
import React, {useEffect, useState} from 'react';
import type {ProgressBarStyles, ProgressBarType} from 'dooboo-ui';
import {DoobooProvider, ProgressBar, useDooboo} from 'dooboo-ui';
import {useDarkMode} from 'storybook-dark-mode';

type Props = {
  type: ProgressBarType;
  styles?: ProgressBarStyles;
};

export function StoryWrapper({type, styles}: Props): ReactElement {
  const {themeType, changeThemeType} = useDooboo();
  const isDark = useDarkMode();
  const storybookTheme = isDark ? 'dark' : 'light';
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

  useEffect(() => {
    if (storybookTheme !== themeType) {
      changeThemeType();
    }
  }, [changeThemeType, storybookTheme, themeType]);

  return <ProgressBar value={value} type={type} styles={styles} />;
}

export default function ProgressBarDefault({
  type,
  styles,
}: Props): ReactElement {
  const isDark = useDarkMode();

  return (
    <DoobooProvider themeConfig={{initialThemeType: isDark ? 'dark' : 'light'}}>
      <StoryWrapper type={type} styles={styles} />
    </DoobooProvider>
  );
}
