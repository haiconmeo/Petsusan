// NGRX
import { createFeatureSelector, createSelector } from '@ngrx/store';
// Lodash
import { each } from 'lodash';
// CRUD
import { QueryResultsModel, HttpExtenstionsModel } from '../../_base/crud';
// State
import { MailsState } from '../_reducers/mail.reducers';
import { MailModel } from '../_models/mail.model';

export const selectMailsState = createFeatureSelector<MailsState>('mails');

export const selectMailById = (mailId: number) => createSelector(
    selectMailsState,
    mailsState => mailsState.entities[mailId]
);

export const selectMailsPageLoading = createSelector(
    selectMailsState,
    mailsState => mailsState.listLoading
);

export const selectMailsActionLoading = createSelector(
    selectMailsState,
    mailsState => mailsState.actionsloading
);

export const selectLastCreatedMailId = createSelector(
    selectMailsState,
    mailsState => mailsState.lastCreatedMailId
);

export const selectMailsShowInitWaitingMessage = createSelector(
    selectMailsState,
    mailsState => mailsState.showInitWaitingMessage
);

export const selectMailsInStore = createSelector(
    selectMailsState,
    mailsState => {
        const items: MailModel[] = [];
        each(mailsState.entities, element => {
            items.push(element);
        });
        const httpExtension = new HttpExtenstionsModel();
        const result: MailModel[] = httpExtension.sortArray(items, mailsState.lastQuery.sortField, mailsState.lastQuery.sortOrder);
        return new QueryResultsModel(result, mailsState.totalCount, '');
    }
);
