import AccordionStory, {AccordionStoryBaseProps} from '.';
import {EditText, SwitchToggle, Typography} from 'dooboo-ui';
import React, {useState} from 'react';

import {View} from 'react-native';

function Animation(baseProps: AccordionStoryBaseProps): React.ReactElement {
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
                container: {
                  width: 50,
                  height: 25,
                  borderRadius: 25,
                  padding: 5,
                },
                circle: {
                  width: 15,
                  height: 15,
                  borderRadius: 20,
                },
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

export default Animation;
