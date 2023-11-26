<script>
	import '@fontsource-variable/inter';
	import '@fontsource/lusitana';
	import '../app.pcss';
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		// onNavigate takes in a single parameter, a callback, if that callback returns a Promise
		// SvelteKit will wait for that callback to complete before completing navigation
		if (
			!document.startViewTransition ||
			navigation.from?.url.pathname === navigation.to?.url.pathname
		)
			return;

		return new Promise((resolve) => {
			document.startViewTransition &&
				document.startViewTransition(async () => {
					resolve();
					await navigation.complete;
				});
		});
		/* 
            The first Promise take a 'screenshot' of the FROM page
            the second one takes a 'screenshot' of the TO page
            and then they get diffed.
        */
	});
</script>

<slot />

<style>
	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(100%);
		}
	}

	:root::view-transition-old(root) {
		pointer-events: none;
		animation: 300ms ease-out both fade-out;
	}

	:root::view-transition-new(root) {
		pointer-events: none;
		animation: 300ms ease-out both slide-from-right;
	}
</style>
