import React from 'react';

const TrackingInfo = ({ id, shipment }) => {

    return (
        <div className="row" id="first-row">
            <div className="col-3  justify-content-end">
                <p className="text-muted text-right">موعد التسليم خلال</p>
                <p className="text-right bold" >
                    {
                        shipment ? shipment.getPromisedDate() : '123'

                    }
                </p>

            </div>
            <div className="col-3  justify-content-end">
                <p className="text-muted text-right"> اسم التاجر</p>
                <p className="text-right bold"> SOUQ.com</p>
            </div>
            <div className="col-3 justify-content-end">
                <p className="text-muted text-right"> اخر تحديث</p>
                <p className="text-right bold"> {
                    shipment ? shipment.getLastUpdateDate() : ''

                }</p>
            </div>
            <div className="col-3 justify-content-end">
                <p className="text-muted text-right">{id} رقم الشحنة</p>
                <p className="text-right bold" style={{ color: shipment ? shipment.textColor : 'sandybrown' }}> {
                    shipment ? shipment.getCurrentState() : ''
                } </p>
            </div>
        </div>
    )
}

export default TrackingInfo;