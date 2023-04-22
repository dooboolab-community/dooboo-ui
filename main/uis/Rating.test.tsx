import type {ReactElement} from 'react';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {createComponent} from '../../test/testUtils';

import type {RatingProps} from './Rating';
import {Rating} from './Rating';

const Component = (props?: RatingProps): ReactElement =>
  createComponent(<Rating {...props} />);

describe('Rating', () => {
  test('renders five stars', () => {
    const {getAllByTestId} = render(
      Component({
        testID: 'star',
      }),
    );
    const stars = getAllByTestId('star');
    expect(stars).toHaveLength(5);
  });

  test('renders half stars when allowHalfRating is true', () => {
    const {getAllByTestId} = render(
      Component({
        testID: 'half-star',
        allowHalfRating: true,
      }),
    );
    const halfStars = getAllByTestId('half-star');
    expect(halfStars).toHaveLength(5);
  });

  test('renders `dooboo` iconType', () => {
    const {getAllByTestId} = render(
      Component({
        testID: 'star',
        iconType: 'dooboo',
      }),
    );
    const stars = getAllByTestId('star');
    expect(stars).toHaveLength(5);
  });

  test('calls onRatingUpdate when a star is clicked', () => {
    const handleRatingUpdate = jest.fn();
    const {getAllByRole} = render(
      Component({
        onRatingUpdate: handleRatingUpdate,
      }),
    );
    const thirdStar = getAllByRole('button')[0];

    fireEvent.press(thirdStar);

    expect(handleRatingUpdate).toHaveBeenCalledWith(0.5);
  });

  test('calls onRatingUpdate when a half star is clicked', () => {
    const handleRatingUpdate = jest.fn();
    const {getAllByRole} = render(
      Component({
        onRatingUpdate: handleRatingUpdate,
        allowHalfRating: true,
      }),
    );
    const thirdHalfStar = getAllByRole('button')[1];

    fireEvent.press(thirdHalfStar);

    expect(handleRatingUpdate).toHaveBeenCalledWith(1);
  });
});
