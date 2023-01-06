import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CareersLayout() {
  return (
    <div className="careers-layout">
        <Outlet />
    </div>
  )
}
