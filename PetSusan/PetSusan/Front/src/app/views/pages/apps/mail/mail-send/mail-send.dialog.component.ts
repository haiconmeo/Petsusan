// Angular
import { Component, OnInit, Inject, ChangeDetectionStrategy, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Material
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// RxJS
import { Subscription, of } from 'rxjs';
import { delay } from 'rxjs/operators';
// NGRX
import { Update } from '@ngrx/entity';
import { Store, select } from '@ngrx/store';
// State
import { AppState } from '../../../../../core/reducers';
// CRUD
import { TypesUtilsService } from '../../../../../core/_base/crud';
// Services and Models
import { MailModel, MailUpdated, MailOnServerCreated, selectLastCreatedMailId, selectMailsPageLoading, selectMailsActionLoading } from '../../../../../../core/e-commerce';

@Component({
	// tslint:disable-next-line:component-selector
	selector: 'kt-Mails-edit-dialog',
	templateUrl: './Mail-edit.dialog.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class MailEditDialogComponent implements OnInit, OnDestroy {
	// Public properties
	Mail: MailModel;
	MailForm: FormGroup;
	hasFormErrors: boolean = false;
	viewLoading: boolean = false;
	// Private properties
	private componentSubscriptions: Subscription;

	/**
	 * Component constructor
	 *
	 * @param dialogRef: MatDialogRef<MailEditDialogComponent>
	 * @param data: any
	 * @param fb: FormBuilder
	 * @param store: Store<AppState>
	 * @param typesUtilsService: TypesUtilsService
	 */
	constructor(public dialogRef: MatDialogRef<MailEditDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private fb: FormBuilder,
		private store: Store<AppState>,
		private typesUtilsService: TypesUtilsService) {
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
		this.store.pipe(select(selectMailsActionLoading)).subscribe(res => this.viewLoading = res);
		this.Mail = this.data.Mail;
		this.createForm();
	}

	/**
	 * On destroy
	 */
	ngOnDestroy() {
		if (this.componentSubscriptions) {
			this.componentSubscriptions.unsubscribe();
		}
	}

	createForm() {
		this.MailForm = this.fb.group({
			firstName: [this.Mail.firstName, Validators.required],
			lastName: [this.Mail.lastName, Validators.required],
			email: [ this.Mail.email, Validators.compose([Validators.required, Validators.email]) ],
			dob: [this.typesUtilsService.getDateFromString(this.Mail.dateOfBbirth), Validators.compose([Validators.nullValidator])],
			userName: [this.Mail.userName, Validators.compose([Validators.required])],
			gender: [this.Mail.gender, Validators.compose([Validators.required])],
			ipAddress: [this.Mail.ipAddress, Validators.compose([Validators.required])],
			type: [this.Mail.type.toString(), Validators.compose([Validators.required])]
		});
	}

	/**
	 * Returns page title
	 */
	getTitle(): string {
		if (this.Mail.id > 0) {
			return `Edit Mail '${this.Mail.firstName} ${
				this.Mail.lastName
			}'`;
		}

		return 'New Mail';
	}

	/**
	 * Check control is invalid
	 * @param controlName: string
	 */
	isControlInvalid(controlName: string): boolean {
		const control = this.MailForm.controls[controlName];
		const result = control.invalid && control.touched;
		return result;
	}

	/** ACTIONS */

	/**
	 * Returns prepared Mail
	 */
	prepareMail(): MailModel {
		const controls = this.MailForm.controls;
		const _Mail = new MailModel();
		_Mail.id = this.Mail.id;
		const _date = controls['dob'].value;
		if (_date) {
			_Mail.dateOfBbirth = this.typesUtilsService.dateFormat(_date);
		} else {
			_Mail.dateOfBbirth = '';
		}
		_Mail.firstName = controls['firstName'].value;
		_Mail.lastName = controls['lastName'].value;
		_Mail.email = controls['email'].value;
		_Mail.userName = controls['userName'].value;
		_Mail.gender = controls['gender'].value;
		_Mail.ipAddress = controls['ipAddress'].value;
		_Mail.type = +controls['type'].value;
		_Mail.status = this.Mail.status;
		return _Mail;
	}

	/**
	 * On Submit
	 */
	onSubmit() {
		this.hasFormErrors = false;
		const controls = this.MailForm.controls;
		/** check form */
		if (this.MailForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);

			this.hasFormErrors = true;
			return;
		}

		const editedMail = this.prepareMail();
		if (editedMail.id > 0) {
			this.updateMail(editedMail);
		} else {
			this.createMail(editedMail);
		}
	}

	/**
	 * Update Mail
	 *
	 * @param _Mail: MailModel
	 */
	updateMail(_Mail: MailModel) {
		const updateMail: Update<MailModel> = {
			id: _Mail.id,
			changes: _Mail
		};
		this.store.dispatch(new MailUpdated({
			partialMail: updateMail,
			Mail: _Mail
		}));

		// Remove this line
		of(undefined).pipe(delay(1000)).subscribe(() => this.dialogRef.close({ _Mail, isEdit: true }));
		// Uncomment this line
		// this.dialogRef.close({ _Mail, isEdit: true }
	}

	/**
	 * Create Mail
	 *
	 * @param _Mail: MailModel
	 */
	createMail(_Mail: MailModel) {
		this.store.dispatch(new MailOnServerCreated({ Mail: _Mail }));
		this.componentSubscriptions = this.store.pipe(
			select(selectLastCreatedMailId),
			delay(1000), // Remove this line
		).subscribe(res => {
			if (!res) {
				return;
			}

			this.dialogRef.close({ _Mail, isEdit: false });
		});
	}

	/** Alect Close event */
	onAlertClose($event) {
		this.hasFormErrors = false;
	}
}
