import {IconButton, LoadingIndicator} from '../../../../../main';

import type {ReactElement} from 'react';
import {Section} from '../../../../GlobalStyles';

function LoadingElement(): ReactElement {
  return (
    <Section>
      <IconButton
        loading
        loadingElement={<LoadingIndicator size="small" color="yellow" />}
        style={{padding: 4}}
      />
    </Section>
  );
}

export default LoadingElement;
