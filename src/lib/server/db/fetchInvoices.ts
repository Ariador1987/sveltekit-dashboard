import type { Customer, Invoice } from '@prisma/client';
import { prisma } from './prisma';

export const fetchInvoices = async ({
	skip = 5,
	take = 0
}: {
	skip?: number;
	take?: number;
} = {}): Promise<Array<Invoice & { customer: Customer }>> => {
	return await prisma.invoice.findMany({
		include: { customer: true },
		take,
		skip,
		orderBy: { date: 'desc' }
	});
};
