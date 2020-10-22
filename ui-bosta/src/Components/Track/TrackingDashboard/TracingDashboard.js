import React from 'react';
import TrackingStatusBar from './TrackingStatusbar/TrackingStatusBar';
import TrackingInfo from './TrackingInfo/TrackingInfo';
const TracingDashboard = () => {
    return (
        <div className="container main-container mt-5">
            <TrackingInfo />

            <hr />
            <TrackingStatusBar />

        </div>
    )
}

export default TracingDashboard