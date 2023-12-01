import { faker } from '@faker-js/faker';

export const revenueFactory = (num: number) =>
	[...Array(num).keys()].map(() => {
		return {
			month: faker.date.month(),
			revenue: faker.number.int({ min: 2_500, max: 10_000 }) * 100
		};
	});
