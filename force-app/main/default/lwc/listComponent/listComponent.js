import { LightningElement } from 'lwc';

export default class ListComponent extends LightningElement {
    contacts= [
        {
            Id : 1,
            Name: 'John Doe',
            Title: 'CEO',
            Phone: '123-456-7890 - 1',
            Email: 'JohnDoe1@email.com'           
        },
        {
            Id : 2,
            Name : 'John Doe 2',
            Title : 'CEO 2',
            Phone : '123-456-7890 - 2',
            Email : 'JohnDoe2@email.com'           
        },
        {
            Id : 3,
            Name : 'John Doe 3',
            Title : 'CEO 3',
            Phone : '123-456-7890 - 3',
            Email : 'JohnDoe3@email.com'           
        },
        {
            Id : 4,
            Name : 'John Doe 4',
            Title : 'CEO 4',
            Phone : '123-456-7890 - 4',
            Email : 'JohnDoe4@email.com'           
        }
    ]
}