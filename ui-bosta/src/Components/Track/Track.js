import React from 'react'

const Track = () => {
    return (
        <div className="container">
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">موعد التسليم خلال</th>
                        <th scope="col">اسم التاجر</th>
                        <th scope="col">اخر تحديث</th>
                        <th scope="col">رقم الشحنة</th>
                    </tr>
                    <tr>
                        <th scope="col">2020  يناير{3}</th>
                        <th scope="col">SOUQ.com</th>
                        <th scope="col">at 5:33pm 06/04/2020 الاثنين</th>
                        <th scope="col">تم الغاء الشحنة</th>
                    </tr>
                </thead>

            </table>

        </div>
    )
}

export default Track