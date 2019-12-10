import { List } from './list-item.class';
import { Profile } from '../_entities/profile';

export class Cart_item_admin{
    public id : number;
    public item: List;
    public quantity: number;
    public date: Date;
    
    public status: boolean;
    public note :string;
    public user:Profile

}