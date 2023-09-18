// Caveat: Expo web needs React to be imported
import styled from '@emotion/native';

import {PinchZoom} from '../../../packages/PinchZoom/lib';

const TitleText = styled.Text`
  font-size: 16px;
`;

const ContentText = styled.Text`
  font-size: 14px;
`;

function PinchZoomArticleStory(): JSX.Element {
  return (
    <PinchZoom style={{width: '100%', backgroundColor: '#eee', padding: 10}}>
      <TitleText>Article Title</TitleText>
      <ContentText style={{minHeight: 100, textAlignVertical: 'center'}}>
        {`This block is for the content of the article. \
PinchZoom works at only Image but also other views. So, let's zoom in with your fingers.
`}
      </ContentText>
    </PinchZoom>
  );
}

export default PinchZoomArticleStory;
