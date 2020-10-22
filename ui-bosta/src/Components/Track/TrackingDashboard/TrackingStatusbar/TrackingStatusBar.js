import React from 'react'

const TrackingStatusBar = () => {
    return (
        <div className="row">
            <ul id="progressbar" className="col-12 d-flex justify-content-end">
                <li className=" step0 mx-auto" data-background-icon='&#xf086;'>تم التسليم</li>
                <li className="  step0 mx-auto" data-background-icon='&#xf086;'>الشحنة خرجت للتسليم</li>
                <li className="active currently-active step0 mx-auto" data-background-icon='&#xf086;'>تم استلام الشحنة من التاجر</li>
                <li className=" active step0 mx-auto" data-background-icon='&#xf086;'>تم انشاء الشحنه</li>
            </ul>
        </div>
    )
}

export default TrackingStatusBar