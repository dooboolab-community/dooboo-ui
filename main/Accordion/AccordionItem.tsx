import {Animated, Easing, LayoutChangeEvent} from 'react-native';
import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import {AccordionBaseProps} from './Accordion';
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

  const rotateAnimValueRef = useRef(new Animated.Value(0));
  const dropDownAnimValueRef = useRef(dropDownAnimValue);

  const bodyHeight = useRef(0);
  const [bodyMounted, setBodyMounted] = useState(false);

  const handleBodyLayout = (e: LayoutChangeEvent): void => {
    if (bodyMounted) {
      return;
    }

    const {height} = e.nativeEvent.layout;

    bodyHeight.current = height;
    setBodyMounted(true);
  };

  const [collapsed, setCollapsed] = useState(collapseOnStart);

  const handlePress = (): void => {
    setCollapsed(!collapsed);
  };

  const startAnimation = useCallback(() => {
    const rotateTargetValue = collapsed ? 0 : 1;
    const dropDownTargetValue = collapsed ? 0 : bodyHeight.current;

    if (!shouldAnimate) {
      rotateAnimValueRef.current.setValue(rotateTargetValue);
      dropDownAnimValueRef.current.setValue(dropDownTargetValue);

      return;
    }

    const config = {
      duration: animDuration,
      easing: Easing.linear,
      useNativeDriver: false,
    };

    Animated.parallel([
      Animated.timing(rotateAnimValueRef.current, {
        ...config,
        toValue: rotateTargetValue,
      }),
      Animated.timing(dropDownAnimValueRef.current, {
        ...config,
        toValue: dropDownTargetValue,
      }),
    ]).start();
  }, [collapsed, shouldAnimate, animDuration]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  const renderIndicator = (element: ReactElement | null): ReactElement => (
    <Animated.View
      style={{
        position: 'absolute',
        right: 20,
        transform: [
          {
            rotate: rotateAnimValueRef.current.interpolate({
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

      <Animated.View
        testID={`body_${testID}`}
        style={{
          height: bodyMounted ? dropDownAnimValueRef.current : undefined,
        }}
        onLayout={handleBodyLayout}
      >
        {item.bodies.map((body, key) => (
          <ItemContainer key={key} style={bodyContainer}>
            {renderBody(body)}
          </ItemContainer>
        ))}
      </Animated.View>
    </Animated.View>
  );
};

export default AccordionItem;
