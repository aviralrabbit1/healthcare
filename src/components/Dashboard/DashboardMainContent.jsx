import React from 'react'
import DashboardOverview from './DashboardOverview/DashboardOverview';
import ActivityFeed from './ActivityFeed/ActivityFeed';
import CalendarView from './CalendarView/CalendarView';
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';

const DashboardMainContent = () => {
  return (
    <>
      <DashboardOverview />
      <ActivityFeed />
      <CalendarView />
      <UpcomingSchedule />
    </>
  )
}

export default DashboardMainContent