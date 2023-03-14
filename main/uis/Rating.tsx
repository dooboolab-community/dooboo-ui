// React import is needed for expo-web
import React, {useState} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import styled, {css} from '@emotion/native';

import {Icon} from './Icon';
import type {ReactElement} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View} from 'react-native';

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
  onRatingUpdate,
  direction = 'horizontal',
  allowHalfRating = true,
  disabled = false,
  color,
}: RatingProps): ReactElement {
  const [rating, setRating] = useState(initialRating);

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
  }): ReactElement => {
    const filled = rating >= position + (allowHalfRating ? 0.5 : 0);
    const iconName = filled ? 'Star' : 'StarAlt';
    const halfFilled =
      rating >= position && rating < position + (allowHalfRating ? 0.5 : 0);

    return (
      <StarContainer
        key={key}
        testID={testID}
        style={[
          css`
            width: ${size}px;
          `,
          styles?.starContainer,
        ]}
      >
        {halfFilled && allowHalfRating ? (
          <View style={{position: 'absolute'}}>
            <Icon
              name="StarAlt"
              size={size}
              style={{position: 'absolute'}}
              color={color}
            />
            <Icon name="StarHalf" size={size} color={color} />
          </View>
        ) : (
          <Icon
            name={iconName}
            size={size}
            style={{position: 'absolute'}}
            color={color}
          />
        )}
        <TouchableOpacity
          accessibilityRole={'button'}
          onPress={() => handlePress(position, true)}
          disabled={disabled}
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
          accessibilityRole={'button'}
          onPress={() => handlePress(position)}
          disabled={disabled}
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
