import { LightningElement } from 'lwc';

export default class HTMLEvents extends LightningElement {

    changeMessage(event) {
        const message = event.target.value; 
        const label =  event.target. label;
        console.log('Log contents ' + message + ' log label ' + label);

    }
    handleClick(event) {
        const label = event.target.label;
        console.log(' Clicked' + label);
    }


}