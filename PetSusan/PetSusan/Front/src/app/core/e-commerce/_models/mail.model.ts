import { BaseModel } from '../../_base/crud';

export class MailModel  extends BaseModel {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	subject: string;
	status: number; // 0 = Sended | 1 = Mada
	message: string;

	clear() {
		this.firstName = '';
		this.lastName = '';
		this.email = '';
		this.status = 1;
		this.message = '';
	}
}
