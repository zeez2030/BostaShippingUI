import TransitEvent from './TransitEvent';

export default class Shippment{
    historyEvents = [];
    constructor(resShippment) {
        this.currentState= resShippment.CurrentStatus.state;
        this.lastUpdateDate = resShippment.CurrentStatus.timestamp;
        resShippment.TransitEvents.forEach(tEvent=>{
            const historyEvent = new TransitEvent(tEvent);
            this.historyEvents.push(historyEvent);
        })
        this.promisedDate = resShippment.PromisedDate? resShippment.PromisedDate : resShippment.CreateDate; 
    }


}