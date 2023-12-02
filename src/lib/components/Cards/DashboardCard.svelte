<script lang="ts">
	import { Coins, Clock3, Inbox, Users2 } from 'lucide-svelte';
	import Card from './Card.svelte';
	import type { CardData } from '$lib/server/db/dashboardData';
	import { formatCurrencyToDollars } from '$lib/util';

	export let cardData: CardData;
</script>

<Card title="Collected" value={formatCurrencyToDollars(cardData?.amountCollected)}>
	<svelte:fragment slot="icon">
		<Coins />
	</svelte:fragment>
</Card>
<Card title="Pending" value={formatCurrencyToDollars(cardData?.amountPending)}>
	<svelte:fragment slot="icon">
		<Clock3 />
	</svelte:fragment></Card
>
<Card title="Total Invoices" value={cardData?.totalCustomers}>
	<svelte:fragment slot="icon">
		<Inbox />
	</svelte:fragment></Card
>
<Card title="Customers" value={cardData?.totalInvoices}>
	<svelte:fragment slot="icon">
		<Users2 />
	</svelte:fragment>
</Card>
