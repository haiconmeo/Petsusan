export class List{
    public id : number;
    public image: string;
    public name: string;
    public price: number;
    public weight: number;
    public color: string;
    public amounts: number;
    public pet: boolean ;
    public sex: boolean;
    public description : string;
    public rate_tb: number;
    public cat_giong : string;
    public cat_loai : string;


    constructor( 
        image: string,
        name: string,
        price: number,
        weight: number,
        color: string,
        amounts: number,
        pet: boolean,
        sex: boolean,
        description : string,
        rate_tb: number,
        cat_giong : string,
        cat_loai : string)
        {

        this.image = image;
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.color = color;
        this.amounts = amounts;
        this.pet = pet;
        this.sex = sex;
        this.description = description;
        this.rate_tb = rate_tb;
        this.cat_giong = cat_giong;
        this.cat_loai = cat_loai;
    }
}