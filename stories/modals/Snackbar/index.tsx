import SnackbarBasic from './BasicStory';
import {renderStory} from '../../Common';
import {storiesOf} from '@storybook/react-native';
import {withActions} from '@storybook/addon-actions';
import {withKnobs} from '@storybook/addon-knobs';

storiesOf('[Modal] Snackbar', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions)
  .add('Basic', () => renderStory(<SnackbarBasic />));
