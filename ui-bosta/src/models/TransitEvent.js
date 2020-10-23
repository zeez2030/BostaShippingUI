import {getArabicState , getArabicHub} from './helpers/GetArabicNamesHelper';
export default class TransitEvent{
    date="";
    time="";
    constructor(event){
        this.state = event.state;
        this.arabicState = getArabicState(this.state);
        this.timestamp = event.timestamp;
        this.hub = event.hub? event.hub:null;
        this.arabicHub = getArabicHub(this.hub);
        this.reason = event.reason? event.reason:null;

    }

    getDate=()=>{
        const d = new Date(this.timestamp);
        const month = ("0" + (d.getMonth() + 1)).slice(-2);
        const year = d.getFullYear();
        const day =  ("0" + (d.getUTCDate() )).slice(-2);
        this.date=`${day}/${month}/${year}`;
        return this.date; 
    }

    getTime=()=>{
        const d = new Date(this.timestamp);
        const hour = d.getUTCHours() > 12 ? d.getUTCHours()-12 :d.getUTCHours();
        const min = ("0" + (d.getUTCMinutes() )).slice(-2);
        const amPM = d.getUTCHours() >= 12 ? "PM":"AM";
        this.time = `${hour}:${min} ${amPM}`
        return this.time;
    }

    getState=()=>{
        return  this.arabicState
    }

    getArabicHub = ()=>{
        return this.arabicHub;
    }
}