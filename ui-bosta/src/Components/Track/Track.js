import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Shippment from '../../models/Shippment';
import TrackingDashboard from './TrackingDashboard/TracingDashboard';
import TrackingHistory from './TrackingHistory/TrackingHistory';
import './Track.css';

const Track = (props) => {
    const [shippmentID, setShippmentID] = useState(0);
    const [shippment, setShippment] = useState(null);
    const [errr, setError] = useState(false);
    useEffect(() => {
        /*
            get ID from params and set it to the state
        */
        const id = +props.match.params.id;
        setShippmentID(id);

        /*
            call get ShippmentInfo async function that calls api and sets the shippment state with shippment info
        */
        function getShippmentInfo(id) {
            // const res = await axios.get(`https://tracking.bosta.co/shipments/track/${id}`);
            // const shippmentInfo = new Shippment(res.data);
            // setShippment(shippmentInfo);
            axios.get(`https://tracking.bosta.co/shipments/track/${id}`).then(
                (res) => {
                    const shippmentInfo = new Shippment(res.data);
                    setShippment(shippmentInfo);
                }
            ).catch(err => setError(true));




        }
        getShippmentInfo(id);





    }, []);


    return !errr ? (

        <div className="container">
            <TrackingDashboard shippmentID={shippmentID} shipment={shippment} />
            <TrackingHistory shipment={shippment} />
        </div>
    ) :
        (
            <h1 className="mt-5">Unvalid track ID</h1>
        )


}

export default Track