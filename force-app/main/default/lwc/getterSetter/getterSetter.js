/* eslint-disable no-alert */
/* eslint-disable no-useless-constructor */
import { LightningElement } from 'lwc';

export default class GetterSetter extends LightningElement {

    constructor() {
        super();
        console.log('here in constructor of inner component');
    }
    string = 'John';

    get name() {
        alert('here in get' + this.string);
        return this.string;
    }

    set name(value) { 
        alert('here in set' + value);
        this.string = value.toLowerCase();
    }

    handleClick(){
        this.name = 'JANE'; 
    }

    connectedCallback() {
        console.log('here in connectedCallback of inner component');
    }

    disconnectedCallback() {
        console.log('here in disconnectedCallback of inner component');
    }

}