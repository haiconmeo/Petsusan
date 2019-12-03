// import { List } from './list-item.class'

// export class Cart{
//     public item : List
//     public quantity: number;

//     constructor( item: List, quantity : number){
//         this.item = item;
//         this.quantity = this.quantity;
//     }
// }

export class Cart{
    public id : number;
    public name: string;
    public price: number;
    public img: string;
    public quantity: number;
    public age: number

    constructor(id : number, name: string, price : number,  img: string, quantity: number, age: number){
        this.name = name;
        this.price = price;
        this.img = img;
        this.quantity = quantity;
        this.id =id;
        this.age = age;
    }
}