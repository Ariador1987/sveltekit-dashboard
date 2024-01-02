import type { PageServerLoad } from './$types';
import {
	delay,
	fetchAllRevenue,
	fetchCardData,
	fetchLatestInvoices
} from '$lib/server/db/dashboardData';

export const load: PageServerLoad = async () => {
	try {
		// Use Prisma Client methods to read data
		const stats = Promise.all([fetchAllRevenue(), fetchLatestInvoices(), fetchCardData()]).then(
			async ([totalRevenue, latestInvoices, cardData]) => {
				await delay();
				return { totalRevenue, latestInvoices, cardData };
			}
		);

		const test1: Promise<string> = new Promise((resolve) => {
			setTimeout(() => {
				resolve('Promise 1');
			}, 1000);
		});
		const test2: Promise<string> = new Promise((resolve) => {
			setTimeout(() => {
				resolve('Promise 2');
			}, 2000);
		});
		const test3: Promise<string> = new Promise((resolve) => {
			setTimeout(() => {
				resolve('Promise 3');
			}, 3000);
		});

		return {
			streamed: { stats, tests: { test1, test2, test3 } }
		};
	} catch (error) {
		console.error('Error reading data:', error);
	}
};
