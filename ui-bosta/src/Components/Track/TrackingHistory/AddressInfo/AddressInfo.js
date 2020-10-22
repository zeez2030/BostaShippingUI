import React from 'react'
import SVG from '../../../../assets/images/question.svg';

const AddressInfo = () => {
    return (
        <div className="col-sm-12 col-md-4 justify-content-end" >

            <p style={{ color: 'black', fontWeight: 'bold' }}>عنوان التسليم</p>
            <div className="col-12 delivery-location">
                <p style={{ color: 'black' }}>
                    امبابه طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22,, Cairo
                            </p>
            </div>
            <div className="col-12 proplem-delivery mb-5">
                <div className="row">
                    <div className="col-9">
                        <p style={{ color: 'black', fontWeight: 'bold' }}>هل يوجد مشكلة في شحنتك ؟</p>
                        <button className="text-center"> ابلاغ عن مشكلة </button>
                    </div>
                    <div className="col-3" >
                        <img src={SVG} alt="Questions" className="img-fluid w-100 svg-img" />
                    </div>
                </div>

            </div>


        </div>
    )
}

export default AddressInfo;