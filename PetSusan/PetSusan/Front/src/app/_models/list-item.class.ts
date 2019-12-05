export class List{
    public id : number;
    public name: string;
    public price: number;
    public img: string;
    public pet: boolean;

    constructor( name: string, price: number, img: string, pet: boolean){
        this.name = name;
        this.price = price;
        this.img = img;
        this.pet = pet;
    }
}