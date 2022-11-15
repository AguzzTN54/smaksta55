<script>
	import { screenHeight, screenWidth } from '$lib/stores';
	import './styles.css';

	$: innerHeight = 0;
	$: innerWidth = 0;
	$: screenHeight.set(innerHeight);
	$: screenWidth.set(innerWidth);
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<main>
	<slot />
</main>
