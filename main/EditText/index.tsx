import type {FC, LegacyRef, ReactElement} from 'react';
import {Platform, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import type {
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

import {useHover} from 'react-native-web-hooks';
import {useTheme} from '@dooboo-ui/theme';

type Styles = {
  container?: StyleProp<ViewStyle>;
  label?: StyleProp<TextStyle>;
  input?: StyleProp<TextStyle>;
  error?: StyleProp<TextStyle>;
};

export type EditTextProps = {
  testID?: TextInputProps['testID'];
  inputRef?: LegacyRef<TextInput>;

  style?: StyleProp<ViewStyle>;
  styles?: Styles;

  // Components
  label?: string | ReactElement;
  input?: string | ReactElement;
  error?: string | ReactElement;
  direction?: 'row' | 'column';
  decoration?: 'underline' | 'boxed';

  value?: TextInputProps['value'];
  multiline?: TextInputProps['multiline'];
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

  textInputProps?: Omit<
    'TextInputProps',
    | 'value'
    | 'onChange'
    | 'multiline'
    | 'onChange'
    | 'onChangeText'
    | 'placeholder'
    | 'placeholderTextColor'
    | 'onFocus'
    | 'onBlur'
    | 'editable'
    | 'autoCapitalize'
    | 'secureTextEntry'
    | 'onSubmitEditing'
  >;
};

export const EditText: FC<EditTextProps> = (props) => {
  const {
    testID,
    inputRef,
    textInputProps,
    style,
    styles,
    label,
    error,
    multiline = false,
    value = '',
    placeholder,
    placeholderColor,
    onChange,
    onChangeText,
    onFocus,
    onBlur,
    onSubmitEditing,
    autoCapitalize = 'none',
    secureTextEntry = false,
    editable = true,
    direction = 'column',
    decoration = 'underline',
  } = props;

  const {theme} = useTheme();

  const [focused, setFocused] = useState(false);
  const ref = useRef<View>(null);
  const hovered = useHover(ref);
  // `focused` or `hovered` has less priority than `error`
  const focusedOrHovered = (focused || hovered) && !error;

  const containerStyle: ViewStyle = {
    flexDirection: direction,
  };

  const inputColor = !editable
    ? theme.text.disabled
    : error
    ? theme.text.validation
    : focusedOrHovered
    ? theme.text.default
    : theme.text.placeholder;

  const labelColor = !editable
    ? theme.text.disabled
    : error
    ? theme.text.validation
    : focusedOrHovered
    ? theme.text.default
    : theme.text.placeholder;

  return (
    <View
      testID="edit-text"
      ref={Platform.select({web: ref, default: undefined})}
      style={[
        {alignSelf: 'stretch', padding: 12, flexDirection: 'column'},
        style,
      ]}
    >
      <View
        testID="container"
        style={[
          containerStyle,
          {
            flexDirection: direction,
            alignItems: direction === 'row' ? 'center' : 'flex-start',
            borderColor: inputColor,
            paddingVertical: 12,
            paddingHorizontal: 10,
          },
          decoration === 'boxed'
            ? {borderWidth: 1, paddingHorizontal: 12}
            : {borderBottomWidth: 1},
          styles?.container,
        ]}
      >
        {typeof label === 'string' ? (
          <Text
            style={[
              {color: labelColor},
              focusedOrHovered && {
                color: theme.text.default,
              },
              styles?.label,
            ]}
          >
            {label}
          </Text>
        ) : label ? (
          label
        ) : null}
        <TextInput
          testID={testID}
          ref={inputRef}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
          style={[
            // Stretch input in order to make remaining space clickable
            {flex: 1, alignSelf: 'stretch'},
            // @ts-ignore
            Platform.OS === 'web' && {outlineWidth: 0},
            direction === 'column' ? {paddingTop: 12} : {paddingLeft: 12},
            {color: inputColor},
            styles?.input,
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
          multiline={multiline}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={theme.text.placeholder || placeholderColor}
          onChange={onChange}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          {...textInputProps}
        />
      </View>
      {error && typeof error === 'string' ? (
        <Text
          style={[
            {color: theme.text.validation},
            {marginTop: 8, marginHorizontal: 10},
            styles?.error,
          ]}
        >
          {error}
        </Text>
      ) : error ? (
        error
      ) : null}

      {/* {textInputProps?.maxLength && (
            <Text
            // style={
            //   value.length < textInputProps.maxLength
            //     ? compositeStyles.counter
            //     : [compositeStyles.errorText, {color: errorColor}]
            // }
            >{`${value.length}/${textInputProps.maxLength}`}</Text>
          )} */}
    </View>
  );
};
