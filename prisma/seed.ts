import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

try {
	await prisma.user.upsert({
		where: { email: 'alice@prisma.io' },
		update: {},
		create: {
			email: 'alice@prisma.io',
			name: 'Alice',
			password: 'rawr'
		}
	});
	await prisma.user.upsert({
		where: { email: 'bob@prisma.io' },
		update: {},
		create: {
			email: 'bob@prisma.io',
			name: 'Bob',
			password: 'rawr'
		}
	});

	await prisma.$disconnect();
} catch (error) {
	console.error(error);
}
