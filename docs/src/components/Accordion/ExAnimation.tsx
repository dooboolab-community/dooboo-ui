import React, {useState} from 'react';
import {View} from 'react-native';
import {css} from '@emotion/native';
import {EditText, SwitchToggle, Typography} from 'dooboo-ui';

import type {AccordionStoryProps} from '.';
import AccordionStory from '.';

function ExAnimation(baseProps: AccordionStoryProps): React.ReactElement {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [animDuration, onChangeAnimDuration] = useState(200);

  return (
    <>
      <AccordionStory
        shouldAnimate={shouldAnimate}
        animDuration={animDuration}
        {...baseProps}
      >
        <View style={{marginBottom: 50}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <SwitchToggle
              isOn={shouldAnimate}
              onPress={() => setShouldAnimate(!shouldAnimate)}
              styles={{
                container: css`
                  margin-left: 8px;
                  width: 36px;
                  height: 21px;
                  border-radius: 50px;
                  border-width: 2px;
                  padding: 4px;
                  border-width: 0px;
                `,
                circle: css`
                  width: 12px;
                  height: 12px;
                  border-radius: 50px;
                `,
              }}
            />
            <Typography.Body1 style={{marginLeft: 10}}>
              shouldAnimate
            </Typography.Body1>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              marginBottom: 10,
            }}
          >
            <Typography.Body1>animDuration</Typography.Body1>
            <EditText
              styles={{
                container: {
                  width: 200,
                },
              }}
              onChangeText={(animDration) =>
                Number(animDration) <= 1000 &&
                onChangeAnimDuration(Number(animDration))
              }
              value={String(animDuration)}
              placeholder="animDuration"
            />
          </View>
        </View>
      </AccordionStory>
    </>
  );
}

export default ExAnimation;
