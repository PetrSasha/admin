import React from 'react'
import {Week, ScheduleComponent,  Day, Month, WorkWeek, Agenda, Inject, Resize, DragAndDrop} from '@syncfusion/ej2-react-schedule'
import {scheduleData} from '../data/dummy'
import {Header} from '../comp'
const Calendar = ({category, title}) => {
  return (
    <div className='m-2 md:p-10 mdm-10 mt-24 p-2 bg-gray-50 rounded-3xl'>
      <Header category="App" title="Calendar"/>
      <ScheduleComponent
        height='650px'
        eventSettings={{dataSource: scheduleData}}
        selectedDate={new Date(2022, 5 , 30)}
      >
        <Inject services={[Day, Week, Month, WorkWeek, Agenda, Resize, DragAndDrop]}/>
      </ScheduleComponent>
    </div>
  )
}

export default Calendar