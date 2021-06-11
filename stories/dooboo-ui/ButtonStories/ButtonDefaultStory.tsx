import {Button, Hr} from '../../../main';
import {IC_FACEBOOK, IC_GOOGLE} from '../../Icon';
import {Image, View} from 'react-native';
import React, {useState} from 'react';
import styled, {css} from '@emotion/native';

import type {FC} from 'react';
import {action} from '@storybook/addon-actions';

const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.background};
`;

const StyledText = styled.Text`
  margin: 8px;
  color: ${({theme}) => theme.text};
`;

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const ButtonDefault: FC = () => {
  const [facebookLoading, setFacebookLoading] = useState<boolean>(false);
  const [googleLoading, setGoogleLoading] = useState<boolean>(false);

  return (
    <StoryContainer>
      <ScrollContainer
        contentContainerStyle={{
          paddingVertical: 60,
          paddingHorizontal: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StyledText style={{fontSize: 18, marginBottom: 8}}>
          Basic Styles
        </StyledText>
        <View
          style={{
            marginBottom: 40,

            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          <Button type="primary" text="Primary" style={{padding: 8}} />
          <Button type="secondary" text="Secondary" style={{padding: 8}} />
          <Button type="success" text="Success" style={{padding: 8}} />
          <Button type="danger" text="Danger" style={{padding: 8}} />
          <Button type="warning" text="Warning" style={{padding: 8}} />
          <Button type="info" text="Info" style={{padding: 8}} />
          <Button disabled={true} text="Disabled" style={{padding: 8}} />
        </View>
        <Hr />
        <StyledText style={{fontSize: 18, marginTop: 24, marginBottom: 8}}>
          Outlined Styles
        </StyledText>
        <View
          style={{
            marginBottom: 40,

            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          <Button type="primary" text="Primary" outlined style={{padding: 8}} />
          <Button
            type="secondary"
            text="Secondary"
            outlined
            style={{padding: 8}}
          />
          <Button type="success" text="Success" outlined style={{padding: 8}} />
          <Button type="danger" text="Danger" outlined style={{padding: 8}} />
          <Button type="warning" text="Warning" outlined style={{padding: 8}} />
          <Button type="info" text="Info" outlined style={{padding: 8}} />
          <Button
            disabled={true}
            text="Disabled"
            outlined
            style={{padding: 8}}
          />
        </View>
        <Hr />
        <StyledText style={{fontSize: 18, marginBottom: 8, marginTop: 16}}>
          Aspect of sizes
        </StyledText>
        <View
          style={{
            marginBottom: 20,

            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            type="primary"
            size="large"
            text="Primary"
            style={{padding: 8}}
          />
          <Button
            type="primary"
            size="medium"
            text="Primary"
            style={{padding: 8}}
          />
          <Button
            type="primary"
            size="small"
            text="Primary"
            style={{padding: 8}}
          />
        </View>
        <Hr />
        <StyledText style={{fontSize: 18, marginTop: 16, marginBottom: 8}}>
          Adding elements
        </StyledText>
        <Button
          leftElement={
            <View style={{marginRight: 12}}>
              <Image style={{width: 20, height: 20}} source={IC_GOOGLE} />
            </View>
          }
          outlined
          loading={googleLoading}
          style={{marginBottom: 20, marginTop: 30}}
          styles={{
            container: css`
              border-radius: 80px;
              border-width: 0.5px;
              width: 300px;
              height: 52px;
            `,
          }}
          onPress={(): void => {
            setGoogleLoading(true);
            action('google btn clicked');

            const timeout = setTimeout(() => {
              setGoogleLoading(false);
              clearTimeout(timeout);
            }, 2000);
          }}
          text="GOOGLE SIGN IN"
        />
        <Button
          testID="btnFacebook"
          outlined
          leftElement={
            <View
              style={{
                position: 'absolute',
                left: 28,
              }}>
              <Image style={{width: 15, height: 28}} source={IC_FACEBOOK} />
            </View>
          }
          loading={facebookLoading}
          styles={{
            container: css`
              border-radius: 80px;
              border-width: 0.5px;
              width: 300px;
              height: 52px;
            `,
          }}
          onPress={(): void => {
            setFacebookLoading(true);
            action('facebook btn clicked');

            const timeout = setTimeout(() => {
              setFacebookLoading(false);
              clearTimeout(timeout);
            }, 2000);
          }}
          text="FACEBOOK SIGN IN"
        />
      </ScrollContainer>
    </StoryContainer>
  );
};

export default ButtonDefault;
