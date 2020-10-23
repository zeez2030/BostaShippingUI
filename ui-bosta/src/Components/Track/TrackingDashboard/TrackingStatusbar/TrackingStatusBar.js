import React from 'react'

const TrackingStatusBar = ({ activeC }) => {

    activeC ? console.log(activeC) : console.log("active Class = null");

    return (
        <div className="row">
            <ul id="progressbar" className="col-12 d-flex justify-content-end">
                <li className={
                    activeC && activeC < 1 ? 'active step0 mx-auto' : activeC && activeC === 1 ? 'currently-active active step0 mx-auto' : 'step0 mx-auto'

                } data-background-icon='&#xf086;'>تم التسليم</li>
                <li className={
                    activeC && activeC < 2 ? 'active step0 mx-auto' : activeC && activeC === 2 ? 'currently-active active step0 mx-auto' : 'step0 mx-auto'

                } data-background-icon='&#xf086;'>الشحنة خرجت للتسليم</li>
                <li className={
                    activeC && activeC < 3 ? 'active step0 mx-auto' : activeC && activeC === 3 ? 'currently-active active step0 mx-auto' : 'step0 mx-auto'

                } data-background-icon='&#xf086;'>تم استلام الشحنة من التاجر</li>
                <li className={
                    activeC && activeC < 4 ? 'active step0 mx-auto' : activeC && activeC === 4 ? 'currently-active active step0 mx-auto' : 'step0 mx-auto'

                } data-background-icon='&#xf086;'>تم انشاء الشحنه</li>
            </ul>
        </div>
    )
}

export default TrackingStatusBar