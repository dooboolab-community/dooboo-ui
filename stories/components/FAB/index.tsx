import FABBasic from './FABBasic';
import {renderStory} from '../../Common';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('FAB', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<FABBasic />));