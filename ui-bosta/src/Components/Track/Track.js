import React from 'react';
import TrackingDashboard from './TrackingDashboard/TracingDashboard';
import TrackingHistory from './TrackingHistory/TrackingHistory';
import './Track.css';

const Track = () => {
    return (
        <div className="container">
            <TrackingDashboard />
            <TrackingHistory />
        </div>
    )
}

export default Track