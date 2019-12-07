// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RxJS
import { Observable } from 'rxjs';
// CRUD
import { HttpUtilsService, QueryParamsModel, QueryResultsModel } from '../../_base/crud';
// Models
import { MailModel } from '../_models/mail.model';

const API_MAILS_URL = 'api/mails';

@Injectable()
export class MailsService {
	constructor(private http: HttpClient, private httpUtils: HttpUtilsService) { }

	// // CREATE =>  POST: add a new mail to the server
	// createMail(Mail: MailModel): Observable<MailModel> {
	// 	// Note: Add headers if needed (tokens/bearer)
	// 	const httpHeaders = this.httpUtils.getHTTPHeaders();
	// 	return this.http.post<MailModel>(API_MAILS_URL, mail, { headers: httpHeaders});
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
	// Server should return filtered/sorted result
	findMails(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		// Note: Add headers if needed (tokens/bearer)
		const httpHeaders = this.httpUtils.getHTTPHeaders();
		const httpParams = this.httpUtils.getFindHTTPParams(queryParams);

		const url = API_MAILS_URL + '/find';
		return this.http.get<QueryResultsModel>(url, {
			headers: httpHeaders,
			params:  httpParams
		});
	}

	// // UPDATE => PUT: update the Mail on the server
	// updateMail(Mail: MailModel): Observable<any> {
	// 	const httpHeader = this.httpUtils.getHTTPHeaders();
	// 	return this.http.put(API_MailS_URL, Mail, { headers: httpHeader });
	// }

	// UPDATE Status
	updateStatusForMail(mails: MailModel[], status: number): Observable<any> {
		const httpHeaders = this.httpUtils.getHTTPHeaders();
		const body = {
			MailsForUpdate: mails,
			newStatus: status
		};
		const url = API_MAILS_URL + '/updateStatus';
		return this.http.put(url, body, { headers: httpHeaders });
	}

	// DELETE => delete the Mail from the server
	deleteMail(mailId: number): Observable<MailModel> {
		const url = `${API_MAILS_URL}/${mailId}`;
		return this.http.delete<MailModel>(url);
	}

	deleteMails(ids: number[] = []): Observable<any> {
		const url = API_MAILS_URL + '/deleteMails';
		const httpHeaders = this.httpUtils.getHTTPHeaders();
		const body = { MailIdsForDelete: ids };
		return this.http.put<QueryResultsModel>(url, body, { headers: httpHeaders} );
	}
}
