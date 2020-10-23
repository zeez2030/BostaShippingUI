export const getArabicMonth=(month)=>{
    switch(month){
        case 1 : return 'يناير';
        case 2 : return 'فبراير';
        case 3 : return 'مارس';
        case 4 : return 'إبريل';
        case 5 : return 'مايو';
        case 6 : return 'يونيو';
        case 7 : return 'يوليو';
        case 8 : return 'أغسطس';
        case 9 : return 'سبتمبر';
        case 10 : return 'أكتوبر';
        case 11 : return 'نوفمبر';
        case 12 : return 'ديسمبر';
        default : return 'none';
    }
}


export const getArabicState=(state)=>{
    switch(state){
        case 'DELIVERED' : return 'تم التوصيل';
        case 'DELIVERED_TO_SENDER' : return 'تم التوصيل';
        case 'TICKET_CREATED': return 'تم إنشاء الشحنة';
        case 'PACKAGE_RECEIVED': return 'تم استلام الطرد';
        case 'NOT_YET_SHIPPED' : return 'لم يتم شحنه بعد';
        case 'OUT_FOR_DELIVERY' : return 'الشحنة خرجت للتسليم';
        case 'RECEIVED_DELIVERY_LOCATION' : return 'تم استلام موقع التسليم';
        case 'WAITING_FOR_CUSTOMER_ACTION' : return 'لم يتم تسليم الشحنة';
        case 'IN_TRANSIT':return 'في مرحلة انتقالية';
        default: return 'zeez';

    }
}

export const getArabicDay=(day)=>{
    switch(day){
        case 0 : return 'الاحد';
        case 1 :return 'الاثنين';
        case 2 : return 'الثلاثاء';
        case 3 : return 'الاربعاء';
        case 4 : return 'الخميس';
        case 5 : return 'الجمعة';
        case 6 : return 'السبت';
    }
}

export const getArabicHub=(hub)=>{
    switch(hub){
        case 'Mohandseen Hub' : return 'المهندسين';
        case 'Bosta HQ' : return 'المقر الرئيسي';
        case 'Katamya Hub' : return 'القطاميه';
        case 'Cairo Sorting Facility' : return 'مقر القاهرة للفرز' ;
        case 'Tanta Hub' : return 'طنطا';
        case 'Alexandria Hub' : return 'الأسكندريه';
        default : return null;
    }
}