import React from 'react'
import AnatomySection from './AnatomySection/AnatomySection';
import HealthStatusCards from './HealthStatusCards/HealthStatusCards';

const DashboardOverview = () => {
  return (
    <div className="dashboardOverview">
      <AnatomySection />
      <div className="healthCards">
        <HealthStatusCards />
        <HealthStatusCards />
        <HealthStatusCards />
      </div>
    </div>
  )
}

export default DashboardOverview