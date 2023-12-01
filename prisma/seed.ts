import { PrismaClient } from '@prisma/client';
import { userFactory } from './mocks/userFactory';
import { customerFactory } from './mocks/customerFactory';
import { revenueFactory } from './mocks/revenueFactory';
const prisma = new PrismaClient();

try {
	const users = userFactory(3);
	const customers = customerFactory(10);
	const revenues = revenueFactory(12);
	await prisma.user.createMany({
		data: users
	});
	customers.forEach(async (c) => {
		await prisma.customer.create({
			data: c
		});
	});
	await prisma.revenue.createMany({
		data: revenues
	});

	await prisma.$disconnect();
} catch (error) {
	console.error(error);
}
