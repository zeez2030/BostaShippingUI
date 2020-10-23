import React from 'react';
import TrackingStatusBar from './TrackingStatusbar/TrackingStatusBar';
import TrackingInfo from './TrackingInfo/TrackingInfo';
const TracingDashboard = ({ shippmentID, shipment }) => {

    return (
        <div className="container main-container mt-5">
            <TrackingInfo id={shippmentID} shipment={shipment} />

            <hr />
            <TrackingStatusBar activeC={shipment ? shipment.getActiveClass('DELIVERED') : null} />

        </div>
    )
}

export default TracingDashboard