import { LightningElement, track } from 'lwc';

export default class IfElse extends LightningElement {

    @track showImage = true;
    handleClick() {
        this.showImage = !this.showImage;
        console.log('Log contents ' + this.showImage);
    }

}