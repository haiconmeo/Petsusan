import { mergeMap, tap } from 'rxjs/operators';
// RxJS
import { delay, distinctUntilChanged, skip, filter, take, map } from 'rxjs/operators';
// NGRX
import { Store, select } from '@ngrx/store';
// CRUD
import { BaseDataSource, QueryResultsModel } from '../../_base/crud';
// State
import { AppState } from '../../reducers';
import { selectMailsInStore, selectMailsPageLoading, selectMailsShowInitWaitingMessage } from '../_selectors/Mail.selectors';

export class MailsDataSource extends BaseDataSource {
	constructor(private store: Store<AppState>) {
		super();

		this.loading$ = this.store.pipe(
			select(selectMailsPageLoading),
		);

		this.isPreloadTextViewed$ = this.store.pipe(
			select(selectMailsShowInitWaitingMessage)
		);

		this.store.pipe(
			select(selectMailsInStore),
		).subscribe((response: QueryResultsModel) => {
			this.paginatorTotalSubject.next(response.totalCount);
			this.entitySubject.next(response.items);
		});
	}
}
