<script>
	import '../app.pcss';
    import Header from "./Header.svelte"
    import { MoveRight } from 'lucide-svelte'
</script>

<Header/>
<main class="flex grow flex-col gap-4 md:flex-row">
    <div class="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <p class="font-serif text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Welcome to Acme.</strong> This is the example for the
            <a href="https://johnnify.com/learn/nextjs-to-sveltekit">
                Learn SvelteKit course
            </a>
            by <a href="https://magrippis.com">Johnny</a>, inspired by the
			<a href="https://nextjs.org/learn/">Next.js Learn Course</a>, brought to
			you by Vercel.
        </p>
        <a
			class="flex items-center gap-4 self-start rounded-lg bg-primary-500 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-400 md:text-base"
			href="/login">
            <span>Log in</span>
            <MoveRight />
        </a>
    </div>
    <slot/>
</main>
