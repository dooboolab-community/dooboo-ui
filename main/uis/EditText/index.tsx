import type {MutableRefObject, ReactElement, ReactNode, RefObject} from 'react';
import React, {isValidElement, useRef, useState} from 'react';
import type {
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useHover} from 'react-native-web-hooks';
import {useTheme} from '@dooboo-ui/theme';
import {css} from '@emotion/native';

import {cloneElemWithDefaultColors} from '../../utils/guards';
import {Icon} from '../Icon';

type Styles = {
  container?: StyleProp<ViewStyle>;
  label?: StyleProp<TextStyle>;
  input?: StyleProp<TextStyle>;
  error?: StyleProp<TextStyle>;
  counter?: StyleProp<TextStyle>;
};

export type EditTextStatus =
  | 'disabled'
  | 'error'
  | 'focused'
  | 'hovered'
  | 'basic';

type RenderType = (stats: EditTextStatus) => ReactElement;

type CustomRenderType =
  | (({color, status}: {color: string; status: EditTextStatus}) => ReactElement)
  | null;

export type EditTextProps = {
  testID?: TextInputProps['testID'];
  inputRef?: MutableRefObject<TextInput | undefined> | RefObject<TextInput>;
  required?: boolean;

  style?: StyleProp<ViewStyle>;
  styles?: Styles;

  // Components
  label?: string | RenderType;
  error?: string | RenderType;
  startElement?: ReactElement | CustomRenderType;
  endElement?: ReactElement | CustomRenderType;

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
  numberOfLines?: TextInputProps['numberOfLines'];
  maxLength?: TextInputProps['maxLength'];

  textInputProps?: Omit<
    TextInputProps,
    | 'value'
    | 'onChange'
    | 'numberOfLines'
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
    | 'maxLength'
  >;

  colors?: {
    basic?: string;
    disabled?: string;
    error?: string;
    focused?: string;
    hovered?: string;
    placeholder?: string;
  };
};

export function EditText(props: EditTextProps): ReactElement {
  const {
    testID,
    inputRef: givenInputRef,
    textInputProps,
    style,
    styles,
    label,
    error,
    startElement,
    endElement,
    multiline = false,
    value = '',
    placeholder,
    placeholderColor,
    onChange,
    onChangeText,
    onFocus,
    onBlur,
    onSubmitEditing,
    numberOfLines,
    maxLength,
    autoCapitalize = 'none',
    secureTextEntry = false,
    editable = true,
    direction = 'column',
    decoration = 'underline',
    colors = {},
    required = false,
  } = props;

  const {theme} = useTheme();

  const [focused, setFocused] = useState(false);
  const ref = useRef<View>(null);
  const defaultInputRef = useRef(null);
  const inputRef =
    (givenInputRef as MutableRefObject<TextInput>) || defaultInputRef;
  const hovered = useHover(ref);

  const defaultContainerStyle = css`
    flex-direction: ${direction};
  `;

  const defaultColor = !editable
    ? colors.disabled || theme.text.disabled
    : error
    ? colors.error || theme.text.validation
    : focused
    ? colors.focused || theme.text.basic
    : hovered
    ? colors.hovered || theme.text.basic
    : colors.placeholder || theme.text.placeholder;

  // Default label placeholder color has different value compared to default input placeholder color
  const labelPlaceholderColor = defaultColor ===
    (colors.placeholder || theme.text.placeholder) && {
    color: colors.placeholder || theme.text.disabled,
  };

  const status: EditTextStatus = !editable
    ? 'disabled'
    : error
    ? 'error'
    : hovered
    ? 'hovered'
    : focused
    ? 'focused'
    : 'basic';

  const renderLabel = (): ReactElement | null => {
    // eslint-disable-next-line react/no-unstable-nested-components
    const Wrapper = ({children}): ReactElement => {
      return (
        <View
          style={css`
            margin-bottom: ${decoration === 'boxed' ? '14px' : 0};

            flex-direction: row;
            align-items: center;
          `}
        >
          {children}
          {required && (
            <Icon
              name="Emergency"
              style={css`
                color: ${theme.role.danger};
                opacity: ${focused ? '1' : '0.5'};
              `}
            />
          )}
        </View>
      );
    };

    return typeof label === 'string' ? (
      <Wrapper>
        <Text
          style={[
            css`
              color: ${defaultColor};
              margin-right: 4px;
              font-weight: bold;
              font-size: 16px;
            `,
            labelPlaceholderColor,
            styles?.label,
          ]}
        >
          {label}
        </Text>
      </Wrapper>
    ) : label ? (
      <Wrapper>{label(status)}</Wrapper>
    ) : null;
  };

  const renderContainer = (children: ReactNode): ReactElement => {
    return (
      <TouchableWithoutFeedback
        testID="container-touch"
        onPress={() => inputRef.current?.focus()}
      >
        <View
          testID="container"
          style={[
            defaultContainerStyle,
            css`
              flex-direction: ${direction};
              align-items: ${direction === 'row' ? 'center' : 'flex-start'};
              justify-content: ${direction === 'row'
                ? 'flex-start'
                : 'space-between'};
              border-color: ${labelPlaceholderColor
                ? labelPlaceholderColor.color
                : defaultColor};
            `,
            decoration === 'boxed'
              ? css`
                  border-radius: 4px;
                  border-width: 1px;
                  padding-left: 12px;
                  padding-right: 12px;
                `
              : css`
                  border-bottom-width: 1px;
                `,
            styles?.container,
          ]}
        >
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderInput = (): ReactElement => {
    return (
      <View
        style={[
          direction === 'row'
            ? css`
                flex: 1;
              `
            : css`
                align-self: stretch;
              `,
          css`
            padding: ${decoration === 'boxed' ? '4px 0' : '2px 0'};

            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          `,
        ]}
      >
        <>
          {isValidElement(startElement)
            ? cloneElemWithDefaultColors({
                element: startElement,
                color: defaultColor,
                style: css`
                  margin-left: -4px;
                  margin-right: 4px;
                `,
              })
            : startElement}
          <TextInput
            testID={testID}
            ref={inputRef}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            selectionColor={colors.focused || theme.text.basic}
            style={[
              // Stretch input in order to make remaining space clickable
              css`
                flex: 1;
              `,
              Platform.OS === 'web' &&
                css`
                  outline-width: 0;
                `,
              direction === 'column'
                ? css`
                    padding-top: 12px;
                  `
                : css`
                    padding-left: 12px;
                  `,
              css`
                color: ${defaultColor};
                padding: 12px 0;
              `,
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
            placeholderTextColor={placeholderColor || theme.text.placeholder}
            onChange={onChange}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            maxLength={maxLength}
            numberOfLines={numberOfLines}
            {...textInputProps}
          />
          {isValidElement(endElement)
            ? cloneElemWithDefaultColors({
                element: endElement,
                color: defaultColor,
                style: css`
                  margin-left: 4px;
                  margin-right: ${decoration === 'boxed' ? '-8px' : '-4px'};
                `,
              })
            : endElement}
        </>
      </View>
    );
  };

  const renderError = (): ReactElement | null => {
    return error ? (
      typeof error === 'string' ? (
        <Text
          style={[
            css`
              flex: 1;
              color: ${theme.text.validation};
              font-size: 12px;
            `,
            styles?.error,
          ]}
        >
          {error}
        </Text>
      ) : (
        error?.(status)
      )
    ) : null;
  };

  const renderCounter = (): ReactElement | null => {
    return maxLength ? (
      <Text
        style={[
          css`
            color: ${theme.text.placeholder};
            font-size: 12px;
          `,
          styles?.counter,
        ]}
      >{`${value.length}/${maxLength}`}</Text>
    ) : null;
  };

  return (
    <View
      testID="edit-text"
      ref={Platform.select({web: ref, default: undefined})}
      style={[
        css`
          flex-direction: column;
        `,
        style,
      ]}
    >
      {renderLabel()}
      {renderContainer(renderInput())}
      {renderError || renderCounter ? (
        <View
          style={css`
            margin-top: 6px;

            flex-direction: row;
            justify-content: space-between;
            gap: 4px;
          `}
        >
          {renderError() || <View />}
          {renderCounter()}
        </View>
      ) : null}
    </View>
  );
}
