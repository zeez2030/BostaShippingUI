import React from 'react'

const HistoryTable = ({ history }) => {

    let hub = "";
    const renderHisotryRows = () => {
        if (history) {
            return history.map(h => {
                hub = h.getArabicHub() ? h.getArabicHub() : hub;
                return (
                    <tr key={h.timestamp}>
                        <td >
                            {h.getState()}<br />
                            <span style={{ color: 'sandybrown' }}>
                                {h.reason}
                            </span>

                        </td>
                        <td>{h.getTime()}</td>
                        <td>{h.getDate()}</td>
                        <td>{hub}</td>
                    </tr>
                )
            }
            )

        } else {
            return null
        }
    }

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
                    {renderHisotryRows()}
                </tbody>
            </table>

        </div>
    )
}

export default HistoryTable;