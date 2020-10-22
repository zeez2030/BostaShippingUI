export default class TransitEvent{
    constructor(event){
        this.state = event.state;
        this.timestamp = event.timestamp;
        this.hub = event.hub? event.hub:null;
        
    }
}