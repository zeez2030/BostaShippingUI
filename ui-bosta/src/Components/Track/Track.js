import React from 'react'
import './Track.css'
import SVG from '../../assets/images/question.svg';
const Track = () => {
    return (
        <div className="container">
            <div className="container main-container mt-5">

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
                        <p className="text-muted text-right"> رقم الشحنة</p>
                        <p className="text-right bold"> تم الغاء الشحنة</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <ul id="progressbar" className="col-12 d-flex justify-content-end">
                        <li className=" step0 mx-auto" data-background-icon='&#xf086;'>تم التسليم</li>
                        <li className="  step0 mx-auto" data-background-icon='&#xf086;'>الشحنة خرجت للتسليم</li>
                        <li className="active currently-active step0 mx-auto" data-background-icon='&#xf086;'>تم استلام الشحنة من التاجر</li>
                        <li className=" active step0 mx-auto" data-background-icon='&#xf086;'>تم انشاء الشحنه</li>
                    </ul>
                </div>

            </div>
            <div className="container mt-5 ">
                <div className="row text-right">
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
                    <div className="col-sm-12 col-md-8 justify-content-end">
                        <p style={{ color: 'black', fontWeight: 'bold' }}>تفاصيل الشحنه</p>
                        <table className="table delivery-info-table">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">تفاصيل</th>
                                    <th scope="col">الوقت</th>
                                    <th scope="col">التاريخ</th>
                                    <th scope="col">الفرع</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td >تم انشاء الشحنة</td>
                                    <td>12:30pm</td>
                                    <td>05/04/2020</td>
                                    <td>مدينه نصر</td>
                                </tr>
                                <tr>
                                    <td >تم انشاء الشحنة</td>
                                    <td>12:30pm</td>
                                    <td>05/04/2020</td>
                                    <td>مدينه نصر</td>
                                </tr>
                                <tr>
                                    <td >تم انشاء الشحنة</td>
                                    <td>12:30pm</td>
                                    <td>05/04/2020</td>
                                    <td>مدينه نصر</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Track