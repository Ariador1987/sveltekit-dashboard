import { prisma } from './prisma';

export const fetchAllRevenue = () =>
	prisma.revenue.findMany({
		distinct: ['month']
	});
export const fetchLatestInvoices = () =>
	prisma.invoice.findMany({
		include: { customer: true }
	});

export type CardData = {
	amountCollected: number;
	amountPending: number;
	totalCustomers: number;
	totalInvoices: number;
};

export const delay = async (delayAmount = 5000) =>
	await new Promise((res) => setTimeout(res, delayAmount));

export const fetchCardData = async (): Promise<CardData> => {
	const [amountCollectedResult, amountPendingResult, totalInvoices, totalCustomers] =
		await Promise.all([
			await prisma.invoice.aggregate({ _sum: { amount: true }, where: { status: 'PAID' } }),
			await prisma.invoice.aggregate({
				_sum: { amount: true },
				where: { status: 'UNPAID' }
			}),
			await prisma.invoice.count(),
			await prisma.customer.count()
		]);

	// To simulate slow request with streaming
	// await delay();

	return {
		amountCollected: amountCollectedResult._sum.amount || 0,
		amountPending: amountPendingResult._sum.amount || 0,
		totalCustomers,
		totalInvoices
	};
};
