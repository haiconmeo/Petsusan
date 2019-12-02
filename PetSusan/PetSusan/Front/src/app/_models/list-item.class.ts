export class List{
    public id : number;
    public name: string;
    public price: string;
    public img: string;

    constructor( name: string, price: string, img: string){
        this.name = name;
        this.price = price;
        this.img = img;
    }
}