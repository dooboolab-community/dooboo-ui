// React import is needed for expo-web
import React, {useState} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styled, {css} from '@emotion/native';

import type {IconName} from './Icon';
import {Icon} from './Icon';

const Container = styled.View`
  flex-direction: row;
`;

const StarContainer = styled.View`
  padding: 1px;

  flex-direction: row;
`;

type Styles = {
  starContainer: StyleProp<ViewStyle>;
};

export type RatingProps = {
  testID?: string;
  styles?: Styles;
  style?: StyleProp<ViewStyle>;
  size?: number;
  iconType?: 'star' | 'dooboo';
  initialRating?: number;
  direction?: 'horizontal' | 'vertical';
  allowHalfRating?: boolean;
  onRatingUpdate?: (score: number) => void;
  disabled?: boolean;
  color?: string;
};

export function Rating({
  testID,
  style,
  styles,
  initialRating = 0,
  size = 24,
  iconType = 'star',
  onRatingUpdate,
  direction = 'horizontal',
  allowHalfRating = true,
  disabled = false,
  color,
}: RatingProps): JSX.Element {
  const [rating, setRating] = useState(initialRating);
  const iconPrefix = iconType === 'star' ? 'Star' : 'QuestBox';

  const handlePress = (newRating: number, halfPressed?: boolean): void => {
    const convertedRating = newRating + (!halfPressed ? 0.5 : 0);

    setRating(convertedRating);

    if (onRatingUpdate) {
      onRatingUpdate(convertedRating);
    }
  };

  const renderStarIcon = ({
    key,
    position,
  }: {
    key: string;
    position: number;
  }): JSX.Element => {
    const filled = rating >= position + (allowHalfRating ? 0.5 : 0);
    const iconName: IconName = filled ? `${iconPrefix}Fill` : `${iconPrefix}`;
    const halfFilled =
      rating >= position && rating < position + (allowHalfRating ? 0.5 : 0);

    return (
      <StarContainer
        key={key}
        style={[
          css`
            width: ${size}px;
          `,
          styles?.starContainer,
        ]}
        testID={testID}
      >
        {halfFilled && allowHalfRating ? (
          <View style={{position: 'absolute'}}>
            <Icon
              color={color}
              name={`${iconPrefix}` as IconName}
              size={size}
              style={{position: 'absolute'}}
            />
            <Icon
              color={color}
              name={`${iconPrefix}HalfFill` as IconName}
              size={size}
            />
          </View>
        ) : (
          <Icon
            color={color}
            name={iconName}
            size={size}
            style={{position: 'absolute'}}
          />
        )}
        <TouchableOpacity
          accessibilityRole="button"
          disabled={disabled}
          onPress={() => handlePress(position, true)}
        >
          <View
            style={{
              width: size / 2,
              height: size,
              backgroundColor: 'transparent',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityRole="button"
          disabled={disabled}
          onPress={() => handlePress(position)}
        >
          <View
            style={{
              width: size / 2,
              height: size,
              backgroundColor: 'transparent',
            }}
          />
        </TouchableOpacity>
      </StarContainer>
    );
  };

  return (
    <Container
      style={[
        css`
          flex-direction: ${direction === 'horizontal' ? 'row' : 'column'};
        `,
        style,
      ]}
    >
      {[...Array(5)].map((_, index) => {
        const position = index + (allowHalfRating ? 0.5 : 1);

        return renderStarIcon({key: `${_}-${index}`, position});
      })}
    </Container>
  );
}
