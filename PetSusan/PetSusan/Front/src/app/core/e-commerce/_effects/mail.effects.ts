import { QueryParamsModel } from './../../_base/crud/models/query-models/query-params.model';
import { forkJoin } from 'rxjs';
// Angular
import { Injectable } from '@angular/core';
// RxJS
import { mergeMap, map, tap, delay } from 'rxjs/operators';
// NGRX
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// CRUD
import { QueryResultsModel } from '../../_base/crud';
// Services
import { MailsService } from '../_services/';
// State
import { AppState } from '../../../core/reducers';
// Actions
import {
    MailActionTypes,
    MailsPageRequested,
    MailsPageLoaded,
    ManyMailsDeleted,
    OneMailDeleted,
    MailActionToggleLoading,
    MailsPageToggleLoading,
    MailUpdated,
    MailsStatusUpdated,
    // MailCreated,
    // MailOnServerCreated
} from '../_actions/mail.action';
import { of } from 'rxjs';

@Injectable()
export class MailEffects {
    showPageLoadingDistpatcher = new MailsPageToggleLoading({ isLoading: true });
    showActionLoadingDistpatcher = new MailActionToggleLoading({ isLoading: true });
    hideActionLoadingDistpatcher = new MailActionToggleLoading({ isLoading: false });

    @Effect()
    loadMailsPage$ = this.actions$.pipe(
        ofType<MailsPageRequested>(MailActionTypes.MailsPageRequested),
        mergeMap(( { payload } ) => {
            this.store.dispatch(this.showPageLoadingDistpatcher);
            const requestToServer = this.mailsService.findMails(payload.page);
            const lastQuery = of(payload.page);
            return forkJoin(requestToServer, lastQuery);
        }),
        map(response => {
            const result: QueryResultsModel = response[0];
            const lastQuery: QueryParamsModel = response[1];
            const pageLoadedDispatch = new MailsPageLoaded({
                mails: result.items,
                totalCount: result.totalCount,
                page: lastQuery
            });
            return pageLoadedDispatch;
        })
    );

    @Effect()
    deleteMail$ = this.actions$
        .pipe(
            ofType<OneMailDeleted>(MailActionTypes.OneMailDeleted),
            mergeMap(( { payload } ) => {
                    this.store.dispatch(this.showActionLoadingDistpatcher);
                    return this.mailsService.deleteMail(payload.id);
                }
            ),
            map(() => {
                return this.hideActionLoadingDistpatcher;
            }),
        );

    @Effect()
    deleteMails$ = this.actions$
        .pipe(
            ofType<ManyMailsDeleted>(MailActionTypes.ManyMailsDeleted),
            mergeMap(( { payload } ) => {
                    this.store.dispatch(this.showActionLoadingDistpatcher);
                    return this.mailsService.deleteMails(payload.ids);
                }
            ),
            map(() => {
                return this.hideActionLoadingDistpatcher;
            }),
        );

    // @Effect()
    // updateMail$ = this.actions$
    //     .pipe(
    //         ofType<MailUpdated>(MailActionTypes.MailUpdated),
    //         mergeMap(( { payload } ) => {
    //             this.store.dispatch(this.showActionLoadingDistpatcher);
    //             return this.MailsService.updateMail(payload.Mail);
    //         }),
    //         map(() => {
    //             return this.hideActionLoadingDistpatcher;
    //         })
    //     );

    @Effect()
    updateMailsStatus$ = this.actions$
        .pipe(
            ofType<MailsStatusUpdated>(MailActionTypes.MailsStatusUpdated),
            mergeMap(( { payload } ) => {
                this.store.dispatch(this.showActionLoadingDistpatcher);
                return this.mailsService.updateStatusForMail(payload.mails, payload.status);
            }),
            map(() => {
                return this.hideActionLoadingDistpatcher;
            })
        );

    // @Effect()
    // createMail$ = this.actions$
    //     .pipe(
    //         ofType<MailOnServerCreated>(MailActionTypes.MailOnServerCreated),
    //         mergeMap(( { payload } ) => {
    //             this.store.dispatch(this.showActionLoadingDistpatcher);
    //             return this.MailsService.createMail(payload.Mail).pipe(
    //                 tap(res => {
    //                     this.store.dispatch(new MailCreated({ Mail: res }));
    //                 })
    //             );
    //         }),
    //         map(() => {
    //             return this.hideActionLoadingDistpatcher;
    //         }),
    //     );

    constructor(private actions$: Actions, private mailsService: MailsService, private store: Store<AppState>) { }
}
