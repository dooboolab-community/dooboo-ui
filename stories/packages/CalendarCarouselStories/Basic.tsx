import 'intl';
import 'intl/locale-data/jsonp/en';

// Caveat: Expo web needs React to be imported
import React, {useState} from 'react';

import CalendarCarousel from '../../../packages/CalendarCarousel/lib';
import styled from '@emotion/native';

const Container = styled.SafeAreaView`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;

const date = new Date();

function CalendarCarouselBasic(): React.ReactElement {
  const [currentDate, setCurrentDate] = useState<Date>(date);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const monthFormatter = new Intl.DateTimeFormat('default', {month: 'long'});

  const markedDayEvents = [
    {
      selectedEventDate: new Date(2020, 7, 7),
      events: 'Walk Dog with Neighbor',
    },
    {
      selectedEventDate: new Date(2020, 7, 17),
      events: 'Birthday Party for Jessie',
    },
    {
      selectedEventDate: new Date(2020, 7, 27),
      events: 'Cooking for Mom',
    },
  ];

  return (
    <Container>
      <CalendarCarousel
        date={currentDate}
        onDateChanged={(dateProp: Date): void => setCurrentDate(dateProp)}
        selectedDate={selectedDate}
        selectDate={(dateProp: Date): void => setSelectedDate(dateProp)}
        markedDayEvents={markedDayEvents}
        monthFormatter={monthFormatter}
      />
    </Container>
  );
}

export default CalendarCarouselBasic;
