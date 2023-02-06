import {Button, LoadingIndicator} from '../../../../../main';

import type {ReactElement} from 'react';
import {Section} from '../../../../GlobalStyles';

function Loading(): ReactElement {
  return (
    <Section>
      <Button
        loading
        loadingElement={<LoadingIndicator size="small" color="yellow" />}
        style={{margin: 4}}
        // eslint-disable-next-line no-console
        onPress={() => console.log(`press loading button`)}
      />
    </Section>
  );
}

export default Loading;
