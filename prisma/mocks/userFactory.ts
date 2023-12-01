import { faker } from '@faker-js/faker';

export const userFactory = (num: number) =>
	[...Array(num).keys()].map(() => {
		return {
			email: faker.internet.email(),
			name: faker.person.fullName(),
			password: faker.internet.password()
		};
	});
