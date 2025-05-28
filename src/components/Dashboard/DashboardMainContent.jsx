import React from 'react'
import DashboardOverview from './DashboardOverview/DashboardOverview';
import ActivityFeed from './ActivityFeed/ActivityFeed';
import CalendarView from './CalendarView/CalendarView';
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';
import './DashboardMainContent.css'; 

const DashboardMainContent = () => {
  return (
    <div className="dashboard">
      <section className="anatomy_activity">
        <DashboardOverview />
        <ActivityFeed />
      </section>
      <section className='calendar_appointments'>
        <CalendarView />
        <UpcomingSchedule />
      </section>
    </div>
  )
}

export default DashboardMainContent