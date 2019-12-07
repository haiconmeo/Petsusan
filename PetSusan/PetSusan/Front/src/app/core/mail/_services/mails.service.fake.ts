// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RxJS
import { Observable, forkJoin, of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';
// Lodash
import { each } from 'lodash';
// CRUD
import { HttpUtilsService, QueryParamsModel, QueryResultsModel } from '../../_base/crud';
// Models
import { MailModel } from '../_models/mail.model';

const API_MAILS_URL = 'api/mails';

// Fake REST API (Mock)
// This code emulates server calls
@Injectable()
export class MailsService {
	constructor(private http: HttpClient, private httpUtils: HttpUtilsService) { }

	// // CREATE =>  POST: add a new Mail to the server
	// createMail(Mail: MailModel): Observable<MailModel> {
	// 	// Note: Add headers if needed (tokens/bearer)
	// 	const httpHeaders = this.httpUtils.getHTTPHeaders();
	// 	return this.http.post<MailModel>(API_MailS_URL, Mail, { headers: httpHeaders});
	// }

	// READ
	getAllMails(): Observable<MailModel[]> {
		return this.http.get<MailModel[]>(API_MAILS_URL);
	}

	getMailById(mailId: number): Observable<MailModel> {
		return this.http.get<MailModel>(API_MAILS_URL + `/${mailId}`);
	}

	// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
	// items => filtered/sorted result
	findMails(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		// This code imitates server calls
		const url = API_MAILS_URL;
		return this.http.get<MailModel[]>(API_MAILS_URL).pipe(
			mergeMap(res => {
				const result = this.httpUtils.baseFilter(res, queryParams, ['status', 'type']);
				return of(result);
			})
		);
	}


	// UPDATE => PUT: update the Mail on the server
	updateMail(mail: MailModel): Observable<any> {
		const httpHeader = this.httpUtils.getHTTPHeaders();
		return this.http.put(API_MAILS_URL, mail, { headers: httpHeader });
	}

	// UPDATE Status
	updateStatusForMail(mails: MailModel[], status: number): Observable<any> {
		const tasks$ = [];
		each(mails, element => {
			const _mail = Object.assign({}, element);
			_mail.status = status;
			tasks$.push(this.updateMail(_mail));
		});
		return forkJoin(tasks$);
	}

	// DELETE => delete the mail from the server
	deleteMail(mailId: number): Observable<any> {
		const url = `${API_MAILS_URL}/${mailId}`;
		return this.http.delete<MailModel>(url);
	}

	deleteMails(ids: number[] = []): Observable<any> {
		const tasks$ = [];
		const length = ids.length;
		// tslint:disable-next-line:prefer-const
		for (let i = 0; i < length; i++) {
			tasks$.push(this.deleteMail(ids[i]));
		}
		return forkJoin(tasks$);
	}
}
