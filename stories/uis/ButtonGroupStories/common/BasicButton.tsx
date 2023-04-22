import type {FC} from 'react';
// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';

import type {ButtonGroupProps} from '../../../../main';
import {ButtonGroup} from '../../../../main';

type BasicButtonProps = Pick<
  ButtonGroupProps,
  'style' | 'styles' | 'borderStyle'
>;

const BasicButton: FC<BasicButtonProps> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const data: string[] = [
    'ButtonText',
    'ButtonText',
    'ButtonText',
    'ButtonText',
  ];

  return (
    <ButtonGroup
      data={data}
      selectedIndex={selectedIndex}
      onPress={setSelectedIndex}
      {...props}
    />
  );
};

export default BasicButton;
