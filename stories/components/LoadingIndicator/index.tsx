import LoadingIndicatorBasic from './Basic';
import LoadingIndicatorCustom from './Custom';
import LoadingIndicatorImage from './Image';
import {renderStory} from '../../Common';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('LoadingIndicator', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<LoadingIndicatorBasic />))
  .add('Image', () => renderStory(<LoadingIndicatorImage />))
  .add('Custom', () => renderStory(<LoadingIndicatorCustom />));
