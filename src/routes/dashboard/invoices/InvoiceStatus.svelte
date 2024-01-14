<script lang="ts">
	import { Check, Clock } from 'lucide-svelte';
	// import * as m from '$m';

	export let status: string;

	let normalizedStatus = status.toLowerCase();
</script>

<span
	class="inline-flex items-center justify-center rounded-full p-1 text-xs capitalize"
	class:pending={normalizedStatus === 'pending'}
	class:paid={normalizedStatus === 'paid'}
>
	{#if normalizedStatus === 'pending'}
		<div class="flex items-center justify-center px-2">
			<!-- {m.pending()} -->{normalizedStatus.toUpperCase()}
			<Clock class="ml-1 text-gray-500" />
		</div>
	{:else if normalizedStatus === 'paid'}
		<div class="flex items-center justify-center px-2">
			<!-- {m.paid()} -->{normalizedStatus.toUpperCase()}
			<Check class="ml-1 text-white" />
		</div>
	{/if}
</span>

<style>
	.pending {
		@apply bg-gray-100 text-gray-500;
	}

	.paid {
		@apply bg-green-500 text-white;
	}
</style>
