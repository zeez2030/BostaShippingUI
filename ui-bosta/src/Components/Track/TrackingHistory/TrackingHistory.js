import React from 'react';
import AddressInfo from './AddressInfo/AddressInfo';
import HistoryTable from './HistoryTable/HistoryTable';
const TrackingHistory = ({shipment}) => {
    
    return (
        <div className="container mt-5 ">
            <div className="row text-right">
                <AddressInfo />
                <HistoryTable history= { shipment?shipment.historyEvents:null }/>
            </div>
        </div>
    )
}

export default TrackingHistory;