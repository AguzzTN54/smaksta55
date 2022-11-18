<script>
	import Links from '$lib/components/Links.svelte';
	import { fade } from 'svelte/transition';
</script>

<section in:fade={{ duration: 500, delay: 500 }}>
	<h1>Coming Soon</h1>
	<h2>Jadwal akan dirilis segera</h2>
	<Links />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		text-align: center;
		width: 100%;
		height: 100%;
	}

	h1 {
		font-family: var(--font-logo);
		font-size: calc(0.08 * var(--screenWidth));
		line-height: 0;
	}

	h2 {
		text-transform: uppercase;
		font-size: 100%;
	}
</style>
