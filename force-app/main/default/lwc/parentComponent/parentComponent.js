import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {   
    @track showGetterSetter = true;

    constructor() {
        super();
        console.log('here in constructor of parent component');
    }

    connectedCallback() {
        console.log('here in connectedCallback of parent component');
    }

    disconnectedCallback() {
        console.log('here in disconnectedCallback of parent component');
    }

    handleClick() {
        this.showGetterSetter = !this.showGetterSetter;
    }
    
}