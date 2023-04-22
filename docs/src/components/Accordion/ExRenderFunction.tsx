import styled from '@emotion/native';
import {Icon} from 'dooboo-ui';

import type {AccordionStoryProps} from '.';
import AccordionStory from '.';

const Container = styled.View`
  padding-left: 20px;
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
  width: 80px;
  font-weight: bold;
`;

function ExRenderFunction(baseProps: AccordionStoryProps): React.ReactElement {
  return (
    <AccordionStory
      {...baseProps}
      renderTitle={(item) => (
        <Container>
          <Icon name="SearchAlt" color="white" />
          <Title>{item}</Title>
        </Container>
      )}
      renderItem={(item) => (
        <Container>
          <Body numberOfLines={1}>{item.toUpperCase()}</Body>
        </Container>
      )}
    />
  );
}

export default ExRenderFunction;
