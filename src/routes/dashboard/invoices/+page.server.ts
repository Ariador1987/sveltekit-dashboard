import type { PageServerLoad } from '../$types';
import { fetchInvoices } from '$lib/server/db/fetchInvoices';

const ITEMS_PER_PAGE = 5;

export const load: PageServerLoad = ({ url }) => {
	const page = url.searchParams.has('page')
		? parseInt(url.searchParams.get('page') as string)
		: 1;

	const invoices = fetchInvoices({ take: ITEMS_PER_PAGE, skip: (page - 1) * ITEMS_PER_PAGE });

	return {
		streamed: {
			invoices
		}
	};
};
