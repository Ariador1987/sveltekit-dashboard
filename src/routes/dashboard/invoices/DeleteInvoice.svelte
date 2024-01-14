<script lang="ts">
	import { Trash2 } from 'lucide-svelte';

	export let id: string;
</script>

<form>
	<a href="/dashboard/invoices/{id}">
		<span class="sr-only">Delete</span>
		<Trash2 />
	</a>
</form>
