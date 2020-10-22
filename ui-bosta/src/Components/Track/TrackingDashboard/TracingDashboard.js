import React from 'react';
import TrackingStatusBar from './TrackingStatusbar/TrackingStatusBar';
import TrackingInfo from './TrackingInfo/TrackingInfo';
const TracingDashboard = ({shippmentID}) => {
    
    return (
        <div className="container main-container mt-5">
            <TrackingInfo id={shippmentID} />

            <hr />
            <TrackingStatusBar />

        </div>
    )
}

export default TracingDashboard