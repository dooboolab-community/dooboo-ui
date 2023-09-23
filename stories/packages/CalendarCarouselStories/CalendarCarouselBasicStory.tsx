// Caveat: Expo web needs React to be imported
import React from 'react';
import {useTheme} from '@dooboo-ui/theme';
import styled, {css} from '@emotion/native';
import {ko} from 'date-fns/locale';

import {Icon} from '../../../main/uis/Icon';
import CalendarCarousel from '../../../packages/CalendarCarousel';

const Container = styled.SafeAreaView`
  flex: 1;
  align-self: stretch;

  align-items: center;
`;

function CalendarCarouselBasicStory(): JSX.Element {
  const {theme} = useTheme();

  //TODO: Add more detailed example for CalendarCarousel
  // const [currentDate, setCurrentDate] = useState<Date>(date);
  // const [selectedDate, setSelectedDate] = useState<Date>();
  // const monthFormatter = new Intl.DateTimeFormat('default', {month: 'long'});
  // const markedDayEvents = [
  //   {
  //     selectedEventDate: new Date(2020, 7, 7),
  //     events: 'Walk Dog with Neighbor',
  //   },
  //   {
  //     selectedEventDate: new Date(2020, 7, 17),
  //     events: 'Birthday Party for Jessie',
  //   },
  //   {
  //     selectedEventDate: new Date(2020, 7, 27),
  //     events: 'Cooking for Mom',
  //   },
  // ];

  return (
    <Container>
      <CalendarCarousel
        headerIconLeft={
          <Icon color={theme.text.basic} name="ArrowCircleLeft" size={18} />
        }
        headerIconRIght={
          <Icon color={theme.text.basic} name="ArrowCircleRight" size={18} />
        }
        initialSelectedDate={new Date(2024, 11, 4)}
        locale={ko}
        showNextDates={true}
        showPrevDates={true}
        style={css`
          margin-top: 80px;
        `}
        width={350}
      />
    </Container>
  );
}

export default CalendarCarouselBasicStory;
