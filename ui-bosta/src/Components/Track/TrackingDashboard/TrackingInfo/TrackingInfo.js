import React from 'react';

const TrackingInfo = ({id}) => {

    return (
        <div className="row" id="first-row">
            <div className="col-3  justify-content-end">
                <p className="text-muted text-right">موعد التسليم خلال</p>
                <p className="text-right bold"> 2020  يناير{3}</p>

            </div>
            <div className="col-3  justify-content-end">
                <p className="text-muted text-right"> اسم التاجر</p>
                <p className="text-right bold"> SOUQ.com</p>
            </div>
            <div className="col-3 justify-content-end">
                <p className="text-muted text-right"> اخر تحديث</p>
                <p className="text-right bold"> at 5:33pm 06/04/2020 الاثنين</p>
            </div>
            <div className="col-3 justify-content-end">
                <p className="text-muted text-right">{id} رقم الشحنة</p>
                <p className="text-right bold"> تم الغاء الشحنة</p>
            </div>
        </div>
    )
}

export default TrackingInfo;