import React from 'react'
import AnatomySection from './AnatomySection/AnatomySection';
import HealthStatusCards from './HealthStatusCards/HealthStatusCards';

const DashboardOverview = () => {
  return (
    <>
      <AnatomySection />
      <HealthStatusCards />
    </>
  )
}

export default DashboardOverview