import React, {useState, ReactElement} from 'react';

const Selectable = ({
  children,
  onPress,
  mode = 'singleChoice',
}): ReactElement => {
  const initial = React.Children.map(
    children ?? [],
    (child) => !!child.props.selected,
  );

  const [selectedArray, setSelectedArray] = useState(initial);

  const [selectedIndex, setSelectedIndex] = useState(
    initial.findIndex((value: boolean) => value === true),
  );

  return React.Children.map(children, (child, i) => {
    type NewProps = {
      selected: boolean;
      handlePress: Function;
    };

    const {selected, handlePress}: NewProps = {
      checkbox: {
        selected: selectedArray[i],
        handlePress: () => {
          const nextSelctedArray = [
            ...selectedArray.slice(0, i),
            !selectedArray[i],
            ...selectedArray.slice(i + 1),
          ];

          setSelectedArray(nextSelctedArray);

          if (onPress) onPress(nextSelctedArray);
        },
      },

      singleChoice: {
        selected: selectedIndex === i,
        handlePress: () => {
          setSelectedIndex(i);

          if (onPress) onPress(i);
        },
      },
    }[mode]!;

    return React.cloneElement(child, {
      selected,
      onPress: handlePress,
    });
  });
};

export default Selectable;
