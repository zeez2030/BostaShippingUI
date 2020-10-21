import React from 'react';
import './Wjumbo.css';
const Wjumbo = () => {
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
                        <input type="text" className="form-control" placeholder="Enter your shipping trackID" aria-label="track" aria-describedby="basic-addon1" />
                        <button type="button" className="mx-2 btn btn-primary">Track</button>
                    </div>

                </div>



            </div>

        </div>
    )
}

export default Wjumbo;