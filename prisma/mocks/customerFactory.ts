import { faker } from '@faker-js/faker';

const invoicesFactory = (n: number) =>
	[...Array(n).keys()].map(() => {
		const possibleStatuses = ['PAID', 'UNPAID', 'OVERDUE'];

		return {
			amount: faker.number.int({ min: 45, max: 500 }) * 100,
			date: faker.date.recent({ days: 120 }),
			// status: faker.helpers.arrayElements(possibleStatuses)
			status: possibleStatuses[Math.floor(Math.random() * possibleStatuses.length)]
		};
	});

export const customerFactory = (n: number) =>
	[...Array(n).keys()].map(() => {
		return {
			email: faker.internet.email(),
			name: faker.person.fullName(),
			image_url: faker.internet.avatar(),
			password: faker.internet.password(),
			invoices: {
				create: invoicesFactory(3)
			}
		};
	});
