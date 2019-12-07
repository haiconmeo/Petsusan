export class MenuConfig {
	public defaults: any = {
		header: {
			self: {},
			'items': []
		},
		aside: {
			self: {},
			items: [
				{
					title: 'Dashboard',
					root: true,
					icon: 'flaticon2-architecture-and-city',
					page: 'dashboard',
					translate: 'MENU.DASHBOARD',
					bullet: 'dot',
				},
				{
					title: 'Quản lý Category',
					bullet: 'dot',
					icon: 'flaticon2-list-2',
					root: true,
					permission: 'accessToECommerceModule',
					submenu: [
						{
							title: 'Quản lý loài',
							page: 'ecommerce/customers'
						},
						{
							title: 'Quản lý giống',
							page: 'ecommerce/products'
						},
						{
							title: 'Quản lý hàng hoá',
							page: 'ecommerce/products'
						}
					]
				},
				{
					title: 'Quản lý phản hồi',
					root: true,
					icon: 'flaticon2-list-3',
					page: 'mail'
				},

				{
					title: 'Quản lý thành viên',
					root: true,
					bullet: 'dot',
					icon: 'flaticon2-user-outline-symbol',
					submenu: [
						{
							title: 'Users',
							page: 'user-management/users'
						},
						{
							title: 'Roles',
							page: 'user-management/roles'
						}
					]
				},
			]
		},
	};

	public get configs(): any {
		return this.defaults;
	}
}
