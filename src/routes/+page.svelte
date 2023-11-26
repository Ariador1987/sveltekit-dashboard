<script lang="ts">
	import Header from './Header.svelte';
	import {
		src,
		width,
		height
	} from './flowers-OTO-1920x1080.jpg?w=1920&h=1080&format=webp&as=metadata&img';
	import avifFlowers from './flowers-OTO-1920x1080.jpg?w=1920&h=1080&format=avif&as=srcset&img';
	import {
		src as src2,
		width as width2,
		height as height2
	} from './plane-OTO-1920x1080.jpg?w=1920&h=1080&format=webp&as=metadata&img';
	import avifPlane from './plane-OTO-1920x1080.jpg?w=1920&h=1080&format=avif&as=srcset&img';
	import { MoveRight } from 'lucide-svelte';
</script>

<Header />
<main class="flex grow flex-col gap-4 md:flex-row">
	<div
		class="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20"
	>
		<p class="font-serif text-xl text-gray-800 md:text-3xl md:leading-normal">
			<strong>Welcome to Acme.</strong> This is the example for the
			<a href="https://johnnify.com/learn/nextjs-to-sveltekit"> Learn SvelteKit course </a>
			by <a href="https://magrippis.com">Johnny</a>, inspired by the
			<a href="https://nextjs.org/learn/">Next.js Learn Course</a>, brought to you by Vercel.
		</p>
		<a
			class="flex items-center gap-4 self-start rounded-lg bg-primary-500 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-400 md:text-base"
			href="/login"
		>
			<span>Log in</span>
			<MoveRight />
		</a>
	</div>
	<div class="flex items-center justify-center p-6 md:w-3/5">
		<picture class="md:hidden">
			<source srcset={avifFlowers} type="image/avif" />
			<img
				alt="Screenshots of the dashboard project showing two different mobile views"
				{src}
				class="block object-fill shadow-lg shadow-slate-400 rounded-lg"
				{height}
				{width}
			/>
		</picture>
		<picture class="hidden md:block">
			<source srcset={avifPlane} type="image/avif" />
			<img
				alt="Screenshots of the dashboard project showing two different mobile views"
				src={src2}
				class="block object-fill shadow-lg shadow-slate-400 rounded-lg"
				height={height2}
				width={width2}
			/>
		</picture>
	</div>
</main>
