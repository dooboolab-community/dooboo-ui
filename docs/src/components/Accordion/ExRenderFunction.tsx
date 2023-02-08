import AccordionStory from '.';
import type {AccordionStoryProps} from '.';
import {Icon} from 'dooboo-ui';
import styled from '@emotion/native';

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
          <Icon name="search-light" color="white" />
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
