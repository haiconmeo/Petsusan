// NGRX
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
// CRUD
import { QueryParamsModel } from '../../_base/crud';
// Models
import { MailModel } from '../_models/mail.model';

export enum MailActionTypes {
    // MailOnServerCreated = '[Edit Mail Dialog] Mail On Server Created',
    // MailCreated = '[Edit Mail Dialog] Mail Created',
    MailUpdated = '[Edit Mail Dialog] Mail Updated',
    MailsStatusUpdated = '[Mail List Page] Mails Status Updated',
    OneMailDeleted = '[Mails List Page] One Mail Deleted',
    ManyMailsDeleted = '[Mails List Page] Many Mails Deleted',
    MailsPageRequested = '[Mails List Page] Mails Page Requested',
    MailsPageLoaded = '[Mails API] Mails Page Loaded',
    MailsPageCancelled = '[Mails API] Mails Page Cancelled',
    MailsPageToggleLoading = '[Mails] Mails Page Toggle Loading',
    MailActionToggleLoading = '[Mails] Mails Action Toggle Loading'
}

// export class MailOnServerCreated implements Action {
//     readonly type = MailActionTypes.MailOnServerCreated;
//     constructor(public payload: { Mail: MailModel }) { }
// }

// export class MailCreated implements Action {
//     readonly type = MailActionTypes.MailCreated;
//     constructor(public payload: { Mail: MailModel }) { }
// }

export class MailUpdated implements Action {
    readonly type = MailActionTypes.MailUpdated;
    constructor(public payload: {
        partialMail: Update<MailModel>, // For State update
        mail: MailModel // For Server update (through service)
    }) { }
}

export class MailsStatusUpdated implements Action {
    readonly type = MailActionTypes.MailsStatusUpdated;
    constructor(public payload: {
        mails: MailModel[],
        status: number
    }) { }
}

export class OneMailDeleted implements Action {
    readonly type = MailActionTypes.OneMailDeleted;
    constructor(public payload: { id: number }) {}
}

export class ManyMailsDeleted implements Action {
    readonly type = MailActionTypes.ManyMailsDeleted;
    constructor(public payload: { ids: number[] }) {}
}

export class MailsPageRequested implements Action {
    readonly type = MailActionTypes.MailsPageRequested;
    constructor(public payload: { page: QueryParamsModel }) { }
}

export class MailsPageLoaded implements Action {
    readonly type = MailActionTypes.MailsPageLoaded;
    constructor(public payload: { mails: MailModel[], totalCount: number, page: QueryParamsModel }) { }
}

export class MailsPageCancelled implements Action {
    readonly type = MailActionTypes.MailsPageCancelled;
}

export class MailsPageToggleLoading implements Action {
    readonly type = MailActionTypes.MailsPageToggleLoading;
    constructor(public payload: { isLoading: boolean }) { }
}

export class MailActionToggleLoading implements Action {
    readonly type = MailActionTypes.MailActionToggleLoading;
    constructor(public payload: { isLoading: boolean }) { }
}

export type MailActions = //MailOnServerCreated
// | MailCreated
 MailUpdated
| MailsStatusUpdated
| OneMailDeleted
| ManyMailsDeleted
| MailsPageRequested
| MailsPageLoaded
| MailsPageCancelled
| MailsPageToggleLoading
| MailActionToggleLoading;
