import React from 'react'

const HistoryTable = () => {
    return (
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
    )
}

export default HistoryTable;