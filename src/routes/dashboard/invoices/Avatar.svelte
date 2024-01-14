<script lang="ts">
	export let alt: string;
	export let src: string;
	export let size: number;
	// export let width: number;
	// export let cls: string;
	// export let src: string;
</script>

<img {src} class="rounded-full" width={size} height={size} {alt} />
