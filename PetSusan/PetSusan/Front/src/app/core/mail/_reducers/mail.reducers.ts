// NGRX
import { createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';
// Actions
import { MailActions, MailActionTypes } from '../_actions/mail.action';
// Models
import { MailModel } from '../_models/Mail.model';
import { QueryParamsModel } from '../../_base/crud';

export interface MailsState extends EntityState<MailModel> {
    listLoading: boolean;
    actionsloading: boolean;
    totalCount: number;
    lastCreatedMailId: number;
    lastQuery: QueryParamsModel;
    showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<MailModel> = createEntityAdapter<MailModel>();

export const initialMailsState: MailsState = adapter.getInitialState({
    MailForEdit: null,
    listLoading: false,
    actionsloading: false,
    totalCount: 0,
    lastCreatedMailId: undefined,
    lastQuery: new QueryParamsModel({}),
    showInitWaitingMessage: true
});

export function mailsReducer(state = initialMailsState, action: MailActions): MailsState {
    switch  (action.type) {
        case MailActionTypes.MailsPageToggleLoading: {
            return {
                ...state, listLoading: action.payload.isLoading, lastCreatedMailId: undefined
            };
        }
        case MailActionTypes.MailActionToggleLoading: {
            return {
                ...state, actionsloading: action.payload.isLoading
            };
        }
        // case MailActionTypes.MailOnServerCreated: return {
        //     ...state
        // };
        // case MailActionTypes.MailCreated: return adapter.addOne(action.payload.Mail, {
        //     ...state, lastCreatedMailId: action.payload.Mail.id
        // });
        case MailActionTypes.MailUpdated: return adapter.updateOne(action.payload.partialMail, state);
        case MailActionTypes.MailsStatusUpdated: {
            const _partialMails: Update<MailModel>[] = [];
            // tslint:disable-next-line:prefer-const
            for (let i = 0; i < action.payload.mails.length; i++) {
                _partialMails.push({
				    id: action.payload.mails[i].id,
				    changes: {
                        status: action.payload.status
                    }
			    });
            }
            return adapter.updateMany(_partialMails, state);
        }
        case MailActionTypes.OneMailDeleted: return adapter.removeOne(action.payload.id, state);
        case MailActionTypes.ManyMailsDeleted: return adapter.removeMany(action.payload.ids, state);
        case MailActionTypes.MailsPageCancelled: {
            return {
                ...state, listLoading: false, lastQuery: new QueryParamsModel({})
            };
        }
        case MailActionTypes.MailsPageLoaded: {
            return adapter.addMany(action.payload.mails, {
                ...initialMailsState,
                totalCount: action.payload.totalCount,
                listLoading: false,
                lastQuery: action.payload.page,
                showInitWaitingMessage: false
            });
        }
        default: return state;
    }
}

export const getMailState = createFeatureSelector<MailModel>('Mails');

export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal
} = adapter.getSelectors();
