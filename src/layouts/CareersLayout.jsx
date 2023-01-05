import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CareersLayout() {
  return (
    <div className="careers-layout">
        <code>This is my careers</code>
        <Outlet />
    </div>
  )
}
