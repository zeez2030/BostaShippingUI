import React, { useEffect, useState } from 'react';
import './Home.css';
const Home = (props) => {

    const [shippmentId, setShippmentId] = useState(0);

    useEffect(() => {
     
    }, [])

    const clickHandler = () => {
        props.history.push(`/${shippmentId}`)
    }
    const setID = (e) => {
        setShippmentId(e.target.value);
    }
    return (
        <div className="jumbotron clip">

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-5 text-left">Deliver What You Love, On Time</h1>

                    </div>
                    <div className="col-12">
                        <p className="lead text-left">Deliver your products to any place in Egypt with a one stop, full-service next day delivery and logistics solution.</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="input-group mb-3 col-12">
                        <input onChange={setID} type="text" className="form-control" placeholder="Enter your shipping trackID ex: 6636234,7234258,9442984,1094442 " aria-label="track" aria-describedby="basic-addon1" />
                        <button onClick={clickHandler} type="button" className="mx-2 btn btn-primary">Track</button>
                    </div>

                </div>



            </div>

        </div>
    )
}

export default Home;