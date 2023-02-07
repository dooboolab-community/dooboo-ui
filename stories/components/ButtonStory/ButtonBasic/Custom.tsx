import {Button} from '../../../../main';
// Caveat: Expo web needs React to be imported
import React from 'react';
import type {ReactElement} from 'react';
import {StorySection} from '../../../GlobalStyles';
import {css} from '@emotion/native';

function Custom(): ReactElement {
  return (
    <StorySection>
      <Button
        type="solid"
        text="ENABLED"
        style={{margin: 4}}
        // eslint-disable-next-line no-console
        onPress={() => console.log(`press enabled button`)}
        styles={{
          container: css`
            background-color: #449944;
            padding: 12px 12px;
          `,
          text: {color: '#fff'},
          disabled: {backgroundColor: '#efefef'},
          disabledText: {color: '#ccc'},
        }}
      />

      <Button
        type="solid"
        text="DISABLED"
        disabled
        style={{margin: 4}}
        styles={{
          container: css`
            background-color: #449944;
            padding: 12px 12px;
          `,
          text: {color: '#fff'},
          disabled: {backgroundColor: '#efefef'},
          disabledText: {color: '#ccc'},
        }}
      />
    </StorySection>
  );
}

export default Custom;
