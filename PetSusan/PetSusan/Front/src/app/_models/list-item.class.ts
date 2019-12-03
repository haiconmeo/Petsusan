export class List{
    public id : number;
    public name: string;
    public price: number;
    public img: string;

    constructor( name: string, price: number, img: string){
        this.name = name;
        this.price = price;
        this.img = img;
    }
}