<script lang="ts">
	import { Pencil } from 'lucide-svelte';

	export let id: string;
</script>

<form>
	<a href="/dashboard/invoices/{id}">
		<span class="sr-only">Update</span>
		<Pencil />
	</a>
</form>
