import {AccordionBaseProps, TOGGLE_ELEMENT_PROPERTY} from './Accordion';
import {Animated, Easing, LayoutChangeEvent} from 'react-native';
import React, {
  FC,
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {Icon} from '../Icon';
import styled from '@emotion/native';
import {useTheme} from '@dooboo-ui/theme';

const TitleContainer = styled.TouchableOpacity`
  justify-content: center;
  background-color: ${({theme}) => theme.text};
  height: 50px;
  z-index: 10;
`;

const StyledIcon = styled(Icon)`
  color: ${({theme}) => theme.textContrast};
`;

const ItemContainer = styled.View`
  background-color: ${({theme}) => theme.background};
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 20px 0px;
`;

const StyledTitle = styled.Text`
  font-weight: bold;
  color: ${({theme}) => theme.textContrast};
  position: absolute;
  padding: 0px 20px;
`;

const StyledItem = styled.Text`
  color: ${({theme}) => theme.text};
  padding: 0px 20px;
`;

export interface AccordionData {
  title: string;
  bodies: string[];
}

interface Props<T> extends AccordionBaseProps<T> {
  testID: string;
  dropDownAnimValue: Animated.Value;
}

type AccordionItemProps = Props<AccordionData>;

const AccordionItem: FC<AccordionItemProps> = (props) => {
  const {theme} = useTheme();

  const {
    testID,
    data: item,
    shouldAnimate = true,
    collapseOnStart = true,
    animDuration = 200,
    activeOpacity = 1,
    toggleElement = <StyledIcon name="chevron-down-light" theme={theme} />,
    renderTitle = (title) => <StyledTitle theme={theme}>{title}</StyledTitle>,
    renderBody = (body) => <StyledItem theme={theme}>{body}</StyledItem>,
    dropDownAnimValue,
    styles,
    style,
  } = props;

  const {
    titleContainer = {backgroundColor: theme.primary},
    bodyContainer = {backgroundColor: theme.background},
  } = styles ?? {};

  const rotateAnimValue = useRef(new Animated.Value(0)).current;

  const [collapsed, setCollapsed] = useState(collapseOnStart);

  const [bodyMounted, setBodyMounted] = useState(false);
  const [bodyHeight, setBodyHeight] = useState(0);

  const handleBodyLayout = (e: LayoutChangeEvent): void => {
    if (bodyMounted) {
      return;
    }

    const {height} = e.nativeEvent.layout;

    setBodyHeight(height);

    setBodyMounted(true);
  };

  const handlePress = (): void => {
    setCollapsed(!collapsed);
  };

  const renderIndicator = (
    element: AccordionItemProps[typeof TOGGLE_ELEMENT_PROPERTY],
  ): ReactElement => (
    <Animated.View
      style={{
        position: 'absolute',
        right: 20,
        transform: [
          {
            rotate: rotateAnimValue.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '180deg'],
            }),
          },
        ],
      }}
    >
      {element}
    </Animated.View>
  );

  useEffect(() => {
    const targetValue = collapsed ? 0 : 1;

    if (!shouldAnimate) {
      rotateAnimValue.setValue(targetValue);
    }

    Animated.timing(rotateAnimValue, {
      toValue: targetValue,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsed]);

  const targetValueForDropdown = useMemo(() => {
    return collapsed ? 0 : bodyHeight;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapsed]);

  useEffect(() => {
    if (bodyMounted) {
      dropDownAnimValue.setValue(targetValueForDropdown);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyMounted]);

  useEffect(() => {
    if (!shouldAnimate) {
      dropDownAnimValue.setValue(targetValueForDropdown);
    }

    Animated.timing(dropDownAnimValue, {
      toValue: targetValueForDropdown,
      duration: animDuration,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetValueForDropdown]);

  return (
    <Animated.View
      style={[
        {
          backgroundColor: 'transparent',
          overflow: 'hidden',
          width: 300,
        },
        style,
      ]}
    >
      <TitleContainer
        theme={theme}
        testID={`title_${testID}`}
        onPress={handlePress}
        activeOpacity={activeOpacity}
        style={titleContainer}
      >
        {renderTitle(item.title)}
        {renderIndicator(toggleElement)}
      </TitleContainer>

      {
        <Animated.View
          testID={`body_${testID}`}
          style={{
            height: bodyMounted ? dropDownAnimValue : undefined,
          }}
          onLayout={handleBodyLayout}
        >
          {item.bodies.map((body, key) => (
            <ItemContainer key={key} style={bodyContainer}>
              {renderBody(body)}
            </ItemContainer>
          ))}
        </Animated.View>
      }
    </Animated.View>
  );
};

export default AccordionItem;
