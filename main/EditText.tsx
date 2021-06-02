import {DoobooTheme, light} from './theme';
import {Platform, Text, TextInput, View} from 'react-native';
import React, {FC, useRef, useState} from 'react';
import type {
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

import {useHover} from 'react-native-web-hooks';
import {withTheme} from '@emotion/react';

type Styles = {
  container?: StyleProp<ViewStyle>;
  hovered?: StyleProp<ViewStyle>;
  labelText?: StyleProp<TextStyle>;
  labelTextHovered?: StyleProp<TextStyle>;
  input?: StyleProp<TextStyle>;
  errorText?: StyleProp<TextStyle>;
};

export type EditTextProps = {
  testID?: TextInputProps['testID'];
  theme?: DoobooTheme;
  textInputProps?: TextInputProps;
  style?: StyleProp<ViewStyle>;
  styles?: Styles;
  labelText?: string;
  errorText?: string;
  value?: TextInputProps['value'];
  onChange?: TextInputProps['onChange'];
  onChangeText?: TextInputProps['onChangeText'];
  placeholder?: TextInputProps['placeholder'];
  placeholderColor?: TextInputProps['placeholderTextColor'];
  onFocus?: TextInputProps['onFocus'] | undefined;
  onBlur?: TextInputProps['onBlur'] | undefined;
  editable?: TextInputProps['editable'];
  autoCapitalize?: TextInputProps['autoCapitalize'];
  secureTextEntry?: TextInputProps['secureTextEntry'];
  onSubmitEditing?: TextInputProps['onSubmitEditing'];
  focusColor?: string;
  hoverColor?: string;
  errorColor?: string;
  disableColor?: string;
  labelColor?: string;
  type?: 'row' | 'column';
};

const Component: FC<EditTextProps & {theme: DoobooTheme}> = ({
  theme,
  testID,
  textInputProps,
  style,
  styles,
  labelText = '',
  errorText = '',
  value = '',
  placeholder,
  onChange,
  onChangeText,
  onFocus,
  onBlur,
  onSubmitEditing,
  autoCapitalize = 'none',
  secureTextEntry = false,
  editable = true,
  placeholderColor = theme.placeholder,
  focusColor = theme.primary,
  hoverColor = theme.secondary,
  errorColor = theme.danger,
  disableColor = theme.disabled,
  labelColor = theme.placeholder,
  type = 'row',
}) => {
  const [focused, setFocused] = useState(false);
  const ref = useRef<View>(null);
  const hovered = useHover(ref);

  const borderColor = theme.text;
  const hoveredColor = theme.primary;
  const textColor = theme.text;

  // return (
  //   <TextInput
  //     value={''}
  //     placeholder={'Environment'}
  //     placeholderTextColor="white"
  //     style={{
  //       marginTop: 20,
  //       marginBottom: 52,
  //       paddingHorizontal: 36,
  //       color: 'white',
  //     }}
  //     // style={styles.input}
  //     // underlineColorAndroid='rgba(0,0,0,0)'
  //   />
  // );

  const compositeStyles: Styles =
    type === 'row'
      ? {
          container: [
            {
              alignSelf: 'stretch',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomWidth: 0.5,
              borderBottomColor: borderColor,
            },
            styles?.container,
          ],
          hovered: [
            {
              borderBottomColor: hoveredColor,
              borderBottomWidth: 1,
            },
            styles?.hovered,
          ],
          labelText: [
            {
              fontSize: 14,
              color: labelColor,
              width: 100,
            },
            styles?.labelText,
          ],
          labelTextHovered: [
            {
              color: hoveredColor,
            },
            styles?.labelTextHovered,
          ],
          input: [
            {
              paddingVertical: 10,
              paddingHorizontal: 8,
              fontSize: 14,
              fontWeight: 'bold',
              flex: 1,
              // color: !editable ? disableColor : textColor,
            },
            styles?.input,
          ],
          errorText: [
            {
              marginTop: 4,
              fontSize: 12,
              color: errorColor,
            },
            styles?.errorText,
          ],
        }
      : {
          container: [
            {
              alignSelf: 'stretch',
              justifyContent: 'space-between',
              borderBottomWidth: focused || errorText ? 1 : 0.5,
              borderBottomColor: borderColor,

              flexDirection: 'column',
            },
            styles?.container,
          ],
          hovered: [
            {
              borderBottomWidth: 0.5,
              borderBottomColor: hoveredColor,
            },
            styles?.hovered,
          ],
          labelText: [
            {
              paddingHorizontal: 4,
              fontSize: 14,
              color: labelColor,
            },
            styles?.labelText,
          ],
          labelTextHovered: [
            {
              paddingHorizontal: 4,
              color: hoveredColor,
            },
            styles?.labelTextHovered,
          ],
          input: [
            {
              paddingHorizontal: 10,
              paddingVertical: 10,
              fontSize: 14,
              fontWeight: 'bold',
              color: !editable ? disableColor : textColor,
            },
            styles?.input,
          ],
          errorText: [
            {
              marginTop: 8,
              paddingHorizontal: 10,
              fontSize: 12,
              color: errorColor,
            },
            styles?.errorText,
          ],
        };

  return (
    <View
      testID="container-id"
      ref={Platform.select({
        web: ref,
        default: undefined,
      })}
      style={[{alignSelf: 'stretch', flexDirection: 'column'}, style]}>
      <View
        style={[
          compositeStyles.container,
          editable && hovered && [compositeStyles.hovered, styles?.hovered],
          {
            borderColor: !editable
              ? disableColor
              : hovered
              ? hoverColor
              : errorText
              ? errorColor
              : focused
              ? focusColor
              : borderColor,
            borderBottomColor: !editable
              ? disableColor
              : hovered
              ? hoverColor
              : errorText
              ? errorColor
              : focused
              ? focusColor
              : borderColor,
          },
        ]}>
        {labelText ? (
          <Text
            style={[
              compositeStyles.labelText,
              styles?.labelText,
              editable && hovered
                ? [compositeStyles.labelTextHovered, styles?.labelTextHovered]
                : {
                    color: !editable
                      ? disableColor
                      : errorText
                      ? errorColor
                      : focused
                      ? focusColor
                      : disableColor,
                  },
            ]}>
            {labelText}
          </Text>
        ) : null}
        <TextInput
          {...textInputProps}
          testID={testID}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
          style={[
            compositeStyles.input,
            styles?.input,
            // @ts-ignore
            Platform.OS === 'web' && {outlineWidth: 0},
          ]}
          editable={editable}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          onChange={onChange}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
      {editable ? (
        <Text
          style={[
            compositeStyles.errorText,
            styles?.errorText,
            {color: errorColor},
          ]}>
          {errorText}
        </Text>
      ) : null}
    </View>
  );
};

Component.defaultProps = {theme: light};

export const EditText = withTheme(Component);
