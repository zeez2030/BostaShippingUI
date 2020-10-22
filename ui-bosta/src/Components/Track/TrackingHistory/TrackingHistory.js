import React from 'react';
import AddressInfo from './AddressInfo/AddressInfo';
import HistoryTable from './HistoryTable/HistoryTable';
const TrackingHistory = () => {
    return (
        <div className="container mt-5 ">
            <div className="row text-right">
                <AddressInfo />
                <HistoryTable />
            </div>
        </div>
    )
}

export default TrackingHistory;