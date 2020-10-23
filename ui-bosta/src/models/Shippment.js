import TransitEvent from './TransitEvent';
import {getArabicMonth , getArabicState , getArabicDay} from './helpers/GetArabicNamesHelper';
export default class Shippment{
    historyEvents = [];
    promisedDateFormated = "";
    lastUpdateDateFormated = "";
    constructor(resShippment) {
        this.currentState= resShippment.CurrentStatus.state;
        this.textColor = this.currentState==="DELIVERED" || this.currentState==="DELIVERED_TO_SENDER" ? '#2ecc71' : 'sandybrown';
        this.activeClass = 
        this.arabicState = getArabicState(this.currentState);
        this.lastUpdateDate = resShippment.CurrentStatus.timestamp;
        resShippment.TransitEvents.forEach(tEvent=>{
            const historyEvent = new TransitEvent(tEvent);
            this.historyEvents.push(historyEvent);
        })
        this.promisedDate = resShippment.PromisedDate? resShippment.PromisedDate : resShippment.CreateDate; 
    }

    getPromisedDate = ()=>{
        const d = new Date(this.promisedDate);
        const month =  getArabicMonth(d.getMonth() + 1);
        const year = d.getFullYear();
        const day =  d.getUTCDate();
        this.promisedDateFormated=`${year} ${month} ${day}`;
        return this.promisedDateFormated; 
    }
    getCurrentState = ()=>{
       return this.arabicState ;
    }

    getLastUpdateDate = ()=>{
        const d = new Date(this.lastUpdateDate);
        const hour = d.getUTCHours() > 12 ? d.getUTCHours()-12 :d.getUTCHours();
        const min = ("0" + (d.getUTCMinutes() )).slice(-2);
        const amPM = d.getUTCHours() >= 12 ? "PM":"AM";
         const time = `at ${hour}:${min}${amPM} `

        const month = ("0" + (d.getMonth() + 1)).slice(-2);
        const year = d.getFullYear();
        const day =  ("0" + (d.getUTCDate() )).slice(-2);
        const arabicDay = getArabicDay(d.getUTCDay());
        const date=`${arabicDay} ${day}/${month}/${year}`;

        this.lastUpdateDateFormated=time+date;
        return this.lastUpdateDateFormated;
    }

    getActiveClass=()=>{
        
         switch(this.currentState){
            case 'TICKET_CREATED' :
                return 4
            case 'DELIVERED' :
            case 'DELIVERED_TO_SENDER': 
                return 1 ; 
            case 'OUT_FOR_DELIVERY':
                return 2;
                
            case 'PACKAGE_RECEIVED':
                return 3
            default : return 4;
        }
    }

}