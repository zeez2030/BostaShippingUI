import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Shippment from '../../models/Shippment';
import TrackingDashboard from './TrackingDashboard/TracingDashboard';
import TrackingHistory from './TrackingHistory/TrackingHistory';
import './Track.css';

const Track = (props) => {
    const [shippmentID, setShippmentID] = useState(0);
    const [shippment, setShippment] = useState(null);
    useEffect(() => {
        /*
            get ID from params and set it to the state
        */
        const id = +props.match.params.id;
        setShippmentID(id);

        /*
            call get ShippmentInfo async function that calls api and sets the shippment state with shippment info
        */
        async function getShippmentInfo(id) {
            const res = await axios.get(`https://tracking.bosta.co/shipments/track/${id}`);
            const shippmentInfo = new Shippment(res.data);
            // console.log(shippmentInfo.historyEvents);
            setShippment(shippmentInfo);
        }
        getShippmentInfo(id);





    }, []);




    return (
        <div className="container">
            <TrackingDashboard shippmentID={shippmentID} shipment={shippment} />
            <TrackingHistory shipment={shippment} />
        </div>
    )
}

export default Track