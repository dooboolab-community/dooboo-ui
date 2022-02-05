import AccordionStory, {AccordionStoryBaseProps} from '.';

import {Icon} from 'dooboo-ui';
import styled from '@emotion/native';

const Container = styled.View`
  padding-left: 20;
  align-items: center;
  flex-direction: row;
`;

const Title = styled.Text`
  margin-left: 20px;
  color: white;
  font-size: 18px;
`;

const Body = styled.Text`
  flex: 1;
  width: 80;
  font-weight: bold;
`;

function RenderItem(baseProps: AccordionStoryBaseProps): React.ReactElement {
  return (
    <AccordionStory
      {...baseProps}
      renderTitle={(item) => (
        <Container>
          <Icon name="search-light" color="white" />
          <Title>{item}</Title>
        </Container>
      )}
      renderBody={(item) => (
        <Container>
          <Body numberOfLines={1}>{item.toUpperCase()}</Body>
        </Container>
      )}
    />
  );
}

export default RenderItem;
