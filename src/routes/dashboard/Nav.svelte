<script lang="ts">
	import { Globe } from 'lucide-svelte';
	import Navlinks from './Navlinks.svelte';
</script>

<nav class="flex h-full flex-col px-3 py-4 md:px-2">
	<a
		class="mb-2 flex h-20 items-end justify-center rounded-md bg-primary-600 p-4 no-underline md:h-40 md:justify-start"
		href="/"
		><div class="text-white md:w-40">
			<div class="flex flex-row items-center font-serif leading-none text-white">
				<Globe size={36} class="mr-2 rotate-12" />
				<span class="text-[44px]">Acme</span>
			</div>
		</div></a
	>
	<Navlinks />
</nav>

<style>
</style>
