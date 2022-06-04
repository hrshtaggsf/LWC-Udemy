import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {

    firstNumber = 0;
    secondNumber = 0;
    result = 0;
    onChangeEvent(event) {
        console.log("here1" + event.target.label);
        console.log("here2" + event.target.value);
        const value = event.target.value;
        const name = event.target.name;
        if (name === 'firstNumber') {
            this.firstNumber = parseInt(value,10);
        } else {
            this.secondNumber = parseInt(value,10);
        }
    }
    calculateResult(event) {
        console.log("here3" + event.target.label);
        if (event.target.label === "add") {
            this.result = this.firstNumber + this.secondNumber;
        }
        if (event.target.label === "sub") {
            this.result = this.firstNumber - this.secondNumber;
        }
        if (event.target.label === "mul") {
            this.result = this.firstNumber * this.secondNumber;
        }
    }
}