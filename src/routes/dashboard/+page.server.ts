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
			([totalRevenue, latestInvoices, cardData]) => {
				return { totalRevenue, latestInvoices, cardData };
			}
		);

		return {
			streamed: { stats }
		};
	} catch (error) {
		console.error('Error reading data:', error);
	}
};
